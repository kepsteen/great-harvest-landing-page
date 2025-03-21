import Navbar from "./components/navbar/Navbar";
import LandingPage from "./landing/LandingPage";
import FranchiseMetricsSection from "@/app/components/layout/franchise-metrics-section";
import TestimonialsSection from "@/app/components/layout/testimonials-section";
import MarketingDetailsSection from "./components/layout/marketing-details-section/MarketingDetailsSection";
import Footer from "./components/footer/Footer";
import FranchiseStepsSection from "./components/layout/franchise-steps-section";
import FAQSection from "./components/layout/faq-section";
import ContactSection2 from "./components/layout/contact-section-2/contact-section-2";

export default function Home() {
	return (
		<div className="flex flex-col relative min-h-screen">
			<Navbar />
			<LandingPage />
			<FranchiseMetricsSection />
			<MarketingDetailsSection />
			<TestimonialsSection />
			<FranchiseStepsSection />
			<FAQSection />
			<ContactSection2 />
			<Footer />
		</div>
	);
}
