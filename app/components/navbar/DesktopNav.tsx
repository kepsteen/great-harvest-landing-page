import { IoSearch } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";

export default function DesktopNav() {
	return (
		<>
			<div className="hidden lg:flex">
				<ul className="flex items-center gap-x-8">
					<li>
						<div>
							<a
								className="text-[20px] font-normal"
								href="#"
							>
								FAQs
							</a>
						</div>
					</li>
					<li>
						<div>
							<a
								className="text-[20px] font-normal"
								href="#"
							>
								Testimonials
							</a>
						</div>
					</li>
					<li>
						<div>
							<a
								className="text-[20px] font-normal p-4 bg-white border"
								href="#"
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
