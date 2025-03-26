import Image from "next/image";
import Divider from "../ui/divider";
export default function TestimonialsSection() {
	return (
		<>
			<Divider
				color="bg-brandBlue"
				bgColor="bg-cream"
				className="py-[12px]"
			/>
			<section className="bg-cream">
				<div className="px-[38px] pt-[38px] pb-[30px] md:px-[171px] lg:hidden">
					<Image
						src="/wheat.svg"
						alt="wheat icon"
						width={1000}
						height={1000}
					/>
				</div>
				<div className="hidden lg:block pt-[38px] pb-[30px] mx-auto">
					<Image
						src="/desktop-wheat.svg"
						alt="wheat icon"
						width={1000}
						height={1000}
						className="mx-auto"
					/>
				</div>
				<div className="px-2 sm:px-[52px]">
					<h2 className="text-center text-[3rem] mb-[55px]">
						Testimonials
					</h2>
					<div className="md:flex md:gap-x-6 md:mb-[63px] md:items-center max-w-[1040px] mx-auto lg:px-[50px]">
						<p className="mb-[20px] md:mb-0 text-second-text font-bold item-one md:w-3/5 text-center md:pr-4">
							A very long and descriptive yet
							inspiring and motivating quote from
							Happy Franchisee about how Great
							Harvest was the right choice because
							of XYZ and the benefits now are ABC.
						</p>
						<div className="flex justify-center items-center gap-x-4 mb-[163px] md:mb-0 item-two md:w-2/5">
							<div className="w-[180px] h-[180px] rounded-full overflow-hidden shrink-0">
								{/* // Todo: Add testimonial image */}
								<img
									src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29uJTIwc21pbGluZ3xlbnwwfHwwfHx8MA%3D%3D"
									alt="testimonial"
									width={1000}
									height={1000}
									className="object-cover w-full h-full"
								/>
							</div>
							<div className="flex flex-col">
								<span className="font-bold text-second-text">
									Harvesting in
								</span>
								<span>City, State, Country</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
