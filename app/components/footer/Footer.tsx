import Image from "next/image";

type Link = {
	title: string;
	link: string;
};

const footerNavLinks: Link[] = [
	{
		title: "Locations",
		link: "https://www.greatharvest.com/local-bakery-information",
	},
	{
		title: "Order Catering",
		link: "https://www.ezcater.com/brand/pvt/great-harvest-bread-co",
	},
	{
		title: "Franchise",
		link: "https://www.greatharvest.com/franchise",
	},
	{
		title: "About Us",
		link: "https://www.greatharvest.com/company/franchise-business-philosophy",
	},
	{
		title: "Contact Us",
		link: "https://www.greatharvest.com/company/great-harvest-franchise-office",
	},
];

export default function Footer() {
	const footerNavMap = footerNavLinks.map(
		(footerLink, index) => (
			<li key={index}>
				<a
					href={footerLink.link}
					className="text-[15px]"
				>
					{footerLink.title}
				</a>
			</li>
		)
	);

	return (
		<>
			<footer className="bg-charcoal-gray text-white">
				<div className="flex flex-col items-center md:flex-row md:justify-between md:px-[60px] md:mx-auto py-[30px] lg:px-[80px]">
					<div className="flex flex-row gap-[30px] items-center">
						<Image
							src="/logos/GHlogo-vertical.png"
							alt="Great Harvest logo"
							height={204}
							width={122.4}
						/>
						<div className="flex flex-col gap-y-5 items-center">
							<ul className="flex flex-col gap-y-5">
								{footerNavMap}
							</ul>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="pt-10 md:pt-0 gap-y-5 grid grid-rows-2  grid-cols-[50px_auto]  items-center">
							<div className="pr-2">
								<Image
									src="./location-pointer.svg"
									alt=""
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
									alt=""
									width={46}
									height={46}
								/>
							</div>
							<div className="flex flex-col">
								<a href="tel:800-442-0424">
									1.800.442.0424
								</a>
								<a href="tel:406-683-6842">
									406.683.6842
								</a>
							</div>
						</div>
						<div className="flex flex-row items-center justify-center gap-x-5 pt-5">
							<a href="https://twitter.com/GreatHarvest">
								<Image
									src={"/icons/x-logo.png"}
									alt="x (formerly twitter)"
									width={32}
									height={32}
								/>
							</a>
							<a href="https://www.facebook.com/GreatHarvestBreadCo/">
								<Image
									src={"/icons/facebook-logo.svg"}
									alt="facebook"
									width={41}
									height={41}
								/>
							</a>
							<a href="https://www.linkedin.com/company/great-harvest-bread-co.">
								<Image
									src={"/icons/linkedin-logo.svg"}
									alt="linkedin"
									width={41}
									height={41}
								/>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
