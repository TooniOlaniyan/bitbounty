import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { ArrowLeft, Github } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

export default function SigninPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"developer" | "company">(
    "developer"
  );

  const handleClick = () => {
    // Navigate to dashboard with user type as query parameter
    navigate(`/dashboard?type=${userType}`);
  };

  return (
    <div className="min-h-screen flex-center">
      <div className="w-full max-w-md">
        <Link to="/" className="back-button">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              Sign In or create and Account
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-10">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="developer"
                  checked={userType === "developer"}
                  onCheckedChange={() => setUserType("developer")}
                  className="border-2 border-grey-500 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label
                  htmlFor="developer"
                  className="text-sm text-foreground font-bold cursor-pointer"
                >
                  {" "}
                  Developer
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="company"
                  checked={userType === "company"}
                  onCheckedChange={() => setUserType("company")}
                  className="border-2 border-grey-500 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label
                  htmlFor="company"
                  className="text-sm text-foreground font-bold cursor-pointer"
                >
                  Company
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              className="cursor-pointer w-full bg-foreground text-background hover:bg-foreground/90 h-10 text-base font-semibold rounded-xl transition-all duration-200"
              onClick={handleClick}
            >
              <Github className="w-6 h-6 mr-3" />
              Continue with GitHub
            </Button>

            <Button
              variant="outline"
              className="cursor-pointer w-full h-10 text-base font-semibold rounded-xl border-2 border-grey-500 hover:border-primary hover:bg-secondary hover:text-black transition-all duration-200"
            >
              <span className="w-6 h-6 mr-3 text-blue-600 font-bold text-lg">
                G
              </span>
              Continue with Google
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground font-bold">
              If you don't have an account, one will be created for you.
            </p>
            <p className="text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <a href="#" className="text-primary font-medium hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary font-medium hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
