import { Link,  type LoaderFunctionArgs } from "react-router";
import { getChallengeById } from "~/firebase/challenges";
import { getUser } from "~/firebase/auth";
import { formatDistanceToNow } from "date-fns";
import type { Route } from "./+types/challengeId";
import { Calendar, Clock, Users, ArrowLeft } from "lucide-react";
import MetricsCard from "components/MetricsCard";
import { calculateTimeRemaining } from "~/lib/utils";

export const clientLoader = async ({ params }: LoaderFunctionArgs) => {
  const user = await getUser();
  const { challengeId } = params;
  if (!challengeId) throw new Error("Challenge ID is required");

  const challenge = await getChallengeById(challengeId);
  return { challenge, user };
};

export default function ChallengeDetails({ loaderData }: Route.ComponentProps) {
  const { challenge, user } = loaderData;

  if (!challenge) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Challenge Not Found
          </h1>
          <Link to="/challenges" className="back-button">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Challenges
          </Link>
        </div>
      </div>
    );
  }

  const { details } = challenge;

  return (
    <div className="max-w-6xl px-4 py-8">
      <Link to="/challenges" className="back-button">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Challenges
      </Link>
      <div className="flex justify-between items-start mb-6">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {challenge.title}
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gray-600 text-sm font-semibold">
              {challenge.company}
            </span>
            <span
              className={`px-3 py-1 rounded-md text-xs font-medium ${
                challenge.difficulty === "Easy"
                  ? "bg-green-100 text-green-800"
                  : challenge.difficulty === "Medium"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
              }`}
            >
              {challenge.difficulty}
            </span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 font-semibold rounded-md text-xs">
              {challenge?.tags[0]}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricsCard
          value={formatDistanceToNow(details.deadline, {
            addSuffix: true,
          })}
          icon={Calendar}
          title="Deadline"
        />

        <MetricsCard
          icon={Clock}
          title="Time Remaining"
          value={calculateTimeRemaining(details.deadline)}
        />
        <MetricsCard
          icon={Users}
          title="Submissions"
          value={details.submissions}
        />
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        <div className="flex flex-col gap-8 flex-3">
          <section className="border-[1.5px] rounded-2xl py-2 px-6 border-border">
            <h3 className="text-md font-semibold text-gray-900 mb-3">
              Challenge Description
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              {details.fullDescription}
            </p>
            <div className="mb-8 mt-8">
              <h3 className="text-md font-semibold text-gray-900 mb-3">
                Key Requirements
              </h3>
              <ul className="space-y-2">
                {details?.keyRequirement.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="border-[1.5px] rounded-2xl py-2 px-6 border-border">
            <h3 className="text-md font-semibold text-gray-900 mb-3">
              Submission Requirements
            </h3>
            <ul className="space-y-2">
              {details?.submissionRequirements?.map((req, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="flex flex-col gap-8 flex-2">
          <section className="border-[1.5px] rounded-2xl py-2 px-6 border-border">
            <h3 className="text-md font-semibold text-gray-900 mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {details.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted-foreground/10 text-xs font-bold rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
          <section className="border-[1.5px] rounded-2xl py-2 px-6 border-border">
            <h3 className="text-md font-semibold text-gray-900 mb-3">
              Submmit Solution
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              {user && user.userType === "developer"
                ? "Submit your solution to this challenge"
                : "You need to be logged in as a developer to submit solutions."}
            </p>
            <Link
              to={
                user && user.userType === "developer" ? "/dashboard" : "/signin"
              }
              className="inline-block bg-gray-900 text-white px-4 text-xs font-bold py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              {user && user.userType === "developer"
                ? "Submit"
                : " Sign In as Developer"}
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
