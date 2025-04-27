import "./landingPage.css";
import Image from "next/image";

export default function LandingPage() {
	return (
		<>
			<section
				id="home"
				className="landing-section pt-50 relative"
			>
				<div className="landing-section-wrapper">
					<div className="">
						<div className="lg:pt-30 my-auto lg:grid grid-cols-2">
							<div className="mx-auto lg:mx-0 w-full  flex flex-col gap-y-10 md:gap-y-15">
								<div className="flex flex-col justify-center text-center">
									<h1 className="text-[72px] font-bold font-ghModDisplay text-white title-text-shadow leading-20">
										Rise Into Ownership
									</h1>
								</div>
								<div className="w-full px-7.5 lg:pl-5 lg:pr-0 md:px-24">
									<div className="px-7 py-2.5 md:py-5 bg-lightBeigeOp text-brandBlue font-bold text-xl md:mx-5">
										<p>
											We&apos;re looking for
											passionate entrepreneurs who
											want to bring handcrafted
											bread and small-town warmth
											to the neighborhoods they
											love.
										</p>
									</div>
								</div>
							</div>
							{/* TEMP SECTION ONLY  */}
							<section className="px-[80px] flex flex-col items-center gap-[20px] w-full hidden lg:flex text-[#0A2240]">
								<h2 className="text-center text-[3rem] w-full leading-snug">
									Contact Us and Let&apos;s Make
									Some Bread together!
								</h2>
								<div className="w-full flex flex-col gap-8">
									<section className="w-full">
										<h3 className="py-[10px] text-[28px] text-[#534F49]">
											Personal Information
										</h3>
										<div className="flex flex-col gap-[20px]">
											<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">
												*First Name
											</div>
											<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">
												*Last Name
											</div>
											<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">
												*Mobile Number
											</div>
											<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">
												*Email
											</div>
											<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">
												*Zipcode
											</div>
										</div>
									</section>
									<section className="w-full">
										<h3 className="py-[10px] text-[28px] text-[#534F49]">
											Additional Information
										</h3>
										<div className="flex flex-col gap-[20px]">
											<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">
												*Liquid Assets
											</div>
											<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">
												*Net Worth
											</div>
											<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">
												*Type of Ownership
											</div>
											<div className="w-full h-[36px] border bg-cream pl-2 flex items-center">
												*Message
											</div>
										</div>
									</section>
								</div>
								<button className="cursor-pointer rounded-full w-[236px] bg-darkGreen text-[20px] text-cream py-4 px-[84px] font-bold">
									Submit
								</button>
							</section>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
