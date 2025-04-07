import Image from "next/image";
export default function TestimonialsSection() {
	return (
		<>
			<section className="bg-cream py-[60px]">
				<div className="px-[38px] md:px-[171px] lg:hidden">
					<Image
						src="/wheat-mobile.svg"
						alt="wheat icon"
						width={300}
						height={170}
						className="mx-auto"
					/>
				</div>
				<div className="hidden lg:block mx-auto">
					<Image
						src="/wheat-desktop.svg"
						alt="wheat icon"
						width={457}
						height={170}
						className="mx-auto"
					/>
				</div>
				<div className="px-2 sm:px-[52px] pt-[40px] pb-[50px]">
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
							<div className="w-[180px] h-[180px] rounded-full overflow-hidden shrink-0 drop-shadow-xl/50">
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
