import { navMenuData } from "./data/nav-menu-data";

export default function OpenedNavMenu({
	isMenuOpen,
	setIsMenuOpen,
}: {
	isMenuOpen: boolean;
	setIsMenuOpen: (arg: boolean) => void;
}) {
	const tabMap = navMenuData.map((tab, index) => (
		<li
			key={index}
			className="py-4 border-b-[1px] text-[20px]"
		>
			<a
				href={tab.href}
				className="cursor-pointer"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				{tab.title}
			</a>
		</li>
	));

	return (
		<>
			<div
				id="mobile-nav-menu"
				className="pt-5 bg-logo-orange rounded-b-xl text-white"
			>
				<h1 className="text-center text-[20px] font-ghModDisplay">
					Jump to:
				</h1>
				<div className="px-5">
					<ul className="flex flex-col text-center mt-5 font-ghPlain">
						{tabMap}
					</ul>
				</div>
				<div className="py-5 text-center">
					<button
						className="bg-white py-4 px-5 rounded-full text-black text-[20px] cursor-pointer"
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
