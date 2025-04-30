import "./landingPage.css";
import LandingHubspotContactForm from "../components/forms/landing-hubspot-form";

export default function LandingPage() {
	return (
		<>
			<section
				id="home"
				className="landing-section pt-35 lg:pt-0 pb-[300px] md:pb-[500px] lg:pb-[180px] relative"
			>
				<div className="landing-section-wrapper">
					<div className="">
						<div className="lg:pt-30 my-auto lg:grid grid-cols-2 lg:px-[60px]">
							<div className="mx-auto lg:mx-0 w-full  flex flex-col gap-y-10 md:gap-y-15">
								<div className="flex flex-col justify-center text-center lg:mt-10">
									<h1 className="text-[72px] font-bold font-ghModDisplay text-white title-text-shadow leading-20 px-5">
										Rise Into Ownership
									</h1>
								</div>
								<div className="w-full px-5 md:px-0 lg:pl-5 lg:pr-0">
									<div className="px-7 py-2.5 md:py-5 bg-lightBeigeOp text-brandBlue font-bold font-ghPlain text-xl md:mx-[80px] lg:mx-0 shadow-[0px_4px_4px_0px_#00000040]">
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
							<div
								className="bg-[url('/decorative/mobile-top-form-bg.png')] bg-center bg-[length:100%_100%] bg-no-repeat mt-7.5 lg:mt-0 mx-5 md:mx-[80px] lg:mx-[40px] xl:ml-[50px] rounded-xl min-h-[800px]"
								role="group"
							>
								<h2 className="text-[48px] text-white text-center pt-6">
									Ready to Franchise
								</h2>
								<h3 className="text-[20px] px-6 text-center text-white font-ghPlain">
									Bring Great Harvest to Your Town
									by Completing the Form Below
								</h3>
								<p className="text-center text-white pt-2.5">
									*Required Information
								</p>
								<LandingHubspotContactForm
									region="na1"
									formId="3d7b7292-e1bb-4778-b4b8-1ccbc20dbc81"
									portalId="53298"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
