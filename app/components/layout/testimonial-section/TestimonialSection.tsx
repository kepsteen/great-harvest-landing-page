import Image from "next/image";

export default function TestimonialSection() {
	return (
		<>
			<section
				className="bg-brand-blue pt-10 pb-5 md:py-12.5"
				id="testimonial"
			>
				<div>
					<h2 className="text-[48px] text-center text-white py-4 md:pt-0">
						Backed by our Franchisees
					</h2>
					<div className="bg-white rounded-xl mx-5 px-6 md:px-9 pt-6 md:pb-6 md:grid md:grid-cols-[35%_65%] md:mx-[84px] place-self-center lg:w-3/5">
						<div className="mb-2.5 md:order-2 lg:my-auto">
							<p className="text-[13.6px] leading-[17px] md:pr-0 md:pl-5">
								“Owning a Great Harvest bakery has been nothing short of transformational—for our family, our team, and our community. What started as a dream to build something meaningful has become a deeply rooted part of our daily lives. The opportunity to blend hand-crafted food with heart-centered service has given us purpose beyond just running a business.  ... The Great Harvest model has given us the tools and freedom to create a bakery that reflects our values—where kindness matters, quality is never compromised, and people genuinely feel at home. We&rsquo;ve built lasting relationships with customers, partnered with local organizations, and created jobs that have helped people grow not just professionally, but personally.”
							</p>
							<div className="py-2.5 md:pb-0">
								<p className="text-end md:text-start md:pl-5 font-ghPlain">
									Elise, Katie, & Kodiak Smith
								</p>
								<p className="text-end md:text-start md:pl-5 pt-2 leading-5 font-ghSimpleRustic">
									Harvesting in
									<br />
									Northwest, Indiana
								</p>
							</div>
						</div>
						<div className="pb-4 md:pb-0 md:ml-5 md:h-full md:order-1 md:flex md:items-center">
							<Image
								className="max-w-[475px] rounded-full mx-auto"
								src="/images/franchisees-owner.png"
								width={162}
								height={162}
								alt="Three Great Harvest franchise owners in Great Harvest apparel"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
