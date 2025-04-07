import Image from "next/image";
interface MetricCard {
	title: string;
	description: string;
	metric: string;
	imgUrl: string;
}

const metricCardData: MetricCard[] = [
	{
		title: "Average Unit Volume",
		description:
			"Great Harvest Hub stores are now smaller and more efficient, and thus more affordable. Same AUV. Same amazing product. Same quality experience and customer service.",
		metric: "$649,500",
		imgUrl: "/images/catering-tray-1.jpg",
	},
	{
		title: "Initial Investment",
		description:
			"Affordable cost of entry in the QSR space means quicker return on investment.",
		metric: "$250,000",
		imgUrl:
			"/images/honey-whole-wheat-5-simple.jpg",
	},
];

export default function FranchiseMetricsSection() {
	return (
		<>
			<div className="relative lg:hidden overflow-visible">
				<div className="relative w-[120vw] left-1/2 -translate-x-1/2">
					<Image
						className="w-full transform"
						src="/new-arrows.svg"
						width={1000}
						height={1000}
						alt="franchise metrics section divider"
					/>
				</div>
			</div>
			<div className="relative w-full">
				<section className="px-[13px] py-[60px] max-w-[1040px] mx-auto">
					<h2 className="text-center text-[3rem]">
						Why Great Harvest?
					</h2>
					<p className="text-center mb-[3.125rem] text-[1.75rem]">
						Great Harvest is Montana&apos;s
						baked-fresh-daily franchise concept
						featuring only Montana, USA wheat!
						Taste a little Montana in every single
						bite!
					</p>
					<div>
						<ul className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:justify-center md:items-start items-center gap-[3.75rem] lg:gap-8">
							{metricCardData.map(
								(metricCard) => (
									<li
										key={metricCard.title}
										className="w-full md:w-[calc(45%-1.875rem)] [800px]:w-[calc(33.333%-1rem)] flex flex-col items-center"
									>
										<div className="relative w-full flex flex-col items-center pb-4">
											<div className="w-[216px] h-[216px] rounded-full relative drop-shadow-xl/50">
												<Image
													src={metricCard.imgUrl}
													alt={metricCard.title}
													width={400}
													height={600}
													className="object-cover w-full h-full z-1 rounded-full absolute"
												/>
											</div>
											<div className="bg-darkGreen p-[10px] absolute bottom-0 z-2 drop-shadow-md/30">
												<h3 className="text-secondary-content text-center text-[20px] font-bold">
													{metricCard.title}
												</h3>
											</div>
										</div>
										<p className="text-foreground text-[3rem]">
											{metricCard.metric}
										</p>
										<p className="px-2 sm:pl-[60px] sm:pr-[46px] text-[20px] text-black text-center">
											{metricCard.description}
										</p>
									</li>
								)
							)}
						</ul>
					</div>
				</section>
			</div>
		</>
	);
}
