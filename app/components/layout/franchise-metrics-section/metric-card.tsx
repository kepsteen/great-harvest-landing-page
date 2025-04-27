import Image from "next/image";
import { MetricCardData } from "./metric.interface";

export default function MetricCard({
	card,
}: {
	card: MetricCardData;
}) {
	return (
		<article className="bg-white rounded-xl shadow-2xl text-center w-full max-w-sm mx-auto h-auto py-6 px-4 flex flex-col items-center gap-4">
			<div className="relative inline-block">
				<Image
					src={card.imageSrc}
					alt={card.imageAlt}
					width={216}
					height={216}
					className="mx-auto rounded-full shadow-lg"
				/>
				<div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-[216px] text-center bg-brand-blue text-white px-4 py-2 shadow-lg z-10">
					<h3 className="text-xl font-semibold whitespace-nowrap">
						{card.badgeText}
					</h3>
				</div>
			</div>
			<div className="mt-8">
				<h3 className="text-5xl font-bold text-gray-800">
					{card.title}
				</h3>
			</div>
			<ul className="list-disc list-outside text-left mt-4 space-y-2 text-gray-600 w-full px-12">
				{card.bullets.map((bullet, index) => (
					<li key={index}>{bullet}</li>
				))}
			</ul>
			<hr className="w-full border-black" />
			<div className="text-lg font-semibold text-gray-700 text-wrap px-12">
				= {card.footerText}
			</div>
		</article>
	);
}
