import React from "react";
import Image from "next/image";

export default function OurHistory() {
	return (
		<section
			id="ourHistory"
			className="bg-wheat-light"
		>
			<div className="bg-[url(/decorative/torn-paper-background.png)] text-brand-bluept-[10px] px-[10px]">
				<h2 className="text-[48px] text-center mb-[15px]">
					Our History
				</h2>
				<p className="text-[18px] px-[24px]">
					In 1976, Pete and Laura Wakeman opened
					the first Great Harvest in Great Falls,
					Montana after falling in love with “Big
					Sky Country.” They sourced wheat from
					Montana’s family farms and milled it
					fresh each day, laying the foundation
					for the nation’s original bakery café
					concept. <br />
					<br />
					Today, each bakery café continues that
					tradition with a focus on handcrafted
					bread, wholesome food, and authentic
					connections within the communities they
					serve.
				</p>
			</div>
			<Image
				src="/images/franchisee-in-field.jpg"
				alt="male franchisee stands in a field of wheat"
				height={352}
				width={251}
				className="rotate-[-1deg]"
			/>
		</section>
	);
}
