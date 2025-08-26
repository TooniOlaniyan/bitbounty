import { db } from "./client";
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  getDoc,
  addDoc,
  query,
  where,
  runTransaction,
} from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";

export interface Challenge {
  id: string;
  title?: string;
  company: string;
  companyid: string;
  difficulty: string;
  tags: String[];
  description?: string;
  dueDate: string;
  details: {
    deadline: string;
    timeRemaining: string;
    submissionRequirements: string[];
    submissions: number;
    techStack: string[];
    fullDescription: string;
    keyRequirement: string[];
  };
}
export interface Submission {
  id: string;
  challengeId: string;
  userId: string;
  submissionTime: Timestamp;
  status: "pending" | "reviewed" | "accepted" | "rejected";
  submissionLink: string;
  details: {
    notes?: string;
  };
  reviewNotes?: string;
  reviewedBy?: string;
  reviewedAt?: Timestamp;
}
export interface CreateSubmissionInput {
  challengeId: string;
  userId: string;
  submissionLink: string;
  liveLink: string;
  shaHash: string;
  title: string;
  companyName: string;
}

export interface CreateChallengeInput {
  title?: string;
  company: string;
  companyid: string;
  difficulty: string;
  tags: string[];
  description?: string;
  dueDate: string;
  details: {
    deadline: string;
    timeRemaining?: string;
    submissions: number;
    techStack: string[];
    fullDescription: string;
    keyRequirement: string[];
    bonusPoints: string[];
    submissionRequirements: string[];
  };
}

export const fetchChallenges = async () => {
  const challengesCol = collection(db, "challenges");
  const challengesSnapshot = await getDocs(challengesCol);

  return challengesSnapshot.docs.map((doc) => {
    const data = doc.data();

    const dueDate =
      data.dueDate instanceof Timestamp
        ? formatDistanceToNow(data.dueDate.toDate(), { addSuffix: true })
        : data.dueDate;

    return {
      id: doc.id,
      ...data,
      dueDate,
    };
  });
};

export const getChallengeById = async (id: string) => {
  const challengeRef = doc(db, "challenges", id);
  const challengeSnap = await getDoc(challengeRef);

  if (!challengeSnap.exists()) {
    throw new Error("Challenge not found");
  }

  const data = challengeSnap.data();

  return {
    id: challengeSnap.id,
    ...data,
    dueDate:
      data.dueDate instanceof Timestamp
        ? formatDistanceToNow(data.dueDate.toDate(), { addSuffix: true })
        : data.dueDate,
  } as Challenge;
};

export const createChallenge = async (challengeData: CreateChallengeInput) => {
  try {
    const challengesCol = collection(db, "challenges");
    const newChallenge = {
      ...challengeData,
      dueDate: Timestamp.fromDate(new Date(challengeData.dueDate)),
      createdAt: Timestamp.now(),
    };
    const docRef = await addDoc(challengesCol, newChallenge);
    return { id: docRef.id, ...newChallenge };
  } catch (error) {
    console.error("Error creating challenge:", error);
    throw new Error("Failed to create challenge");
  }
};

export const fetchChallengesByCompany = async (companyId: string) => {
  try {
    const challengesCol = collection(db, "challenges");
    const q = query(challengesCol, where("companyid", "==", companyId));
    const challengesSnapshot = await getDocs(q);

    return challengesSnapshot.docs.map((doc) => {
      const data = doc.data();

      const dueDate =
        data.dueDate instanceof Timestamp
          ? data.dueDate.toDate().toISOString().split("T")[0]
          : data.dueDate;

      return {
        id: doc.id,
        ...data,
        dueDate,
        details: {
          ...data.details,
        },
      } as Challenge;
    });
  } catch (error) {
    console.error("Error finding challenge:", error);
    throw new Error("Failed to find company challenge");
  }
};

export const submitToChallenge = async (
  submissionData: CreateSubmissionInput
) => {
  const submissionsCol = collection(db, "submissions");
  const challengeRef = doc(db, "challenges", submissionData.challengeId);

  const newSubmission = {
    ...submissionData,
    submissionTime: Timestamp.now(),
    status: "pending" as const,
  };

  return await runTransaction(db, async (transaction) => {
    const challengeSnap = await transaction.get(challengeRef);
    if (!challengeSnap.exists()) {
      throw new Error("Challenge not found");
    }
    const challengeData = challengeSnap.data();
    const newSubmissionsCount = (challengeData.details.submissions || 0) + 1;

    transaction.update(challengeRef, {
      "details.submissions": newSubmissionsCount,
    });

    const docRef = await addDoc(submissionsCol, newSubmission);
    return { id: docRef.id, ...newSubmission };
  });
};

export const fetchSubmissionsByChallenge = async (challengeId: string) => {
  const submissionsCol = collection(db, "submissions");
  const q = query(submissionsCol, where("challengeId", "==", challengeId));
  const submissionsSnapshot = await getDocs(q);

  return submissionsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Submission[];
};
export const fetchActiveChallengesByCompany = async (companyId: string) => {
  const challengesCol = collection(db, "challenges");
  const q = query(
    challengesCol,
    where("companyId", "==", companyId),
    where("dueDate", ">", Timestamp.now())
  );
  const challengesSnapshot = await getDocs(q);

  return challengesSnapshot.docs.map((doc) => {
    const data = doc.data();
    const dueDate =
      data.dueDate instanceof Timestamp
        ? data.dueDate.toDate().toISOString().split("T")[0]
        : data.dueDate;

    return {
      id: doc.id,
      ...data,
      dueDate,
      details: {
        ...data.details,
        timeRemaining: calculateTimeRemaining(data.dueDate),
      },
    } as Challenge;
  });
};

export const fetchCompletedChallengesByCompany = async (companyId: string) => {
  const challengesCol = collection(db, "challenges");
  const q = query(
    challengesCol,
    where("companyId", "==", companyId),
    where("dueDate", "<=", Timestamp.now())
  );
  const challengesSnapshot = await getDocs(q);

  return challengesSnapshot.docs.map((doc) => {
    const data = doc.data();
    const dueDate =
      data.dueDate instanceof Timestamp
        ? data.dueDate.toDate().toISOString().split("T")[0]
        : data.dueDate;

    return {
      id: doc.id,
      ...data,
      dueDate,
      details: {
        ...data.details,
        timeRemaining: calculateTimeRemaining(data.dueDate),
      },
    } as Challenge;
  });
};

export const reviewSubmission = async (
  submissionId: string,
  updates: {
    status: "pending" | "reviewed" | "accepted" | "rejected";
    reviewNotes?: string;
  }
) => {
  const submissionRef = doc(db, "submissions", submissionId);
  await runTransaction(db, async (transaction) => {
    const submissionSnap = await transaction.get(submissionRef);
    if (!submissionSnap.exists()) {
      throw new Error("Submission not found");
    }
    transaction.update(submissionRef, {
      status: updates.status,
      reviewNotes:
        updates.reviewNotes || submissionSnap.data().reviewNotes || "",
      reviewedBy: getUser()?.id || "",
      reviewedAt: Timestamp.now(),
    });
  });
};

export const fetchUserSubmissions = async (userId: string) => {
  const submissionsCol = collection(db, "submissions");
  const q = query(submissionsCol, where("userId", "==", userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() }) as Submission
  );
};
