export default function ContactSection() {
	return (
		<section className="bg-darkGreen py-[30px] px-[20px] flex flex-col items-center gap-[40px] w-full md:hidden">
			<h2 className="text-center text-[3rem] w-full leading-snug">
				Contact Us and Let&apos;s Make Some Bread
				together!
			</h2>
			<div className="w-full flex flex-col md:flex-row gap-8">
				<section className="w-full">
					<h3 className="py-[10px] text-[28px] text-primary">
						Personal Information
					</h3>
					<div className="flex flex-col gap-[20px]">
						<div className="w-full h-[36px] border bg-cream"></div>
						<div className="w-full h-[36px] border bg-cream"></div>
						<div className="w-full h-[36px] border bg-cream"></div>
						<div className="w-full h-[36px] border bg-cream"></div>
						<div className="w-full h-[36px] border bg-cream"></div>
					</div>
				</section>
				<section className="w-full">
					<h3 className="py-[10px] text-[28px] text-primary">
						Additional Information
					</h3>
					<div className="flex flex-col gap-[20px]">
						<div className="w-full h-[36px] border bg-cream"></div>
						<div className="w-full h-[36px] border bg-cream"></div>
						<div className="w-full h-[36px] border bg-cream"></div>
						<div className="w-full h-[36px] border bg-cream"></div>
						<div className="w-full h-[36px] border bg-cream"></div>
					</div>
				</section>
			</div>
			<button className="cursor-pointer rounded-full w-[236px] bg-cream text-[20px] text-primary py-4 px-[84px] font-bold">
				Submit
			</button>
		</section>
	);
}
