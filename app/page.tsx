import LandingPage from "./landing/LandingPage";
import TheProcessSection from "./components/layout/process-section";
import FAQSection from "./components/layout/faq-section/faq-section";
import ContactSection2 from "./components/layout/contact-section-2/contact-section-2";
import AvailabilityMapSection from "./components/layout/great-harvest-map-section/AvailabilityMapSection";
import TestimonialSection from "./components/layout/testimonial-section/TestimonialSection";
import FranchiseMetricsSection from "./components/layout/franchise-metrics-section";

export default function Home() {
	return (
		<div className="flex flex-col relative min-h-screen">
			<LandingPage />
			<FranchiseMetricsSection />
			<TestimonialSection />
			<TheProcessSection />
			<FAQSection />
			<AvailabilityMapSection />
			<ContactSection2 />
		</div>
	);
}
