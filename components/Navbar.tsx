import { Link, NavLink } from "react-router";
import { navItems } from "constants/index";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const RootNavbar = () => {
  return (
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold">BitBounty</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center space-x-2 text-xs",
                        isActive && "text-white bg-black px-5 py-2 rounded-lg transition-all duration-300 ease-in"
                      )
                    }
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </nav>

            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Button onClick={() => {}} variant="outline" size="sm">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
      </div>
    </header>
  );
};
export default RootNavbar;
