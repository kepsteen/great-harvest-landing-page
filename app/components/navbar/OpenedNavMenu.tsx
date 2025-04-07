export default function OpenedNavMenu({
	isMenuOpen,
	setIsMenuOpen,
}: {
	isMenuOpen: boolean;
	setIsMenuOpen: (arg: boolean) => void;
}) {
	return (
		<>
			<div
				id="mobile-nav-menu"
				className="pt-5 bg-cream rounded-b-xl"
			>
				<h1 className="text-center text-[20px]">
					Jump to:
				</h1>
				<div className="px-5">
					<ul className="flex flex-col bg-tan text-center mt-5">
						<li className="py-4 border-b-[1px] text-[20px]">
							<a
								href="#readyToFranchise"
								className="cursor-pointer"
								onClick={() =>
									setIsMenuOpen(!isMenuOpen)
								}
							>
								Ready to Franchise
							</a>
						</li>
						<li className="py-4 border-b-[1px] text-[20px]">
							<a
								href="#whyGreatHarvest"
								onClick={() =>
									setIsMenuOpen(!isMenuOpen)
								}
							>
								Why Great Harvest?
							</a>
						</li>
						<li className="py-4 border-b-[1px] text-[20px]">
							<a
								href="#corporateSupport"
								onClick={() =>
									setIsMenuOpen(!isMenuOpen)
								}
							>
								Corporate Support
							</a>
						</li>
						<li className="py-4 border-b-[1px] text-[20px]">
							<a
								href="#testimonials"
								onClick={() =>
									setIsMenuOpen(!isMenuOpen)
								}
							>
								Franchise Testimonials
							</a>
						</li>
						<li className="py-4 border-b-[1px] text-[20px]">
							<a
								href="#theProcess"
								onClick={() =>
									setIsMenuOpen(!isMenuOpen)
								}
							>
								The Process
							</a>
						</li>
						<li className="py-4 border-b-[1px] text-[20px]">
							<a
								href="#faq"
								onClick={() =>
									setIsMenuOpen(!isMenuOpen)
								}
							>
								FAQs
							</a>
						</li>
					</ul>
				</div>
				<div className="py-5 text-center">
					<button
						className="bg-[#534F49] py-4 px-5 rounded-full text-white text-[20px] cursor-pointer"
						onClick={() =>
							setIsMenuOpen(!isMenuOpen)
						}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-nav-menu"
						aria-label="Toggle menu"
					>
						Close
					</button>
				</div>
			</div>
		</>
	);
}
