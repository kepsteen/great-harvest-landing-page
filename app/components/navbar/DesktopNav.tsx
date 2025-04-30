export default function DesktopNav() {
	return (
		<>
			<div className="hidden lg:flex">
				<ul className="flex items-center gap-x-15">
					<li>
						<div>
							<a
								className="text-[20px] font-normal hover:font-bold"
								href="#faq"
							>
								FAQs
							</a>
						</div>
					</li>
					<li>
						<div>
							<a
								className="text-[20px] font-normal hover:font-bold"
								href="#testimonial"
							>
								Testimonials
							</a>
						</div>
					</li>
					<li>
						<div>
							<a
								className="text-[20px] font-normal p-4 bg-white border hover:bg-gray-200"
								href="#readytofranchise"
							>
								Ready to Franchise
							</a>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}
