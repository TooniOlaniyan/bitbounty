import { challengesData } from "constants/index";
import ChallengeCard from "../../components/ChallengeCard";

export default function ChallengesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className=" mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Browse Challenges
        </h1>
        <p className="text-sm font-semibold text-muted-foreground/70 max-w-2xl">
          Discover coding challenges from top companies. Solve real problems and
          earn rewards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challengesData.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
