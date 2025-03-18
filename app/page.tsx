import Navbar from "./components/navbar/Navbar";
import LandingPage from "./landing/LandingPage";

export default function Home() {
  return (
    <div className="flex flex-col relative min-h-screen">
    <Navbar />
    <LandingPage />
    </div>
  );
}
