import Image from "next/image";

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
			<div className="relative w-full bg-gradient-to-b from-bgTan from-0% via-bgTan via-10% to-cream to-20% border-t border-textGray">
				<section className="py-16 w-full max-w-full mx-auto">
					<div className="container mx-auto px-4 mb-12">
						<div className="text-center mb-12">
							<h2 className="text-brandBlue text-5xl mb-5">
								Winning with Great Harvest
							</h2>
							<p className="text-[1.75rem] text-textGray">
								Let us guide you through the next
								steps!
							</p>
						</div>

						<div className="flex flex-col xl:flex-row xl:gap-8 xl:items-start">
							<div className="mx-auto px-4 w-full xl:flex-1 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-none">
								{steps.map((step, index) => (
									<div
										key={index}
										className="flex items-center mb-8"
									>
										<div className="flex-shrink-0 w-20 h-20 bg-bgTan border border-textGray rounded-full flex items-center justify-center mr-6">
											<span className="text-5xl text-textGray">
												{index + 1}
											</span>
										</div>
										<div className="text-[1.75rem] text-brandBlue">
											{step}
										</div>
									</div>
								))}
							</div>

							<div className="mt-10 xl:mt-0 xl:flex-1 flex justify-center px-4 sm:px-6 lg:px-8">
								<div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-none h-80 xl:h-[500px]">
									<Image
										src="/images/catering-tray-1.jpg"
										alt="Great Harvest Food"
										fill
										className="object-cover rounded-lg"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
