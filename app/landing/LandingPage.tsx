import "./landingPage.css";
import LandingHubspotContactForm from "../components/forms/landing-hubspot-form";

export default function LandingPage() {
	return (
		<>
			<section
				id="home"
				className="landing-section pt-35 pb-[230px] relative"
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
							<div className="bg-translucent-blue mt-7.5 mx-5 rounded-xl">
							<h2 className="text-[48px] text-white text-center pt-6">Ready to Franchise</h2>
							<h3 className="text-[20px] px-6 text-center text-white font-ghPlain">Bring Great Harvest to Your Town by Completing the Form Below</h3>
							<p className="text-center text-white pt-2.5">*Required Information</p>
							<LandingHubspotContactForm region="na1" formId="3d7b7292-e1bb-4778-b4b8-1ccbc20dbc81" portalId="53298" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
