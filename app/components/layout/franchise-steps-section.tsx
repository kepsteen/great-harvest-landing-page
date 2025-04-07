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
			<section
				id="theProcess"
				className="lg:flex lg:flex-wrap lg:gap-4 bg-cream lg:bg-darkGreen px-[20px] sm:px-[30px] lg:px-[80px] lg:items-center py-[30px]"
			>
				<div className="relative w-full h-[400px] max-w-[400px] mx-auto overflow-hidden py-8 lg:order-2 lg:basis-[calc(40%-80px)]">
					<div className="absolute top-14 right-10 bottom-0 left-0 bg-darkGreen z-30 flex flex-col justify-center items-center lg:bg-cream p-3 sm:p-4">
						<h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] text-white text-center lg:text-primary leading-snug mb-[10px]">
							Winning with Great Harvest
						</h2>
						<p className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] text-cream text-center lg:text-primary px-2">
							Let us guide you through the next
							steps!
						</p>
					</div>
					<div className="absolute top-10 right-6 bottom-0 left-6 bg-white z-[2] lg:bg-brandBlue"></div>
					<div className="absolute top-4 right-0 bottom-8 left-10 bg-[#7BACEA] z-[1] rotate-3"></div>
					<div className="absolute top-20 right-0 bottom-6 left-0 bg-[#7BACEA] z-[1]"></div>
				</div>

				<ol className="max-w-[400px] mx-auto px-0 lg:px-4 py-8 lg:py-12 lg:order-1 lg:basis-[calc(60%-80px)] lg:text-white leading-snug">
					{steps.map((step, index) => (
						<li
							className="flex items-start sm:items-center mb-[20px] sm:mb-[30px]"
							key={index}
						>
							<div className="bg-darkGreen w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] flex items-center justify-center flex-shrink-0">
								<span className="text-white text-[2rem] sm:text-[3rem] lg:bg-cream lg:text-darkGreen w-full h-full flex items-center justify-center">
									{index + 1}
								</span>
							</div>
							<p className="text-brandBlue ml-4 sm:ml-8 flex items-center text-[28px] md:text-[24px] lg:text-[28px] font-medium leading-tight sm:leading-snug lg:text-white text-wrap">
								{step}
							</p>
						</li>
					))}
				</ol>
				<div className="sm:p-[30px] lg:p-0 max-w-[1200px] mx-auto lg:order-3">
					<Image
						src="/images/gh-anchorage.jpeg"
						alt="Great Harvest Anchorage"
						width={1200}
						height={800}
						className="aspect-square lg:aspect-[3/2] mx-auto w-[250px] xs:w-[350px] sm:w-[400px] lg:w-[600px] xl:w-[800px] 2xl:w-[1000px] object-cover rounded-xl mb-[10px] border-6 border-cream object-[center_20%]"
					/>
					<p className="text-primary text-center text-[20px] lg:text-white">
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
