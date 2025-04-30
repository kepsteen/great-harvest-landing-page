"use client";
import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import OpenedNavMenu from "./OpenedNavMenu";
import { Link } from "react-scroll";

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
		<header>
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
					className={`fixed top-[106px] right-0 w-full max-w-[400px] transition-all duration-200 ease-in-out transform
    ${
			isMenuOpened
				? "translate-y-0 opacity-100 min-[400px]:translate-x-0"
				: "-translate-y-full opacity-0 pointer-events-none min-[400px]:translate-x-full min-[400px]:-translate-y-0"
		}`}
					aria-hidden={!isMenuOpened}
				>
					<OpenedNavMenu
						setIsMenuOpen={setIsMenuOpen}
						isMenuOpen={isMenuOpened}
					/>
				</div>
			</nav>
			{/* Scroll-activated Mobile Banner */}
			<Link
				to="readytofranchise"
				smooth={true}
				offset={-150}
				duration={100}
				className={`fixed top-[107px] cursor-pointer left-0 w-full bg-brand-blue text-white text-center hover:font-bold text-[1.25rem] font-normal font-ghModDisplay py-3 z-40 lg:hidden transition-all duration-300 ease-in-out transform ${isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
				aria-hidden={!isScrolled}
			>
				READY TO FRANCHISE
			</Link>
		</header>
	);
}
