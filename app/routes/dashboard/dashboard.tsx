import {
  type ClientActionFunctionArgs,
  type ClientLoaderFunctionArgs,
  redirect,
} from "react-router";
import { DeveloperDashboard, CompanyDashboard } from "~/components/dashboard";
import { getUser } from "~/firebase/auth";
import type { Route } from "./+types/dashboard";
import type {  CreateChallengeInput } from "~/firebase/challenges";
import {
  createChallenge,
  fetchChallengesByCompany,
  fetchChallenges,
  submitToChallenge,
  fetchUserSubmissions,
} from "~/firebase/challenges";
import { getDoc, doc } from "firebase/firestore";
import { db } from "~/firebase/client";

export const clientLoader = async ({ request }: ClientLoaderFunctionArgs) => {
  try {
    const user = await getUser();
    if (!user) {
      throw redirect(`/`);
    }
    let challenges = [];

    if (user.userType === "company") {
      challenges = await fetchChallengesByCompany(user.uid);
    }
    const submittedChallenges = await fetchUserSubmissions(user.uid);
    const availableChallenges = await fetchChallenges();
    return { user, challenges, availableChallenges, submittedChallenges };
  } catch (error) {
    if (error instanceof Response) {
      throw error;
    }
  }
};

export const clientAction = async ({ request }: ClientActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const intent = formData.get("intent");

    if (intent === "create-challenge") {
      const user = await getUser();
      if (!user || user.userType !== "company") {
        return {
          error: "Unauthorized: Only company users can create challenges",
          status: 403,
        };
      }

      const title = formData.get("title")?.toString();
      const description = formData.get("description")?.toString();
      const difficulty = formData.get("difficulty")?.toString();
      const techStack = formData.getAll("techStack") as string[];
      const dueDate = formData.get("dueDate")?.toString();
      const requirements = formData.get("requirements")?.toString();
      const submissionGuidelines = formData
        .get("submissionGuidelines")
        ?.toString();
      const companyId = formData.get("companyId")?.toString();

      if (
        !title ||
        !description ||
        !difficulty ||
        !techStack.length ||
        !dueDate ||
        !companyId
      ) {
        return { error: "Missing required fields", status: 400 };
      }
      const userDocRef = doc(db, "users", companyId);
      const userDocSnap = await getDoc(userDocRef);
      if (!userDocSnap.exists()) {
        return { error: "Company user not found", status: 404 };
      }

      const userData = userDocSnap.data();
      const companyName = userData.displayName || "Unknown Company";
      const companyid = userData.uid;

      const challengeData: CreateChallengeInput = {
        title,
        company: companyName,
        companyid: companyid,
        difficulty,
        tags: techStack,
        description,
        dueDate,
        details: {
          deadline: dueDate,
          submissions: 0,
          techStack,
          fullDescription: description,
          keyRequirement: requirements
            ? requirements.split("\n").filter((r) => r.trim())
            : [],
          bonusPoints: [],
          submissionRequirements: submissionGuidelines
            ? submissionGuidelines.split("\n").filter((s) => s.trim())
            : [],
        },
      };

      await createChallenge(challengeData);
      return {
        success: true,
        message: "Challenge created successfully!",
      };
    }
    if (intent === "submit-challenge") {
      const user = await getUser();
      if (!user || user.userType !== "developer") {
        return {
          error: "Unauthorized: Only developers can submit to challenges",
          status: 403,
        };
      }

      const challengeId = formData.get("challengeId")?.toString();
      const title = formData.get("title")?.toString();
      const companyName = formData.get("compnayName")?.toString();
      const userId = formData.get("userId")?.toString();
      const submissionLink = formData.get("githubUrl")?.toString();
      const liveLink = formData.get("liveUrl")?.toString();
      const shaHash = formData.get("shaHash")?.toString();

      if (!challengeId || !userId || !submissionLink || !liveLink) {
        return {
          error: "Missing required fields (challengeId, userId, or githubUrl)",
          status: 400,
        };
      }

      const submissionData = {
        challengeId,
        userId,
        submissionLink,
        liveLink,
        companyName,
        title,
        shaHash: shaHash || undefined,
      };

      await submitToChallenge(submissionData);
      return {
        success: true,
        message: "Submission created successfully!",
        status: 200,
      };
    }

    return { error: "Invalid intent", status: 400 };
  } catch (error) {
    console.error("Error in clientAction:", error);
    return { error: "Failed to submit your solutio", status: 500 };
  }
};

export default function DashboardPage({ loaderData }: Route.ComponentProps) {
  const { user, challenges, availableChallenges, submittedChallenges } =
    loaderData;

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="border-b border-grey-500 pb-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Welcome back {user.name}
                </h1>
                <p className="mt-3 text-sm text-muted-foreground">
                  {user.userType === "developer"
                    ? "Track your progress, submissions, and achievements"
                    : "Create and Manage your challenges and review submissions"}
                </p>
              </div>
            </div>
          </div>

          {user.userType === "developer" ? (
            <DeveloperDashboard
              submittedChallenges={submittedChallenges}
              user={user}
              availableChallenges={availableChallenges}
            />
          ) : (
            <CompanyDashboard challenges={challenges} user={user} />
          )}
        </div>
      </div>
    </div>
  );
}
