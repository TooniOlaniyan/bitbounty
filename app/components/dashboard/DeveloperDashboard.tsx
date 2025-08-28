import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import MetricCard from "components/MetricCard";
import SubmissionDialog from "components/SubmissionDialog";
import {
  Trophy,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react";
import ChallengeCard from "components/ChallengeCard";
import { formatDistanceToNow } from "date-fns";
import { ActivityItem } from "components/ActivityItem";

export function DeveloperDashboard({
  availableChallenges,
  user,
  submittedChallenges,
}: any) {
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState<any | null>(null);
  const totalSubmitted = submittedChallenges.length;
  const completedChallenge = submittedChallenges.filter(
    (s: any) => s.status === "approved"
  ).length;
  const pendingChallenge = submittedChallenges.filter(
    (s: any) => s.status === "pending"
  ).length;

  const handleSubmitSolution = (challenge: any) => {
    setSelectedChallenge(challenge);
    setIsSubmitDialogOpen(true);
  };
  return (
    <div>
      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 border-[1.5px] border-border bg-muted  rounded-xl p-0">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-primary data-[state=active]:text-muted data-[state=active]:shadow-sm"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="challenges"
            className="data-[state=active]:bg-primary data-[state=active]:text-muted data-[state=active]:shadow-sm"
          >
            Available Challenges
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MetricCard
              icon={Trophy}
              title="Total Challenge"
              value={totalSubmitted ?? 0}
              description="Total attempted challenge"
            />
            <MetricCard
              icon={Award}
              title="Completed"
              value={completedChallenge ?? 0}
              description="Challenges done"
            />
            <MetricCard
              icon={TrendingUp}
              title="Pending"
              value={pendingChallenge ?? 0}
              description="Challenges Pending"
            />
          </div>

          <div className="bg-card rounded-2xl p-8 card-shadow border border-grey-500">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Recent Activity
            </h3>
            <p className="text-sm text-muted-foreground/80">
              Your latest submissions and achievements
            </p>
            <div className="p-8 flex flex-col gap-10">
              {submittedChallenges &&
                submittedChallenges.length > 0 &&
                submittedChallenges.map((submitted: any, index: number) => (
                  <ActivityItem
                    key={index}
                    icon={CheckCircle}
                    title={submitted.title}
                    company={submitted.company}
                    date={formatDistanceToNow(
                      submitted.submissionTime.toDate(),
                      {
                        addSuffix: true,
                      }
                    )}
                    status={submitted.status}
                  />
                ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="challenges" className="space-y-8">
          <div className="bg-card rounded-2xl p-4 md:p-8 card-shadow border border-grey-500">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Available Challenges
            </h3>
            <p className="text-lg text-muted-foreground">
              Browse and apply for new challenges
            </p>
            <div className="p-2 md:p-8 flex flex-col gap-10">
              {availableChallenges &&
                availableChallenges.length > 0 &&
                availableChallenges.map((challenge, index) => (
                  <ChallengeCard
                    challengeId={challenge.id}
                    key={index}
                    title={challenge.title}
                    status="active"
                    userType="developer"
                    dueDate={challenge.dueDate}
                    submissions={challenge?.details?.submissions}
                    onSubmitSolution={() => handleSubmitSolution(challenge)}
                  />
                ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      {isSubmitDialogOpen && selectedChallenge && (
        <SubmissionDialog
          challenge={selectedChallenge}
          userId={user.uid}
          onClose={() => {
            setIsSubmitDialogOpen(false);
            setSelectedChallenge(null);
          }}
        />
      )}
    </div>
  );
}

