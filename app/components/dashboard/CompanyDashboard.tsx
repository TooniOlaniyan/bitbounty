import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";
import {
  Trophy,
  Users,
  Bitcoin,
  CheckCircle,
  Calendar,
  Plus,
  Eye,
} from "lucide-react";

export function CompanyDashboard() {
  return (
    <Tabs defaultValue="active" className="space-y-8">
      <TabsList className="grid w-full grid-cols-3 bg-muted p-1 rounded-xl">
        <TabsTrigger
          value="active"
          className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
        >
          Active Challenges
        </TabsTrigger>
        <TabsTrigger
          value="completed"
          className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
        >
          Completed
        </TabsTrigger>
        <TabsTrigger
          value="review"
          className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
        >
          Review Solutions
        </TabsTrigger>
      </TabsList>

      {/* Active Challenges Tab */}
      <TabsContent value="active" className="space-y-8">
        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
            icon={Bitcoin}
            title="Total Bounties"
            value="B0.13"
            description="Bitcoin allocated"
            trend="+0.02"
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
              <h3 className="text-2xl font-bold text-foreground">
                Active Challenges
              </h3>
              <Button className="button-primary">
                <Plus className="w-5 h-5 mr-2" />
                New Challenge
              </Button>
            </div>
          </div>
          <div className="p-8">
            <ChallengeCard
              title="Build a DeFi Portfolio Tracker"
              status="active"
              bounty="0.05 BTC"
              dueDate="Due 15/09/2025"
              submissions={8}
              onReview={() => console.log("Review submissions")}
            />
          </div>
        </div>
      </TabsContent>

      {/* Completed Tab */}
      <TabsContent value="completed" className="space-y-8">
        <div className="bg-card rounded-2xl card-shadow border ">
          <div className="p-8 border-b">
            <h3 className="text-2xl font-bold text-foreground">
              Completed Challenges
            </h3>
          </div>
          <div className="p-8">
            <ChallengeCard
              title="Smart Contract Audit Challenge"
              status="completed"
              bounty="0.08 BTC"
              dueDate="Winner selected"
              submissions={12}
              onReview={() => console.log("View results")}
            />
          </div>
        </div>
      </TabsContent>

      {/* Review Solutions Tab */}
      <TabsContent value="review" className="space-y-8">
        <div className="bg-card rounded-2xl card-shadow border ">
          <div className="p-8 border-b ">
            <h3 className="text-2xl font-bold text-foreground">
              Review Solutions
            </h3>
            <p className="text-lg text-muted-foreground mt-2">
              Select a challenge to review submissions
            </p>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
                <select className="input-field flex-1">
                  <option value="">Select a challenge</option>
                  <option value="defi-tracker">
                    Build a DeFi Portfolio Tracker
                  </option>
                  <option value="smart-contract">
                    Smart Contract Audit Challenge
                  </option>
                </select>
                <Button variant="outline" disabled className="lg:w-auto">
                  <Eye className="w-5 h-5 mr-2" />
                  Review Submissions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}

// Metric Card Component
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

// Challenge Card Component
function ChallengeCard({
  title,
  status,
  bounty,
  dueDate,
  submissions,
  onReview,
}: {
  title: string;
  status: "active" | "completed";
  bounty: string;
  dueDate: string;
  submissions: number;
  onReview: () => void;
}) {
  const statusConfig = {
    active: {
      label: "Active",
      className: "bg-primary/10 text-primary border-primary/20",
    },
    completed: {
      label: "Completed",
      className: "bg-success/10 text-success border-success/20",
    },
  };

  const config = statusConfig[status];

  return (
    <div className="border border-grey-500 rounded-xl p-6 hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-4">
            <h4 className="text-xl font-semibold text-foreground">{title}</h4>
            <span
              className={`px-3 py-1 text-sm font-medium rounded-full border ${config.className}`}
            >
              {config.label}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Bitcoin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Bounty</p>
                <p className="font-semibold text-foreground">{bounty}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Due Date</p>
                <p className="font-semibold text-foreground">{dueDate}</p>
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
            onClick={onReview}
            className={
              status === "active"
                ? "button-primary"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }
          >
            {status === "active" ? "Review Submissions" : "View Results"}
          </Button>
        </div>
      </div>
    </div>
  );
}
