import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import ChallengeCard from "components/ChallengeCard";
import { Trophy, Users, CheckCircle } from "lucide-react";
import NewChallengeDialog from "components/NewChallengeDialog";
import { calculateTimeRemaining } from "~/lib/utils";

function MetricCard({
  icon: Icon,
  title,
  value,
  description,
  trend,
  trendUp,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  description: string;
  trend: string;
  trendUp: boolean;
}) {
  return (
    <div className="bg-card rounded-2xl p-6 card-shadow border border-grey-500 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div
          className={`text-sm font-semibold ${trendUp ? "text-success" : "text-muted-foreground"}`}
        >
          {trend}
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-2">
          {title}
        </p>
        <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function CompanyDashboard({ user, challenges }: any) {
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

      {/* Active Challenges Tab */}
      <TabsContent value="active" className="space-y-8">
        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            icon={Trophy}
            title="Active Challenges"
            value="1"
            description="Currently running"
            trend="+1"
            trendUp={true}
          />
          <MetricCard
            icon={Users}
            title="Total Submissions"
            value="20"
            description="Across all challenges"
            trend="+5"
            trendUp={true}
          />
          <MetricCard
            icon={CheckCircle}
            title="Completed"
            value="1"
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
          <div className="p-8">
            {challenges &&
              challenges.length > 0 &&
              challenges.map((challenge, index) => (
                <ChallengeCard
                  key={index}
                  title={challenge.title}
                  status="active"
                  dueDate={calculateTimeRemaining(challenge.dueDate)}
                  submissions={8}
                  onReview={() => console.log("Review submissions")}
                />
              ))}
          </div>
        </div>
      </TabsContent>

      {/* Completed Tab */}
      <TabsContent value="expired" className="space-y-8">
        <div className="bg-card rounded-2xl card-shadow border ">
          <div className="p-8 border-b">
            <h3 className="text-xl font-bold text-foreground">
              Expired Challenges
            </h3>
          </div>
          <div className="p-8">
            <ChallengeCard
              title="Smart Contract Audit Challenge"
              status="expired"
              dueDate="Winner selected"
              submissions={0}
            />
          </div>
        </div>
      </TabsContent>

      {/* Review Solutions Tab */}
      <TabsContent value="review" className="space-y-8">
        <div className="bg-card rounded-2xl card-shadow border ">
          <div className="p-8 border-b ">
            <h3 className="text-xl font-bold text-foreground">
              Review Solutions
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Select a challenge to review submissions
            </p>
            <div className="space-y-2">
              <Select name="challenge" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select challenge" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">
                    {" "}
                    Build a DeFi Portfolio Tracker
                  </SelectItem>
                  <SelectItem value="intermediate">
                    {" "}
                    Smart Contract Audit Challenge
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

          </div>
          <div className="p-8">
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4"></div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
