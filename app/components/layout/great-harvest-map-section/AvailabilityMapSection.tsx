import Image from "next/image"

export default function AvailabilityMapSection() {
  return (
    <>
    <section className="bg-wheat-extra-light flex gap-y-7.5">
      <div className="py-7.5">
        <div>
          <h1 className="text-[48px] font-medium text-center text-brand-blue drop-shadow-lg pb-[20px]">Ripe for Harvesting</h1>
          <h2 className="text-[20px] px-6 text-center">
            Which neighborhood will you share Great Harvest with?
          </h2>
        </div>
        <div>
        <Image src="/images/map-great-harvest.png" width={350} height={220} alt="available Great Harvest locations" />
        </div>
      </div>
    </section>
    </>
  )
}
