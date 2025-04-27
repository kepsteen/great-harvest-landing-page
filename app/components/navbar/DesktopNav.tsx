export default function DesktopNav() {
	return (
		<>
			<div className="hidden lg:flex">
				<ul className="flex items-center gap-x-8">
					<li>
						<div>
							<a
								className="text-[20px] font-normal"
								href="#faq"
							>
								FAQs
							</a>
						</div>
					</li>
					<li>
						<div>
							<a
								className="text-[20px] font-normal"
								href="#testimonial"
							>
								Testimonials
							</a>
						</div>
					</li>
					<li>
						<div>
							<a
								className="text-[20px] font-normal p-4 bg-white border"
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
