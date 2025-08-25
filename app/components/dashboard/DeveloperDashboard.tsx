import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";
import {
  Trophy,
  TrendingUp,
  Target,
  Award,
  Clock,
  CheckCircle,
  XCircle,
  Edit,
} from "lucide-react";

export function DeveloperDashboard() {
  return (
    <Tabs defaultValue="overview" className="space-y-8">
      <TabsList className="grid w-full grid-cols-4 bg-muted p-1 rounded-xl">
        <TabsTrigger
          value="overview"
          className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="submissions"
          className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
        >
          My Submissions
        </TabsTrigger>
        <TabsTrigger
          value="challenges"
          className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
        >
          Available Challenges
        </TabsTrigger>
      </TabsList>

      {/* Overview Tab */}
      <TabsContent value="overview" className="space-y-8">
        {/* User Profile Section */}
        <div className="bg-card rounded-2xl p-8 card-shadow border border-grey-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">JD</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">John Doe</h2>
                <p className="text-lg text-muted-foreground">@johncoder</p>
                <p className="text-sm text-muted-foreground/80">
                  San Francisco, CA • Joined Jan 15, 2024
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MetricCard
            icon={Trophy}
            title="Total Earnings"
            value="B0.045"
            description="Bitcoin earned"
            trend="+12.5%"
            trendUp={true}
          />
          <MetricCard
            icon={Award}
            title="Completed"
            value="12"
            description="Challenges done"
            trend="+8.3%"
            trendUp={true}
          />
          <MetricCard
            icon={TrendingUp}
            title="Pending"
            value="#42"
            description="Challenges Pending"
            trend="+2.1%"
            trendUp={false}
          />
        </div>

        {/* Recent Activity */}
        <div className="bg-card rounded-2xl p-8 card-shadow border border-grey-500">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Recent Activity
          </h3>
          <div className="space-y-4">
            <ActivityItem
              icon={CheckCircle}
              title="Frontend Challenge - E-commerce App"
              company="TechCorp"
              date="2 hours ago"
              earnings="B0.002"
              status="completed"
            />
            <ActivityItem
              icon={Clock}
              title="Backend API Development"
              company="StartupXYZ"
              date="1 day ago"
              earnings="B0.005"
              status="pending"
            />
            <ActivityItem
              icon={XCircle}
              title="Mobile App UI/UX"
              company="DesignStudio"
              date="3 days ago"
              earnings="B0.000"
              status="failed"
            />
          </div>
        </div>
      </TabsContent>

      {/* Submissions Tab */}
      <TabsContent value="submissions" className="space-y-8">
        <div className="bg-card rounded-2xl p-8 card-shadow border border-grey-500">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            My Submissions
          </h3>
          <p className="text-lg text-muted-foreground">
            Track all your challenge submissions and their status
          </p>
        </div>
      </TabsContent>

      {/* Challenges Tab */}
      <TabsContent value="challenges" className="space-y-8">
        <div className="bg-card rounded-2xl p-8 card-shadow border border-grey-500">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Available Challenges
          </h3>
          <p className="text-lg text-muted-foreground">
            Browse and apply for new challenges
          </p>
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
    <div className="bg-card rounded-2xl p-8 card-shadow border border-grey-500 hover:shadow-lg transition-all duration-300">
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
        <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

// Activity Item Component
function ActivityItem({
  icon: Icon,
  title,
  company,
  date,
  earnings,
  status,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  company: string;
  date: string;
  earnings: string;
  status: "pending" | "completed" | "failed";
}) {
  const statusConfig = {
    pending: {
      color: "text-warning",
      bg: "bg-warning/10",
      border: "border-warning/20",
    },
    completed: {
      color: "text-success",
      bg: "bg-success/10",
      border: "border-success/20",
    },
    failed: {
      color: "text-error",
      bg: "bg-error/10",
      border: "border-error/20",
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className={`flex items-center space-x-4 p-4 rounded-xl ${config.bg} ${config.border} border`}
    >
      <div
        className={`w-10 h-10 ${config.bg} rounded-lg flex items-center justify-center`}
      >
        <Icon className={`w-5 h-5 ${config.color}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-base font-semibold text-foreground truncate">
          {title}
        </p>
        <p className="text-sm text-muted-foreground">
          {company} • {date}
        </p>
      </div>
      <span className="text-lg font-bold text-foreground">{earnings}</span>
    </div>
  );
}
