import React from "react";
import Image from "next/image";

export default function OurHistory() {
	return (
		<section
			id="ourHistory"
			className="bg-wheat-light flex flex-col items-center py-[25px]"
		>
			<div className="bg-[url(/decorative/torn-paper-background.png)] bg-cover text-brand-blue pt-[10px]">
				<div className="h-[600px] px-[10px] pt-[40px]">
					<img
						src="/decorative/wheat-mobile.png"
						alt=""
						className="h-[120px] w-full"
						style={{ objectFit: "contain" }}
					/>
					<h2 className="text-[48px] text-center mb-[15px]">
						Our History
					</h2>
					<p className="text-[18px] leading-[25px] tracking-[0.2px] px-[24px]">
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
