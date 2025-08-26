import { Link } from "react-router";

interface ChallengeListCardProps {
  challenge: {
    id: string;
    title: string;
    company: string;
    difficulty: string;
    pay: string;
    dueDate: string;
    tags: string[];
    description: string;
    details?: any;
  };
}

const ChallengeListCard = ({ challenge }: ChallengeListCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="block bg-white rounded-xl p-6 shadow-lg border border-gray-100">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}
              >
                {challenge.difficulty}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
              {challenge.title}
            </h3>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3 font-semibold">
          {challenge.company}
        </p>
        <p className="text-muted-foreground font-light text-sm mb-4 flex-1 line-clamp-3">
          {challenge.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {challenge.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-gray-500 text-sm">
            Due {challenge.dueDate}
          </span>

          <Link
            to={`/challenges/${challenge.id}`}
            className=" border border-border rounded-md py-1 px-3 font-medium text-xs hover:text-primary hover:font-bold transition-all ease-in 0.3s"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChallengeListCard;
