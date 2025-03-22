import "./landingPage.css";

export default function LandingPage() {
	return (
		<>
		<div className="landing-section-wrapper bg-darkGreen">
			<div className="stroke first-stroke"></div>
			<div className="stroke second-stroke"></div>
			<div className="stroke third-stroke"></div>
				<div
					className="landing-section-container flex-grow"
					aria-hidden="true"
				>
					<div className="mx-auto lg:mx-0 my-auto w-full lg:w-1/2 flex flex-col gap-y-26">
						<div className="flex flex-col text-center">
							<h1 className="text-[74px] text-cream text-shadow leading-20">
								Harvest
							</h1>
							<h1 className="text-[53px] md:text-[74px] text-logoOrange md:text-cream text-shadow">
								Opportunity
							</h1>
							<h1 className="text-[74px] text-cream text-shadow leading-20">
								Today
							</h1>
						</div>
						<div className="w-full px-1 pb-5 md:px-24">
							<div className="px-3 md:px-5 py-1 md:py-5 rounded-xl bg-lightBeigeOp text-brandBlue font-bold text-xl">
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
		</>
	);
}
