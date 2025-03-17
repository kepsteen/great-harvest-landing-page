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
		metric: "$900,000",
		imgUrl: "/catering-tray-1.jpg",
	},
	{
		title: "Initial Investment",
		description:
			"Your investment will quickly multiply and pay dividends.",
		metric: "$250,000",
		imgUrl: "/honey-whole-wheat-5-simple.jpg",
	},
	{
		title: "Projected Growth",
		description:
			"Great Harvest is such a good company with delicious, fresh bread that satiates and satisfies customers. Join today to own your own bakery and bring fresh bread to locals around you",
		metric: "45%",
		imgUrl: "/fresh-baked-20x30.jpg",
	},
];

export default function FranchiseMetricsSection() {
	return (
		<section className="bread-pattern-bg">
			<h2 className="text-center">
				Why Great Harvest?
			</h2>
			<p className="text-center mb-[3.125rem]">
				Great Harvest is Montana’s
				baked-fresh-daily franchise concept
				featuring only Montana, USA wheat! Taste a
				little Montana in every single bite!
			</p>
			<div>
				<ul className="flex flex-col items-center gap-[3.75rem]">
					{metricCardData.map((metricCard) => (
						<li
							key={metricCard.title}
							className="w-full flex flex-col items-center"
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
									{[...Array(9)].map(
										(_, index) => (
											<div
												key={index}
												className={`scalloped-border absolute -left-1 -right-1 z-0 ${
													index % 3 === 0
														? "h-4"
														: index % 3 === 1
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
							<p className="text-primary-content text-[3rem]">
								{metricCard.metric}
							</p>
							<p className="pl-[60px] pr-[46px]">
								{metricCard.description}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
