import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import MetricCard from "components/MetricCard";
import { ReviewCard } from "components/ReviewCard";
import ChallengeCard from "components/ChallengeCard";
import { Trophy, Users, CheckCircle } from "lucide-react";
import NewChallengeDialog from "components/NewChallengeDialog";
import { calculateTimeRemaining } from "~/lib/utils";
import { formatDistanceToNow } from "date-fns";

export function CompanyDashboard({
  user,
  companyChallenges,
  activeChallengesCount,
  completedCompanyChallenges,
  totalSubmissionscount,
  companyChallengeSubmissions,
}: any) {
  return (
    <Tabs defaultValue="active" className="space-y-8">
      <TabsList className="grid w-full grid-cols-3 border-[1.5px] border-border bg-muted  rounded-xl p-0">
        <TabsTrigger
          value="active"
          className="data-[state=active]:bg-primary data-[state=active]:text-muted data-[state=active]:shadow-sm"
        >
          Active Challenges
        </TabsTrigger>
        <TabsTrigger
          value="expired"
          className="data-[state=active]:bg-primary data-[state=active]:text-muted data-[state=active]:shadow-sm"
        >
          Completed
        </TabsTrigger>
        <TabsTrigger
          value="review"
          className="data-[state=active]:bg-primary data-[state=active]:text-muted data-[state=active]:shadow-sm"
        >
          Review Solutions
        </TabsTrigger>
      </TabsList>

      <TabsContent value="active" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            icon={Trophy}
            title="Active Challenges"
            value={activeChallengesCount}
            description="Currently running"
            trend="+1"
            trendUp={true}
          />
          <MetricCard
            icon={Users}
            title="Total Submissions"
            value={totalSubmissionscount}
            description="Across all challenges"
            trend="+5"
            trendUp={true}
          />
          <MetricCard
            icon={CheckCircle}
            title="Completed"
            value={completedCompanyChallenges?.length}
            description="Finished challenges"
            trend="+1"
            trendUp={true}
          />
        </div>

        {/* Active Challenges List */}
        <div className="bg-card rounded-2xl card-shadow border border-grey-500">
          <div className="p-8 border-b ">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-foreground">
                Active Challenges
              </h3>
              <NewChallengeDialog companyId={user.uid} />
            </div>
          </div>
          <div className="p-8 flex flex-col gap-10">
            {companyChallenges &&
              companyChallenges.length > 0 &&
              companyChallenges.map((challenge, index) => (
                <ChallengeCard
                  key={index}
                  title={challenge.title}
                  status="active"
                  dueDate={calculateTimeRemaining(challenge.dueDate)}
                  submissions={challenge?.details?.submissions}
                />
              ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="expired" className="space-y-8">
        <div className="bg-card rounded-2xl card-shadow border ">
          <div className="p-8 border-b">
            <h3 className="text-xl font-bold text-foreground">
              Expired and Completed Challenges
            </h3>
          </div>
          <div className="p-8">
            {completedCompanyChallenges &&
              completedCompanyChallenges.length > 0 &&
              completedCompanyChallenges.map((challenge, index) => (
                <ChallengeCard
                  key={index}
                  title={challenge.title}
                  status="expired"
                  dueDate={calculateTimeRemaining(challenge.dueDate)}
                  submissions={challenge?.details?.submissions}
                />
              ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="review" className="space-y-8">
        <div className="bg-card rounded-2xl card-shadow border ">
          <div className="p-8 border-b ">
            <h3 className="text-xl font-bold text-foreground">
              Review Solutions
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Select a challenge to review submissions
            </p>
            <div className="p-8">
              {companyChallengeSubmissions &&
                companyChallengeSubmissions.length > 0 &&
                companyChallengeSubmissions.map((submission, index) => (
                  <ReviewCard
                    key={index}
                    submissionId={submission.id}
                    username={submission.username}
                    status={submission.status}
                    submissionLink={submission.submissionLink}
                    liveLink={submission.liveLink}
                    shaHash={submission.shaHash}
                    submissionTime={formatDistanceToNow(
                      submission.submissionTime.toDate(),
                      { addSuffix: true }
                    )}
                  />
                ))}
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
