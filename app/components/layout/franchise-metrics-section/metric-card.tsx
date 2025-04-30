import Image from "next/image";
import { MetricCardData } from "./metric.interface";
import "./franchise-metrics-section.css";

export default function MetricCard({
	card,
	className,
}: {
	card: MetricCardData;
	className?: string;
}) {
	return (
		<article
			className={`bg-white rounded-xl shadow-2xl text-center w-full max-w-sm mx-auto h-auto py-6 px-4 flex flex-col items-center ${className}`}
		>
			{/* Container for Image and Badge */}
			<div className="relative inline-block">
				{/* Profile Image */}
				<div className="w-[216px] h-[216px] rounded-full overflow-hidden mx-auto image-dropshadow">
					<Image
						src={card.imageSrc}
						alt={card.imageAlt}
						width={216}
						height={216}
						className="object-cover w-full h-full"
					/>
				</div>

				{/* --- SVG Badge with Text Overlay --- */}
				<div
					className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 w-[216px] h-[48px]
            		bg-no-repeat bg-center bg-[length:100%_100%] flex items-center justify-center text-white italic
            		text-xl	font-ghPlain px-4 z-10 whitespace-nowrap"
					// Apply the background image using inline style
					style={{
						backgroundImage: `url('${card.badgeSvgPath}')`,
					}}
				>
					{/* Display the badge text directly */}
					{card.badgeText}
				</div>
				{/* --- End Badge --- */}
			</div>

			{/* Rest of the card content */}
			{/* Increased margin-top slightly to account for badge height */}
			<div className="mt-10 mb-4">
				<h3 className="text-5xl font-bold text-gray-800">
					{card.title}
				</h3>
			</div>
			<ul className="small-bullets list-disc list-outside text-left mt-2 space-y-1 text-black font-ghSimple w-full px-12">
				{card.bullets.map((bullet, index) => (
					<li key={index}>{bullet}</li>
				))}
			</ul>
			<hr className="w-full border-black my-1" />
			<div className="text-lg font-semibold text-black font-ghSimple text-wrap px-12 pb-4">
				= {card.footerText}
			</div>
		</article>
	);
}
