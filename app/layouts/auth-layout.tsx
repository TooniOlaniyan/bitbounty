import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex justify-between">
        <div className="hidden lg:flex lg:w-1/2 gradient-bg flex-col justify-center items-center p-12">
          <div className="max-w-md">
            <div className="flex items-center  space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div className="text-left">
                <span className="text-3xl font-bold text-foreground">
                  Bitbounty
                </span>
              </div>
            </div>

            <h1 className="text-6xl font-extrabold text-primary mb-6">
              Hi there
            </h1>
            <div className="space-y-2 text-muted-foreground text-lg">
              <p>It is good to have you back,</p>
              <p>Thanks for telling your friends and partners about us,</p>
              <p>
                Oh! <span className="text-primary font-bold">wait</span>, you
                haven't?
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
