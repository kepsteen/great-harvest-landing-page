import Image from "next/image";
import { metricCardData } from "./metric-data";
import MetricCard from "./metric-card";

// Reusable Card Component (can be extracted to its own file if preferred)

export default function FranchiseMetricsSection() {
	return (
		<>
			<div className="franchise-metrics-section bg-[url('/images/flour-dusted-vertical.png')] bg-cover bg-center pt-[50px] bg-blend-overlay bg-[#ddc6bb66] px-6">
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

				<section className="flex flex-col gap-4 p-4 ">
					{metricCardData.map((card) => (
						<MetricCard
							key={card.id}
							card={card}
						/>
					))}
				</section>
			</div>
		</>
	);
}
