import { Link, NavLink, useNavigate } from "react-router";
import { navItems } from "constants/index";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { auth } from "~/firebase/client";
import { logout } from "~/firebase/auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

const RootNavbar = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      window.alert(error);
    }
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
            {user && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-2 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-primary bg-secondary px-4 py-2 rounded-lg"
                      : "text-muted-foreground hover:text-foreground"
                  )
                }
              >
                Dashboard
              </NavLink>
            )}
          </nav>
          <div className="flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="relative h-10 w-10 bg-dark-primary rounded-full cursor-pointer">
                    <img
                      src={user?.photoURL ?? ""}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center gap-3 p-3">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-semibold text-foreground">
                        {user.displayName || "Anonymous"}
                      </p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
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
