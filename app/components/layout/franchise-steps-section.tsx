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
		<section className="bg-cream">
			<div className="relative w-full h-[500px] max-w-[500px] mx-auto overflow-hidden py-10">
				<div className="absolute top-14 right-10 bottom-0 left-0 bg-darkGreen z-3 flex flex-col justify-center items-center">
					<h2 className="text-[3rem] text-white text-center">
						Winning with Great Harvest
					</h2>
					<p className="text-[1.75rem] text-cream text-center">
						Let us guide you through the next
						steps!
					</p>
				</div>
				<div className="absolute top-10 right-6 bottom-0 left-6 bg-white z-2"></div>
				<div className="absolute top-4 right-0 bottom-8 left-10 bg-[#7BACEA] z-1 rotate-3"></div>
				<div className="absolute top-20 right-0 bottom-6 left-0 bg-[#7BACEA] z-1"></div>
			</div>

			<div className="max-w-3xl mx-auto px-4 py-12 bg-cream">
				{steps.map((step, index) => (
					<div
						className="flex items-start mb-[30px]"
						key={index}
					>
						<div className="bg-darkGreen w-[80px] h-[80px] flex items-center justify-center flex-shrink-0">
							<span className="text-white text-[3rem] font-bold">
								{index + 1}
							</span>
						</div>
						<div className="ml-8 flex items-center">
							<p className="text-3xl text-navy font-medium">
								{step}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="p-[30px] aspect-square">
				<Image
					src="/images/gh-anchorage.jpeg"
					alt="Great Harvest Anchorage"
					width={400}
					height={400}
					className="w-full h-full object-cover rounded-md mb-[10px]"
				/>
				<p className="text-primary text-center text-base">
					(Jarrett&apos;s - Anchorage, AK)
				</p>
			</div>
			<Divider />
		</section>
	);
}
