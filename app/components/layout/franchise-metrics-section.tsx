import Image from "next/image";
import Divider from "../ui/divider";
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
		metric: "$900,000",
		imgUrl: "/images/catering-tray-1.jpg",
	},
	{
		title: "Projected Growth",
		description:
			"Great Harvest is such a good company with delicious, fresh bread that satiates and satisfies customers. Join today to own your own bakery and bring fresh bread to locals around you.",
		metric: "45%",
		imgUrl: "/images/fresh-baked-20x30.jpg",
	},
	{
		title: "Initial Investment",
		description:
			"Your investment will quickly multiply and pay dividends.",
		metric: "$250,000",
		imgUrl:
			"/images/honey-whole-wheat-5-simple.jpg",
	},
];

export default function FranchiseMetricsSection() {
	return (
		<>
			{/* <Image
				src={"/arrows-bottom.svg"}
				alt="arrows-bottom"
				width={1000}
				height={100}
				className="w-full h-[100px] object-cover"
			/> */}
			<div id="whyGreatHarvest" className="relative lg:hidden">
				<Image
					className="w-full h-[150px] transform rotate-180 -mt-[1px] -mr-[200px]"
					src="/landing-chevron.svg"
					width={1000}
					height={1000}
					alt="franchise metrics section divider"
				/>
				<div className="absolute inset-0 bg-cream -z-10"></div>
			</div>
			<div className="relative w-full">
				<div className="absolute bread-pattern-bg inset-0 -z-10"></div>
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
										className="w-full md:w-[calc(45%-1.875rem)] lg:w-[calc(33.333%-1rem)] flex flex-col items-center"
									>
										<div className="relative w-full flex flex-col items-center pb-4">
											<div className="w-[216px] h-[216px] rounded-full relative">
												<Image
													src={metricCard.imgUrl}
													alt={metricCard.title}
													width={400}
													height={600}
													className="object-cover w-full h-full z-1 rounded-full absolute shadow-2xl"
												/>

												{/* Scalloped Border effect */}
												{[...Array(9)].map(
													(_, index) => (
														<div
															key={index}
															className={`scalloped-border absolute -left-1 -right-1 z-0 ${
																index % 3 === 0
																	? "h-4"
																	: index % 3 ===
																		  1
																		? "h-5"
																		: "h-9"
															} rounded-md bg-accent top-1/2 -translate-y-1/2 shadow-2xl`}
															style={{
																transform: `rotate(${
																	index * 40
																}deg)`,
															}}
														></div>
													)
												)}
											</div>
											<div className="bg-accent p-[10px] shadow-3xl absolute bottom-0 z-2">
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
				<Divider
					color="bg-brandBlue"
					bgColor="bg-cream"
					className="py-[12px]"
				/>
			</div>
		</>
	);
}
