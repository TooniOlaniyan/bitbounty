import { type LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/challenges";
import { fetchChallenges } from "~/firebase/challenges";
import ChallengeCard from "../../components/ChallengeListCard";


export const clientLoader = async ({ request }: LoaderFunctionArgs) => {
  const challenges = await fetchChallenges();

  return { challenges   };
};

const ChallengesPage = ({ loaderData }: Route.ComponentProps) => {
  const { challenges  } = loaderData;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Browse Challenges
        </h1>
        <p className="text-sm font-semibold text-muted-foreground/70 max-w-2xl">
          Discover coding challenges from top companies. Solve real problems and
          earn rewards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge: any) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};

export default ChallengesPage;
