import Image from "next/image";

export default function TheProcessSection() {
	return (
		<section
			id="theProcess"
			className="relative w-full bg-[url('/images/GHBC-interior.png')] bg-cover bg-center"
		>
			<div className="py-16 w-full max-w-full mx-auto">
				<div className="container mx-auto px-4 max-w-[350px] md:max-w-[632px] lg:max-w-[735px] text-brand-blue">
					<div className="text-center bg-white/90 shadow-[0px_4px_4px_0px_#00000040] p-[10px]">
						<h2 className="text-4xl md:text-[48px] mb-[20px] font-bold leading-tight">
							Our Revolutionary Process
						</h2>
						<p className="text-[20px] font-ghPlain">
							Since 1976, Great Harvest has set
							the industry standard by providing
							fresh-baked breads, goodies and more
							using only Montana-grown wheat.
						</p>
					</div>
					<div className="flex flex-col items-center gap-[20px] md:flex-row md:gap-[30px] bg-white/90 border border-black shadow-[4px_4px_4px_0px_#00000040] rounded-[20px] p-[20px] lg:px-[40px] mt-[20px] ">
						<ul className="flex flex-col gap-[15px]">
							<li className="flex flex-row items-start gap-[15px]">
								<Image
									src="/icons/mixing-bowl.svg"
									alt=""
									height={40}
									width={40}
									className="mt-2"
								/>
								<div>
									<h3 className="text-[28px] mb-[10px]">
										Week 1-2
									</h3>
									<p className="text-[18px]">
										Discovery call and FDD review
									</p>
								</div>
							</li>
							<li className="flex flex-row items-start gap-[15px]">
								<Image
									src="/icons/oven.svg"
									alt=""
									height={40}
									width={40}
									className="mt-2"
								/>
								<div className="p-0">
									<h3 className="text-[28px] p-0">
										Week 3-4
									</h3>
									<p className="text-[18px]">
										Application
									</p>
								</div>
							</li>
							<li className="flex flex-row items-start gap-[15px]">
								<Image
									src="/icons/bread-loaf.svg"
									alt=""
									height={40}
									width={40}
									className="mt-2"
								/>
								<div>
									<h3 className="text-[28px]">
										Months 2-3
									</h3>
									<p className="text-[18px]">
										Franchise Agreement, Site
										Selection and Development
									</p>
								</div>
							</li>
						</ul>
						<img
							src="/images/southlake-interior.jpg"
							alt="Great Harvest worker wearing a dark t-shirt prepares an item"
							className="w-full md:object-[25%] object-cover rounded-xl md:w-[281px] md:h-[413px] lg:w-[330px] lg:h-[350px]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
