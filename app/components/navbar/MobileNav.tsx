import { RxHamburgerMenu } from "react-icons/rx";


export default function MobileNav({
	isMenuOpen,
	setIsMenuOpen,
}: {
	isMenuOpen: boolean;
	setIsMenuOpen: (arg: boolean) => void;
}) {
	return (
		<>
			<div className="flex items-center gap-x-6 lg:hidden">
				<div>
					<button
						className="cursor-pointer"
						aria-label="Open mobile menu"
  					aria-expanded={isMenuOpen ? "true" : "false"}
						aria-controls="mobile-menu"
						onClick={() =>
							setIsMenuOpen(!isMenuOpen)
						}
					>
						<RxHamburgerMenu
							size={27}
							color="#0A2240"
						/>
					</button>
				</div>
			</div>
		</>
	);
}
