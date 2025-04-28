import React from "react";

export default function OurHistory() {
	return (
		<section
			id="ourHistory"
			className="bg-wheat-light flex flex-col lg:flex-row items-center lg:justify-center lg:gap-[50px] py-[25px] lg:py-[50px]"
		>
			<div className="w-[383px] h-[640px] relative md:w-[702px] md:h-[526px] lg:w-[522px] lg:h-[600px]">
				<img
					src="/decorative/torn-paper-background.png"
					alt=""
					className="pt-[10px] pointer-events-none object-fill w-full h-full mx-auto"
				/>
				<div className="h-[600px] md:h-[574px] absolute top-[40px] left-[50%] ml-[-191.5px] md:ml-[-320px] lg:ml-[-230px] px-[10px] flex flex-col items-center text-brand-blue lg:pt-[10px]">
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
					<p className="text-[18px] leading-[25px] tracking-[0.2px] px-[24px] md:w-[628px] lg:w-[422px]">
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
			<div className="relative">
				<img
					src="/images/franchisee-in-field.jpg"
					alt="male Great Harvest franchisee stands in a field of wheat"
					className="rotate-[-1deg] mt-[30px] h-[252px] w-[352px] md:w-[563px] md:h-[402px] lg:rotate-[2deg] lg:w-[490px] lg:h-[350px] relative"
					style={{
						objectFit: "cover",
						objectPosition: "0 -100px",
					}}
				/>
				<img
					src="/decorative/gold-photo-corner.png"
					alt=""
					className="absolute right-[-1px] top-[24px] lg:top-[34px] lg:rotate-[2deg] lg:right-[-8px]"
					//top right
				/>
				<img
					src="/decorative/gold-photo-corner.png"
					alt=""
					className="absolute left-[-4px] top-[30px] rotate-[-90deg] lg:rotate-[-88deg] lg:top-[20px] lg:left-[2px]"
					//top left
				/>
				<img
					src="/decorative/gold-photo-corner.png"
					alt=""
					className="absolute left-[-1px] bottom-[-6px] rotate-180 lg:rotate-[182deg] lg:left-[-8px] lg:bottom-[4px]"
					//bottom left
				/>
				<img
					src="/decorative/gold-photo-corner.png"
					alt=""
					className="absolute right-[-4px] bottom-[0px] rotate-90 md:right-[-5px] lg:rotate-[92deg] lg:right-[2px] lg:bottom-[-12px]"
					//bottom right
				/>
			</div>
		</section>
	);
}
