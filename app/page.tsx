import LandingPage from "./landing/LandingPage";
import FranchiseMetricsSection from "@/app/components/layout/franchise-metrics-section/franchise-metrics-section";
import FAQSection from "./components/layout/faq-section/faq-section";
import ContactSection2 from "./components/layout/contact-section-2/contact-section-2";
import AvailabilityMapSection from "./components/layout/great-harvest-map-section/AvailabilityMapSection";
import TestimonialSection from "./components/layout/testimonial-section/TestimonialSection";
import TheProcessSection from "./components/layout/process-section";
import OurHistory from "./components/layout/our-history/our-history-section";

export default function Home() {
	return (
		<div className="flex flex-col relative min-h-screen">
			<LandingPage />
			<OurHistory />
			<FranchiseMetricsSection />
			<TestimonialSection />
			<TheProcessSection />
			<FAQSection />
			<AvailabilityMapSection />
			<ContactSection2 />
		</div>
	);
}
