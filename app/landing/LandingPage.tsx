import "./landingPage.css";
import Image from "next/image";

export default function LandingPage() {
	return (
		<>
			<section
				id="home"
				className="landing-section relative"
			>
						<div className="absolute lg:hidden bottom-[-2px] w-full left-0 z-10">
							<Image
								className="w-full h-[150px] transform scale-y-[-1] z-10"
								src="/new-arrows.svg"
								width={1000}
								height={1000}
								alt="main landing section divider"
							/>
						</div>
				<div className="landing-section-wrapper lg:bg-white">
						<div className="absolute lg:hidden bottom-0 w-full left-0">
							<Image
								className="w-full h-[150px] transform scale-y-[-1] z-10"
								src="/new-arrows.svg"
								width={1000}
								height={1000}
								alt="main landing section divider"
							/>
						</div>
					<div className="relative landing-section-container">
						<div className="lg:pt-30 my-auto lg:grid grid-cols-2">
							<div className="mx-auto lg:mx-0 w-full  flex flex-col gap-y-10 md:gap-y-15">
								<div className="flex flex-col justify-center text-center">
									<h1 className="text-[72px] font-bold text-cream text-shadow leading-20 title-text-shadow">
										Harvest
									</h1>
									<h1 className="text-[53px] sm:text-[72px] text-cream title-text-shadow font-bold">
										Opportunity
									</h1>
									<h1 className="text-[72px] text-cream text-shadow leading-20 title-text-shadow font-bold">
										Today
									</h1>
								</div>
								<div className="w-full px-10 lg:pl-5 lg:pr-0 md:px-24">
									<div className="px-3 py-2.5 md:py-5 rounded-xl bg-lightBeigeOp text-brandBlue font-bold text-xl md:mx-5">
										<h1>Revolutionary Concept</h1>
										<span>
											Since 1976 Great Harvest has
											been providing clean, fresh,
											made-from-scratch products
											before it was a thing. Because
											it&apos;s always been our
											thing.
										</span>
									</div>
								</div>
							</div>
							{/* TEMP SECTION ONLY  */}
		<section className="px-[80px] flex flex-col items-center gap-[20px] w-full hidden lg:flex text-[#0A2240]">
			<h2 className="text-center text-[3rem] w-full leading-snug">
				Contact Us and Let&apos;s Make Some Bread
				together!
			</h2>
			<div className="w-full flex flex-col gap-8">
				<section className="w-full">
					<h3 className="py-[10px] text-[28px] text-[#534F49]">
						Personal Information
					</h3>
					<div className="flex flex-col gap-[20px]">
						<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">*First Name</div>
						<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">*Last Name</div>
						<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">*Mobile Number</div>
						<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">*Email</div>
						<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">*Zipcode</div>
					</div>
				</section>
				<section className="w-full">
					<h3 className="py-[10px] text-[28px] text-[#534F49]">
						Additional Information
					</h3>
					<div className="flex flex-col gap-[20px]">
						<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">*Liquid Assets</div>
						<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">*Net Worth</div>
						<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">*Type of Ownership</div>
						<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">*Message</div>
					</div>
				</section>
			</div>
			<button className="cursor-pointer rounded-full w-[236px] bg-darkGreen text-[20px] text-cream py-4 px-[84px] font-bold">
				Submit
			</button>
		</section>
						</div>
						{/* <div className="mx-auto lg:mx-0 my-auto w-full  flex flex-col gap-y-10 md:gap-y-15">
							<div className="flex flex-col justify-center text-center">
								<h1 className="text-[72px] font-bold text-cream text-shadow leading-20 title-text-shadow">
									Harvest
								</h1>
								<h1 className="text-[53px] sm:text-[72px] text-cream title-text-shadow font-bold">
									Opportunity
								</h1>
								<h1 className="text-[72px] text-cream text-shadow leading-20 title-text-shadow font-bold">
									Today
								</h1>
							</div>
							<div className="w-full px-10 md:px-24">
								<div className="px-3 py-2.5 md:py-5 rounded-xl bg-lightBeigeOp text-brandBlue font-bold text-xl md:mx-5">
									<h1>Revolutionary Concept</h1>
									<span>
										Since 1976 Great Harvest has
										been providing clean, fresh,
										made-from-scratch products
										before it was a thing. Because
										it&apos;s always been our
										thing.
									</span>
								</div>
							</div>
						</div> */}
						<div></div>
					</div>
				</div>
			</section>
		</>
	);
}
