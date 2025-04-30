import Image from "next/image";

export default function TheProcessSection() {
	return (
		<section
			id="theProcess"
			className="relative w-full bg-[url('/images/GHBC-interior.png')] bg-cover bg-center"
		>
			<div className="py-16 w-full max-w-full mx-auto">
				<div className="container mx-auto px-4 max-w-[342px] md:max-w-[632px] lg:max-w-[735px] text-brand-blue">
					<div className="text-center bg-white shadow-[0px_4px_4px_0px_#00000040] p-[10px]">
						<h2 className="text-[48px] mb-[20px] font-bold">
							Our Revolutionary Process
						</h2>
						<p className="text-[20px] font-ghPlain">
							Since 1976, Great Harvest has set
							the industry standard by providing
							fresh-baked breads, goodies and more
							using only Montana-grown wheat.
						</p>
					</div>
					<div className="flex flex-col md:flex-row md:gap-[30px] bg-white shadow-[4px_4px_4px_0px_#00000040] rounded-[20px] p-[20px] lg:px-[40px] mt-[20px] ">
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
						<div className="relative mt-[30px] hidden md:block w-full h-auto md:max-w-[281px]">
							<Image
								src="/images/southlake-interior.jpg"
								alt="Great Harvest worker wearing a dark t-shirt prepares an item"
								fill
								objectFit="cover"
								className="shadow-[4px_4px_4px_0px_#00000040]"
							/>
						</div>
					</div>
					<Image
						src="/images/southlake-interior.jpg"
						alt="Great Harvest worker wearing a dark t-shirt prepares an item"
						width={0}
						height={0}
						style={{
							width: "100%",
							height: "auto",
						}}
						className="shadow-[4px_4px_4px_0px_#00000040] mt-[30px] md:hidden"
					/>
				</div>
			</div>
		</section>
	);
}
