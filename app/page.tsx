import Navbar from "./components/navbar/Navbar";
import LandingPage from "./landing/LandingPage";
import FranchiseMetricsSection from "@/app/components/layout/franchise-metrics-section";
import TestimonialsSection from "@/app/components/layout/testimonials-section";
import MarketingDetailsSection from "./components/layout/marketing-details-section/MarketingDetailsSection";

export default function Home() {
	return (
		<div className="flex flex-col relative min-h-screen">
			<Navbar />
			<LandingPage />
			<FranchiseMetricsSection />
			<MarketingDetailsSection />
			<TestimonialsSection />
		</div>
	);
}
