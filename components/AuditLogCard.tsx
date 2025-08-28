import { Trophy, ArrowUpCircle, Bitcoin, Clock10 } from "lucide-react";

interface AuditLogCardProps {
  entry: {
    id: string;
    submissionTime: string;
    userType: string;
    challengeId: string;
    username: string;
    title: string;
    status: "pending" | "rejected" | "approved";
    submissionLink: string;
    type: "Bounty Paid" | "Winner Selected" | "Solution Submitted";
    actorType: "company" | "developer";
  };
}

const AuditLogCard = ({ entry }: AuditLogCardProps) => {
  const getIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock10 className="w-6 h-6 text-orange-500" />;
      case "approved":
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case "rejected":
        return <ArrowUpCircle className="w-6 h-6 text-blue-500" />;
      default:
        return <div className="w-6 h-6 bg-gray-300 rounded-full" />;
    }
  };

  const getActorTypeColor = (status: string) => {
    return status === "pending"
      ? "bg-blue-100 text-blue-800"
      : "bg-green-100 text-green-800";
  };

  return (
    <div className="bg-white rounded-xl px-6 py-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">{getIcon(entry.status)}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-semibold text-gray-900">
                {entry.username}
              </h3>
            </div>
            <span className="text-sm text-gray-500">
              {entry.submissionTime}
            </span>
          </div>

          <div className="flex items-center space-x-2 mb-3">
            <span className="text-muted-foreground/70 text-sm font-medium">
              {entry.challengeId}
            </span>
            <span
              className={`px-2 py-1 text-xs font-medium rounded ${getActorTypeColor(entry.actorType)}`}
            >
              {entry.status}
            </span>
          </div>

          <p className="text-muted-foreground/60 mb-3 text-sm">{entry.title}</p>

          <a
            href={entry.submissionLink}
            target="_blank"
            className="text-sm text-gray-600 mb-3"
          >
            <span className="font-bold text-muted-foreground/90">
              Challenge:
            </span>{" "}
            {entry.submissionLink}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuditLogCard;
