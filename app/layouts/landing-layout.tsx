import { Outlet } from "react-router";
import RootNavbar from "components/Navbar";
import { Footer } from "components/Footer";
import { useNavigation } from "react-router";
import { GlobalSpinner } from "~/components/GlobalSpinner";

export default function LandingLayout() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <RootNavbar />
      <div className="flex justify-center items-center">
        {isNavigating && <GlobalSpinner />}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
