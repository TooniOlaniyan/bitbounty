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
    console.log("this is the snap shot", challengesSnapshot);

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
