import Image from "next/image";
import { highMapPriority } from "./data/highMapPriority";
import { mediumMapPriority } from "./data/mediumMapPriority";
import { lowMapPriority } from "./data/lowMapPriority";

export default function AvailabilityMapSection() {
	const highPrioStates = highMapPriority.map(
		(state, index) => <li key={index}>{state}</li>
	);

	const mediumPrioStates = mediumMapPriority.map(
		(state, index) => <li key={index}>{state}</li>
	);

	const lowPrioStates = lowMapPriority.map(
		(state, index) => <li key={index}>{state}</li>
	);

	return (
		<>
			<section className="bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('/images/wheat-silo.jpg')] bg-no-repeat bg-[left_25%_top_10%] bg-cover w-full">
				<div className="flex flex-col gap-y-7.5 py-7.5">
					<div>
						<h2 className="text-[48px] font-bold text-center text-brand-blue drop-shadow-lg pb-[20px]">
							Ripe for Harvesting
						</h2>
						<p className="text-[20px] px-6 text-center font-ghPlain text-brand-blue">
							Which neighborhood will you share
							Great Harvest with?
						</p>
					<div className="hidden mx-auto lg:flex py-7.5">
						<div className="flex">
							<div className="w-7 h-7 rounded-full bg-white bg-cover mr-2.5"></div>
							<p className="text-lg font-ghSimpleBold">
								High Availability
							</p>
						</div>
						<div className="flex">
							<div className="w-7 h-7 rounded-full bg-[url('/decorative/dots.png')] bg-cover mr-2.5"></div>
							<p className="text-lg font-ghSimpleBold">
								Mixed Availability
							</p>
						</div>
						<div className="flex">
							<div className="w-7 h-7 rounded-full bg-brand-blue mr-2.5"></div>
							<p className="text-lg font-ghSimpleBold">
								Low Availability
							</p>
						</div>
					</div>
					</div>
					<div className="w-full">
						<Image
							className="mx-auto min-w-[350px] w-5/6"
							src="/images/updated-map.png"
							width={350}
							height={220}
							alt="map of available Great Harvest locations"
						/>
					</div>
					<div className="mx-auto grid gap-y-2.5 lg:hidden">
						<div className="flex">
							<div className="w-7 h-7 rounded-full bg-white bg-cover mr-2.5"></div>
							<p className="text-lg font-ghSimpleBold">
								High Availability
							</p>
						</div>
						<div className="flex">
							<div className="w-7 h-7 rounded-full bg-[url('/decorative/dots.png')] bg-cover mr-2.5"></div>
							<p className="text-lg font-ghSimpleBold">
								Mixed Availability
							</p>
						</div>
						<div className="flex">
							<div className="w-7 h-7 rounded-full bg-brand-blue mr-2.5"></div>
							<p className="text-lg font-ghSimpleBold">
								Low Availability
							</p>
						</div>
					</div>
				</div>
				{/* Screen reader only content */}
				<div
					className="sr-only"
					aria-label="Priority States for Great Harvest Availability"
				>
					<h3>High Priority States</h3>
					<ul>{highPrioStates}</ul>

					<h3>Moderate Priority States</h3>
					<ul>{mediumPrioStates}</ul>

					<h3>Low Priority States</h3>
					<ul>{lowPrioStates}</ul>
				</div>
				{/* Screen reader only content - Ends Here */}
			</section>
		</>
	);
}
