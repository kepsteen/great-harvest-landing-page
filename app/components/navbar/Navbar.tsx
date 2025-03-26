"use client";
import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
	const [isScrolled, setIsScrolled] =
		useState(false);

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
		<nav
			className={`fixed lg:sticky top-0 left-0 w-full px-5 md:px-20 lg:px-17.5 py-5 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-cream  py-4"
					: "bg-transparent lg:bg-cream  py-5"
			}`}
			role="navigation"
			aria-label="Main Navigation"
		>
			<div className="flex justify-between mx-auto">
				<div className="w-1/3 min-w-[100px] max-w-[160px]">
					<a
						aria-label="Great Harvest Logo"
						href="#"
					>
						<img
							className="w-full"
							src="./images/great-harvest-logo.png"
							alt="Great Harvest Logo"
						/>
					</a>
				</div>
				<MobileNav />
				<DesktopNav />
			</div>
		</nav>
	);
}
