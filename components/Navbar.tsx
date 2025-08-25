import { Link, NavLink } from "react-router";
import { navItems } from "constants/index";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { User, LogOut, Settings } from "lucide-react";

const RootNavbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<"developer" | "company">(
    "developer"
  );

  // Check authentication state on component mount and when URL changes
  useEffect(() => {
    const checkAuthState = () => {
      // Check if user is on dashboard page (indicates they're authenticated)
      const isOnDashboard = window.location.pathname === "/dashboard";
      if (isOnDashboard) {
        setIsAuthenticated(true);

        // Get user type from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const typeFromUrl = urlParams.get("type") as "developer" | "company";
        if (
          typeFromUrl &&
          (typeFromUrl === "developer" || typeFromUrl === "company")
        ) {
          setUserType(typeFromUrl);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuthState();

    // Listen for URL changes
    const handleUrlChange = () => checkAuthState();
    window.addEventListener("popstate", handleUrlChange);

    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Redirect to home page
    window.location.href = "/";
  };

  return (
    <header className="border-b border-grey-500 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-foreground">
                BitBounty
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              // Hide dashboard tab if user is not authenticated
              if (item.requiresAuth && !isAuthenticated) {
                return null;
              }

              const IconComponent = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center space-x-2 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-primary bg-secondary px-4 py-2 rounded-lg"
                        : "text-muted-foreground hover:text-foreground"
                    )
                  }
                >
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              // User Avatar Dropdown
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full hover:bg-secondary"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <span className="text-sm font-semibold">
                        {userType === "developer" ? "JD" : "AC"}
                      </span>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-3 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <span className="text-sm font-semibold">
                        {userType === "developer" ? "JD" : "AC"}
                      </span>
                    </div>
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-semibold text-foreground">
                        {userType === "developer" ? "John Doe" : "Acme Corp"}
                      </p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {userType === "developer"
                          ? "@johncoder"
                          : "admin@acmecorp.com"}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-3 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-3 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer"
                  >
                    <LogOut className="mr-3 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // Sign In Button
              <Link to="/signin">
                <Button className="button-primary">Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default RootNavbar;
