import { Outlet } from "react-router";
import RootNavbar from "components/Navbar";
import { Footer } from "components/Footer";

export default function LandingLayout() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <RootNavbar />
      <div className="flex justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
