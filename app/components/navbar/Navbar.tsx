"use client";
import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import OpenedNavMenu from "./OpenedNavMenu";

export default function Navbar() {
	const [isScrolled, setIsScrolled] =
		useState(false);
	const [isMenuOpened, setIsMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 25);
		};

		window.addEventListener(
			"scroll",
			handleScroll
		);
		return () =>
			window.removeEventListener(
				"scroll",
				handleScroll
			);
	}, []);

	return (
		<>
		<nav
			className={`fixed lg:sticky top-0 left-0 w-full px-5 md:px-20 lg:px-17.5 py-5 z-50 transition-all duration-300 ease-in-out ${isMenuOpened || isScrolled ? "bg-cream py-4" : "bg-transparent lg:bg-cream  py-5"}
			`}
			role="navigation"
			aria-label="Main Navigation"
		>
			<div className="flex justify-between mx-auto">
				<div className="min-w-[100px] max-w-[160px]">
					<a
						aria-label="Great Harvest Logo"
						href="#home"
						onClick={() => setIsMenuOpen(false)}
					>
						<img
							className="w-full"
							src="./images/great-harvest-logo.png"
							alt="Great Harvest Logo"
						/>
					</a>
				</div>
				<MobileNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpened} />
				<DesktopNav />
			</div>
			{isMenuOpened && (
				<div className="absolute top-[106px] left-0 w-full transition-all duration-300 ease-in-out transform"   aria-hidden={!isMenuOpened}>
					<OpenedNavMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpened} />
				</div>
			)}
		</nav>
</>
	);
}
