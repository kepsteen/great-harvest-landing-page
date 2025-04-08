import Image from "next/image";

const footerNavOptions: string[] = [
	"Locations",
	"Order Catering",
	"Franchise",
	"About Us",
	"Contact Us",
];

export default function Footer() {
	const footerNavMap = footerNavOptions.map(
		(footerNavOption, index) => (
			<li key={index}>
				<a href="#" className="text-[15px]">
					{footerNavOption}
				</a>
			</li>
		)
	);

	return (
		<>
			<footer className="bg-brandBlue text-white">
				<div className="flex flex-col md:flex-row md:justify-between md:w-2/3 md:mx-auto py-10">
					<div className="flex flex-col md:order-2 gap-y-5 items-center">
						<div className="flex">
							<a
								className="font-bold text-[20px]"
								href="#home"
							>
								Great Harvest
							</a>
						</div>
						<ul className="flex flex-col gap-y-5">
							{footerNavMap}
						</ul>
					</div>
					<div className="flex flex-col md:order-1 items-center lg:items-start">
						<div className="pt-10 md:pt-0 gap-y-5 lg:gap-x-2 grid grid-rows-2 lg:grid-rows-1 grid-cols-[50px_auto] lg:grid-cols-[50px_auto_50px_auto] items-center">
							<div className="pr-2">
								<Image
									src="./location-pointer.svg"
									alt="location pointer icon"
									width={46}
									height={46}
								/>
							</div>
							<div>
								<p>
									28 S Montana Street <br />{" "}
									Dillon, MT 59725
								</p>
							</div>
							<div className="pr-2">
								<Image
									src="./android-phone.svg"
									alt="android phone icon"
									width={46}
									height={46}
								/>
							</div>
							<div>
								<p className="lg:text-end">
									1.800.442.0424 <br />{" "}
									406.683.6842{" "}
								</p>
							</div>
						</div>
						<div className="flex justify-center gap-x-5 pt-5">
							<a href="#">
								<Image
									src={"./twitter-bird.svg"}
									alt="twitter bird"
									width={41}
									height={41}
									aria-label="Visit Twitter"
								/>
							</a>
							<a href="#">
								<Image
									src={"./facebook-logo.svg"}
									alt="facebook logo"
									width={41}
									height={41}
									aria-label="Visit Facebook"
								/>
							</a>
							<a href="#">
								<Image
									src={"./linkedin-logo.svg"}
									alt="linkedin logo"
									width={41}
									height={41}
									aria-label="Visit Linkedin"
								/>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
