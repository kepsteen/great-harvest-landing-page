import Image from "next/image";
import "./marketing-details-section.css";
import { MarketingCardData } from "./data/marketingCardData";

export default function MarketingDetailsSection() {
	return (
		<>
			<section
				id="corporateSupport"
				className="bg-brandBlue text-white"
			>
				<div className="flex flex-col bread-pattern-blue-bg marketing-section w-full">
					<div className="flex justify-center w-full py-8">
						<picture className="h-[149px]">
							<source
								media="(min-width: 768px)"
								srcSet="/images/tablet-watering-cans.png"
							/>
							<Image
								src="/images/mobile-watering-cans.png"
								alt="two watering cans"
								width={312}
								height={149}
								className="h-full object-contain"
							/>
						</picture>
					</div>
					<div className="px-5">
						<h1 className="text-[48px] text-center">
							Let&apos;s Make BREAD together!
						</h1>
					</div>
					<div className="px-5 pt-6.5 text-[28px] flex justify-center text-center">
						<p>
							Our team is dedicated to getting you
							open quickly and efficiently
						</p>
					</div>
					<div className="pb-10">
						<ul className="grid md:grid-rows-1 md:grid-cols-3  lg:mx-auto lg:max-w-[1040px] px-5 lg:px-0">
							{MarketingCardData.map(
								(marketingCard, index) => (
									<li
										key={index}
										className="flex flex-col pt-12 px-2.5 lg:pt-17.5"
									>
										<div className="flex justify-center">
											<Image
												src={marketingCard.icon}
												alt={marketingCard.alt}
												width={61}
												height={61}
											/>
										</div>
										<h1 className="text-[20px] px-10 md:px-5 lg:px-10 py-4 text-center md:basis-[150px] lg:basis-[100px]">
											{marketingCard.title}
										</h1>
										<div className="pl-2.5">
											<p className="text-[18px] grow">
												{marketingCard.passage}
											</p>
										</div>
									</li>
								)
							)}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
