import Image from "next/image";

type Link = {
	title: string;
	link: string;
};

const footerNavLinks: Link[] = [
	{ title: "Locations", link: "" },
	{ title: "Order Catering", link: "" },
	{ title: "Franchise", link: "" },
	{ title: "About Us", link: "" },
	{ title: "Contact Us", link: "" },
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
			<footer className="bg-brandBlue text-white">
				<div className="flex flex-col md:flex-row md:justify-between md:w-2/3 md:mx-auto py-10">
					<div className="flex flex-col gap-y-5 items-center">
						<ul className="flex flex-col gap-y-5">
							{footerNavMap}
						</ul>
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
						<div className="flex justify-center gap-x-5 pt-5">
							<a href="#">
								<Image
									src={"./twitter-bird.svg"}
									alt="twitter"
									width={41}
									height={41}
									aria-label="Visit Twitter"
								/>
							</a>
							<a href="#">
								<Image
									src={"./facebook-logo.svg"}
									alt="facebook"
									width={41}
									height={41}
									aria-label="Visit Facebook"
								/>
							</a>
							<a href="#">
								<Image
									src={"./linkedin-logo.svg"}
									alt="linkedin"
									width={41}
									height={41}
									aria-label="Visit LinkedIn"
								/>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
