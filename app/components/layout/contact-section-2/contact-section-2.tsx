import Divider from "../../ui/divider";
import Image from "next/image";
import "./contact-section-2.css";

export default function ContactSection2() {
	return (
		<>
			<Divider
				color="bg-brandBlue"
				bgColor="bg-cream"
				className="py-[12px] findmepls"
			/>
			<div className="w-full relative">
				<div className="absolute bread-pattern-bg inset-0 -z-[1]"></div>
				<section className="hpy-[30px] px-[40px] flex flex-col items-center gap-[40px] contact-section-2 w-full">
					<div>
						<Image
							src="/wheat-mobile.svg"
							alt="Contact Us"
							width={400}
							height={200}
							className="mx-auto w-full md:max-w-[600px]"
						/>
					</div>
					<h2 className="text-center text-[3rem] w-full leading-snug">
						Are you ready? Let&apos;s make bread
						together!
					</h2>
					{/* // Todo: Replace with Hubspot form */}
					<div className="w-full flex flex-col md:flex-row gap-8">
						<section className="w-full">
							<h3 className="py-[10px] text-[28px]">
								Personal Information
							</h3>
							<div className="flex flex-col gap-[20px]">
								<div className="w-full h-[36px] border border-darkGreen"></div>
								<div className="w-full h-[36px] border border-darkGreen"></div>
								<div className="w-full h-[36px] border border-darkGreen"></div>
								<div className="w-full h-[36px] border border-darkGreen"></div>
								<div className="w-full h-[36px] border border-darkGreen"></div>
							</div>
						</section>
						<section className="w-full">
							<h3 className="py-[10px] text-[28px]">
								Additional Information
							</h3>
							<div className="flex flex-col gap-[20px]">
								<div className="w-full h-[36px] border border-darkGreen"></div>
								<div className="w-full h-[36px] border border-darkGreen"></div>
								<div className="w-full h-[36px] border border-darkGreen"></div>
								<div className="w-full h-[36px] border border-darkGreen"></div>
								<div className="w-full h-[36px] border border-darkGreen"></div>
							</div>
						</section>
					</div>
					<button className="cursor-pointer rounded-full w-[236px] bg-darkGreen text-[20px] text-white py-4 px-[84px] font-bold">
						Submit
					</button>
				</section>
			</div>
		</>
	);
}
