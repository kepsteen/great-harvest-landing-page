import Image from "next/image";
import Divider from "../ui/divider";

const steps = [
	"Submit your interest below",
	"Introductory call",
	"Continue your due diligence",
	"Experience Great Harvest Day - Meet the Team",
	"Sign a Franchise Agreement and get ready for training",
];

export default function FranchiseStepsSection() {
	return (
		<>
			<section className="lg:flex lg:flex-wrap lg:gap-4 bg-cream lg:bg-darkGreen px-[40px] lg:px-[80px] lg:items-center py-[30px]">
				<div className="relative w-full h-[400px] max-w-[400px] mx-auto overflow-hidden py-10 lg:order-2 lg:basis-[calc(40%-80px)]">
					<div className="absolute top-14 right-10 bottom-0 left-0 bg-darkGreen z-30 flex flex-col justify-center items-center lg:bg-cream px-4">
						<h2 className="text-[3rem] text-white text-center lg:text-primary">
							Winning with Great Harvest
						</h2>
						<p className="text-[1.75rem] text-cream text-center lg:text-primary">
							Let us guide you through the next
							steps!
						</p>
					</div>
					<div className="absolute top-10 right-6 bottom-0 left-6 bg-white z-[2] lg:bg-brandBlue"></div>
					<div className="absolute top-4 right-0 bottom-8 left-10 bg-[#7BACEA] z-[1] rotate-3"></div>
					<div className="absolute top-20 right-0 bottom-6 left-0 bg-[#7BACEA] z-[1]"></div>
				</div>

				<ol className="max-w-3xl mx-auto px-0 lg:px-4 py-12 lg:order-1 lg:basis-[calc(60%-80px)] lg:text-white leading-snug">
					{steps.map((step, index) => (
						<li
							className="flex items-center mb-[30px]"
							key={index}
						>
							<div className="bg-darkGreen w-[80px] h-[80px] flex items-center justify-center flex-shrink-0">
								<span className="text-white text-[3rem] lg:bg-cream lg:text-darkGreen w-full h-full flex items-center justify-center">
									{index + 1}
								</span>
							</div>
							<p className="ml-8 flex items-center text-[28px] text-navy font-medium">
								{step}
							</p>
						</li>
					))}
				</ol>
				<div className="p-[30px] lg:p-0 max-w-[640px] mx-auto lg:order-3">
					<Image
						src="/images/gh-anchorage.jpeg"
						alt="Great Harvest Anchorage"
						width={400}
						height={400}
						className=" aspect-square lg:aspect-auto mx-auto max-h-[300px] max-w-[300px] sm:max-h-[400px] sm:max-w-[400px] lg:h-[400px] lg:w-[600px] object-cover rounded-xl mb-[10px] border-6 border-cream object-[center_20%]"
					/>
					<p className="text-primary text-center text-base lg:text-white">
						(Jarrett&apos;s - Anchorage, AK)
					</p>
				</div>
			</section>
			<Divider
				color="bg-brandBlue"
				bgColor="bg-cream"
				className="py-[12px]"
			/>
		</>
	);
}
