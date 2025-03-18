import Navbar from "./components/navbar/Navbar";
import LandingPage from "./landing/LandingPage";
import FranchiseMetricsSection from "@/app/components/layout/franchise-metrics-section";

export default function Home() {
	return (
		<div className="flex flex-col relative min-h-screen">
			<Navbar />
			<LandingPage />
			<FranchiseMetricsSection />
		</div>
	);
}
