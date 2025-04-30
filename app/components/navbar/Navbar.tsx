"use client";
import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import OpenedNavMenu from "./OpenedNavMenu";

export default function Navbar() {
	const [isScrolled, setIsScrolled] =
		useState(false);
	const [isMenuOpened, setIsMenuOpen] =
		useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 25);
		};

		handleScroll();

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
				className={`fixed top-0 left-0 w-full px-5 md:px-6 lg:px-[80px] py-5 z-50 transition-all duration-300 ease-in-out ${isMenuOpened || isScrolled ? " py-4 bg-cream" : "bg-transparent py-5"}
			`}
				role="navigation"
				aria-label="Main Navigation"
			>
				<div className="flex justify-between mx-auto">
					<div className="min-w-[100px] max-w-[160px] transform transition duration-200 hover:scale-105">
						<a
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
					<MobileNav
						setIsMenuOpen={setIsMenuOpen}
						isMenuOpen={isMenuOpened}
					/>
					<DesktopNav />
				</div>
				<div
					id="mobile-menu"
					className={`absolute top-[106px] left-0 w-full transition-all duration-300 ease-in-out transform  ${isMenuOpened ? "translate-y-0 opacity-100 " : "-translate-y-full opacity-0 pointer-events-none "}`}
					aria-hidden={!isMenuOpened}
				>
					<OpenedNavMenu
						setIsMenuOpen={setIsMenuOpen}
						isMenuOpen={isMenuOpened}
					/>
				</div>
			</nav>
			{/* Scroll-activated Mobile Banner */}
			<a
				href="#readytofranchise"
				className={`fixed top-[107px] left-0 w-full bg-brand-blue text-white text-center hover:font-bold text-[1.25rem] font-normal font-ghModDisplay py-3 z-40 md:hidden transition-all duration-300 ease-in-out transform ${isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
				aria-hidden={!isScrolled}
			>
				READY TO FRANCHISE
			</a>
		</>
	);
}
