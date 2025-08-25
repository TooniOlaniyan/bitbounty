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
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start space-x-4">
        {/* Icon */}
        <div className="flex-shrink-0 mt-1">{getIcon(entry.type)}</div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {entry.type}
              </h3>
              {entry.amount && (
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded">
                  {entry.amount}
                </span>
              )}
            </div>
            <span className="text-sm text-gray-500">{entry.timestamp}</span>
          </div>

          {/* Actor */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-gray-700 font-medium">{entry.actor}</span>
            <span
              className={`px-2 py-1 text-xs font-medium rounded ${getActorTypeColor(entry.actorType)}`}
            >
              {entry.actorType}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-3">{entry.description}</p>

          {/* Challenge */}
          <p className="text-sm text-gray-600 mb-3">
            <span className="font-medium">Challenge:</span> {entry.challenge}
          </p>

          {/* Transaction Hash (if exists) */}
          {entry.transactionHash && (
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <div className="bg-gray-100 px-3 py-2 rounded font-mono text-xs text-gray-700 flex-1 mr-3 truncate">
                  {entry.transactionHash}
                </div>
                {entry.status && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {entry.status}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditLogCard;
