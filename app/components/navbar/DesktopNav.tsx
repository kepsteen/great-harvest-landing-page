import {Link} from 'react-scroll';

export default function DesktopNav() {
	return (
		<>
			<div className="hidden lg:flex">
				<ul className="flex items-center gap-x-15">
					<li>
						<div>
							<Link to="faq" smooth={true} duration={100} offset={-100} className="text-[20px] font-normal hover:font-bold">
								FAQs
							</Link>
						</div>
					</li>
					<li>
						<div>
							<Link to="testimonial" smooth={true} duration={100} offset={-100} className="text-[20px] font-normal hover:font-bold">
								Testimonials
							</Link>
						</div>
					</li>
					<li>
						<div>
							<Link to="readytofranchise" smooth={true} duration={100} offset={-100} className="text-[20px] font-normal p-4 bg-white border hover:bg-gray-200">
								Ready to Franchise
							</Link>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}
