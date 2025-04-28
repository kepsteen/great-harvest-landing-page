import React from "react";
import Image from "next/image";

export default function OurHistory() {
	return (
		<section
			id="ourHistory"
			className="bg-wheat-light flex flex-col items-center py-[25px]"
		>
			<div className="w-[383px] h-[640px] relative md:w-[702px] md:h-[526px]">
				<img
					src="/decorative/torn-paper-background.png"
					alt=""
					className="pt-[10px] pointer-events-none object-fill w-full h-full  mx-auto"
				/>
				<div className="h-[600px] md:h-[574px] absolute top-[40px] left-[50%] ml-[-191.5px] md:ml-[-320px] px-[10px] flex flex-col items-center text-brand-blue">
					<img
						src="/decorative/wheat-mobile.png"
						alt=""
						className="h-[120px] w-full md:hidden"
						style={{ objectFit: "contain" }}
					/>
					<img
						src="/decorative/wheat-large.png"
						alt=""
						className="hidden md:block md:w-full md:h-[120px]"
						style={{ objectFit: "contain" }}
					/>
					<h2 className="text-[48px] text-center mb-[15px]">
						Our History
					</h2>
					<p className="text-[18px] leading-[25px] tracking-[0.2px] px-[24px] md:w-[628px]">
						In 1976, Pete and Laura Wakeman opened
						the first Great Harvest in Great
						Falls, Montana after falling in love
						with “Big Sky Country.” They sourced
						wheat from Montana’s family farms and
						milled it fresh each day, laying the
						foundation for the nation’s original
						bakery café concept. <br />
						<br />
						Today, each bakery café continues that
						tradition with a focus on handcrafted
						bread, wholesome food, and authentic
						connections within the communities
						they serve.
					</p>
				</div>
			</div>
			<img
				src="/images/franchisee-in-field.jpg"
				alt="male Great Harvest franchisee stands in a field of wheat"
				className="rotate-[-1deg] mt-[30px] h-[252px] w-[352px]"
				style={{
					objectFit: "cover",
					objectPosition: "0 -100px",
				}}
			/>
		</section>
	);
}
