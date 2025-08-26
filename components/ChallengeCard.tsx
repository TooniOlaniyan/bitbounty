import { Users, Calendar } from "lucide-react";
import { Button } from "~/components/ui/button";
import { format } from "date-fns";

interface ChallengeCardProps {
  challengeId: string;
  title: string;
  status: "active" | "expired";
  dueDate: string;
  submissions?: number;
  userType: "company" | "developer";
  onReview?: () => void;
  onSubmitSolution?: (challengeId: string) => void;
}

export default function ChallengeCard({
  challengeId,
  title,
  status,
  dueDate,
  submissions = 0,
  userType,
  onReview,
  onSubmitSolution,
}: ChallengeCardProps) {
  const statusConfig = {
    active: {
      label: "Active",
      className: "bg-primary/10 text-primary border-primary/20",
    },
    expired: {
      label: "Completed",
      className: "bg-success/10 text-success border-success/20",
    },
  };

  const config = statusConfig[status];


  const buttonText =
    userType === "company" ? "Review Submissions" : status === "active" ? "Submit Solution" : "";
  const isButtonDisabled =
    userType === "developer" && status === "expired" && !onSubmitSolution;

  return (
    <div className="border border-grey-500 rounded-xl p-6 hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-4">
            <h4 className="text-md font-semibold text-foreground">{title}</h4>
            <span
              className={`px-3 py-1 text-sm font-medium rounded-full border ${config.className}`}
            >
              {config.label}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Due Date</p>
                <p className="font-semibold text-foreground">
                  {dueDate}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Submissions</p>
                <p className="font-semibold text-foreground">{submissions}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-6">
          <Button
            onClick={() =>
              userType === "company" && onReview ? onReview() : onSubmitSolution && status === "active" ? onSubmitSolution(challengeId) : undefined
            }
            disabled={isButtonDisabled}
            className={
              status === "active" && userType === "developer"
                ? "bg-primary hover:bg-primary/80"
                : status === "active" && userType === "company"
                  ? "bg-dark-muted/80"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
            }
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
