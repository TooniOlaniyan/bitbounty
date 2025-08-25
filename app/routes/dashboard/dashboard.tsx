import { useSearchParams } from "react-router";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { DeveloperDashboard, CompanyDashboard } from "~/components/dashboard";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [searchParams] = useSearchParams();
  const [userType, setUserType] = useState<"developer" | "company">(
    "developer"
  );

  // Read user type from URL query parameters on component mount
  useEffect(() => {
    const typeFromUrl = searchParams.get("type") as "developer" | "company";
    if (
      typeFromUrl &&
      (typeFromUrl === "developer" || typeFromUrl === "company")
    ) {
      setUserType(typeFromUrl);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="border-b border-grey-500 pb-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
              <div>
                <h1 className="text-4xl font-bold text-foreground">
                  {userType === "developer"
                    ? "Developer Dashboard"
                    : "Company Dashboard"}
                </h1>
                <p className="mt-3 text-lg text-muted-foreground">
                  {userType === "developer"
                    ? "Track your progress, earnings, and achievements"
                    : "Manage your challenges and review submissions"}
                </p>
              </div>

              {/* User Type Selector */}
              <div className="flex items-center space-x-4">
                <label className="text-sm font-semibold text-foreground">
                  Switch to:
                </label>
                <select
                  value={userType}
                  onChange={(e) =>
                    setUserType(e.target.value as "developer" | "company")
                  }
                  className="input-field px-4 py-2 text-sm min-w-[180px]"
                >
                  <option value="developer">👨‍💻 Developer</option>
                  <option value="company">🏢 Company</option>
                </select>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          {userType === "developer" ? (
            <DeveloperDashboard />
          ) : (
            <CompanyDashboard />
          )}
        </div>
      </div>
    </div>
  );
}
