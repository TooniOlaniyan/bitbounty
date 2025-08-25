import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Github } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Welcome Panel */}
      <div className="hidden lg:flex lg:w-1/2 gradient-bg flex-col justify-center items-center p-12">
        <div className="max-w-md text-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div className="text-left">
              <span className="text-3xl font-bold text-foreground">
                bitbounty
              </span>
              <span className="block text-sm text-muted-foreground font-medium">
                BUSINESS
              </span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            Let's get you started
          </h1>
          <div className="space-y-2 text-muted-foreground text-lg">
            <p>Getting started should be easy.</p>
            <p>This is why we want to make this your last time.</p>
            <p>
              Our process is straightforward and once verified, you can enjoy
              all the good features we have
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-right mb-8">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-primary font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

          {/* Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Create your account
              </h2>
            </div>

            {/* OAuth Options */}
            <div className="space-y-4">
              <Button className="w-full bg-foreground text-background hover:bg-foreground/90 h-14 text-base font-semibold rounded-xl transition-all duration-200">
                <Github className="w-6 h-6 mr-3" />
                Continue with GitHub
              </Button>

              <Button
                variant="outline"
                className="w-full h-14 text-base font-semibold rounded-xl border-2 border-grey-500 hover:border-primary hover:bg-secondary transition-all duration-200"
              >
                <span className="w-6 h-6 mr-3 text-blue-600 font-bold text-lg">
                  G
                </span>
                Continue with Google
              </Button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-grey-500" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Email Form */}
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input-field w-full"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Phone
                </label>
                <div className="flex space-x-2">
                  <select className="input-field w-24">
                    <option value="+234">+234</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="input-field flex-1"
                    placeholder="Phone"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="input-field w-full"
                  placeholder="Create a password"
                />
                {/* Password Requirements */}
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-success">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>Be a minimum of 8 characters</span>
                  </div>
                  <div className="flex items-center space-x-2 text-success">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>Include at least one uppercase letter (A-Z)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-success">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>Include at least one lowercase letter (a-z)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-success">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>Include at least one number (0-9)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-success">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>
                      Include at least one special character (!@#$%^&*)
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="input-field w-full"
                  placeholder="Confirm your password"
                />
              </div>

              <div>
                <label
                  htmlFor="inviteCode"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Invite Code
                </label>
                <input
                  id="inviteCode"
                  name="inviteCode"
                  type="text"
                  className="input-field w-full"
                  placeholder="Enter invite code"
                />
                <p className="mt-2 text-sm text-muted-foreground">
                  Contact support at{" "}
                  <a
                    href="mailto:hello@bitbounty.com"
                    className="text-primary hover:underline"
                  >
                    hello@bitbounty.com
                  </a>{" "}
                  for invite code
                </p>
              </div>
            </div>

            {/* Create Account Button */}
            <Button className="w-full button-primary h-14 text-base font-semibold rounded-xl">
              Create Account
            </Button>

            {/* Legal Disclaimer */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                By clicking "Create Account" you agree to our{" "}
                <a
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  Terms Of Use
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
