import { Trophy, ArrowUpCircle, Bitcoin } from "lucide-react";

interface AuditLogCardProps {
  entry: {
    id: string;
    type: "Bounty Paid" | "Winner Selected" | "Solution Submitted";
    actor: string;
    actorType: "company" | "developer";
    description: string;
    challenge: string;
    amount?: string;
    transactionHash?: string;
    status?: string;
    timestamp: string;
  };
}

const AuditLogCard = ({ entry }: AuditLogCardProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "Bounty Paid":
        return <Bitcoin className="w-6 h-6 text-orange-500" />;
      case "Winner Selected":
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case "Solution Submitted":
        return <ArrowUpCircle className="w-6 h-6 text-blue-500" />;
      default:
        return <div className="w-6 h-6 bg-gray-300 rounded-full" />;
    }
  };

  const getActorTypeColor = (type: string) => {
    return type === "company"
      ? "bg-blue-100 text-blue-800"
      : "bg-green-100 text-green-800";
  };

  return (
    <div className="bg-white rounded-xl px-6 py-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">{getIcon(entry.type)}</div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-semibold text-gray-900">
                {entry.type}
              </h3>
            </div>
            <span className="text-sm text-gray-500">{entry.timestamp}</span>
          </div>

          <div className="flex items-center space-x-2 mb-3">
            <span className="text-muted-foreground/70 text-sm font-medium">{entry.actor}</span>
            <span
              className={`px-2 py-1 text-xs font-medium rounded ${getActorTypeColor(entry.actorType)}`}
            >
              {entry.actorType}
            </span>
          </div>

          <p className="text-muted-foreground/60 mb-3 text-sm">{entry.description}</p>

          <p className="text-sm text-gray-600 mb-3">
            <span className="font-bold text-muted-foreground/90">Challenge:</span> {entry.challenge}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuditLogCard;
