import { metricCardData } from "./metric-data";
import MetricCard from "./metric-card";

// Reusable Card Component (can be extracted to its own file if preferred)

export default function FranchiseMetricsSection() {
	return (
		<>
			<section
				className="franchise-metrics-section bg-[url('/images/flour-dusted-vertical.png')] bg-cover bg-center pt-[50px] bg-blend-overlay bg-[#ddc6bb66] px-6 pb-12"
				id="whyGreatHarvest"
			>
				<div className="bg-white/30 p-6 rounded-xl shadow-md max-w-2xl mx-auto mb-8">
					<h2 className="text-5xl font-bold text-center font-ghSimple mb-4">
						Why Great Harvest?
					</h2>
					<p className="text-center mb-4 text-xl font-ghPlain text-[#1A1007]">
						We are the only baked-fresh-daily
						franchise concept featuring only
						Montana, USA wheat!
					</p>
					<p className="text-center mb-4 text-2xl font-ghPlain text-[#1A1007]">
						Taste the GREAT HARVEST difference!
					</p>
				</div>

				<section className="flex flex-col gap-4 p-4 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
					{metricCardData.map((card, index) => (
						<MetricCard
							key={card.id}
							card={card}
							className={`${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
						/>
					))}
				</section>
			</section>
		</>
	);
}
