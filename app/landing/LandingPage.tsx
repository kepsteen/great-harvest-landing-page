import "./landingPage.css";
import Image from "next/image";

export default function LandingPage() {
	return (
		<>
		<section className="landing-section">
		<div className="landing-section-wrapper bg-darkGreen lg:bg-white">
				<div
					className="relative landing-section-container"
				>
			<div className="absolute lg:hidden bottom-[-2px] w-full left-0">
			<Image className="w-full h-[150px]" src="/landing-chevron.svg" width={1000} height={1000} alt="main landing section divider" />
				</div>
					<div className="mx-auto lg:mx-0 my-auto w-full lg:w-1/2 flex flex-col gap-y-10 md:gap-y-15">
						<div className="flex flex-col justify-center text-center">
							<h1 className="text-[74px] font-bold text-cream text-shadow leading-20 title-text-shadow">
								Harvest
							</h1>
							<h1 className="text-[53px] sm:text-[74px] text-logoOrange sm:text-cream title-text-shadow font-bold">
								Opportunity
							</h1>
							<h1 className="text-[74px] text-cream text-shadow leading-20 title-text-shadow font-bold">
								Today
							</h1>
						</div>
						<div className="w-full px-1 md:px-24">
							<div className="px-5 px-5 py-1 md:py-5 rounded-xl bg-lightBeigeOp text-brandBlue font-bold text-xl md:mx-5">
								<h1>Revolutionary Concept</h1>
								<span>
									Since 1976 Great Harvest has been
									providing clean, fresh,
									made-from-scratch products before
									it was a thing. Because it&apos;s
									always been our thing.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	);
}
