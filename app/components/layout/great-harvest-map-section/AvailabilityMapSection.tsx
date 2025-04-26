import Image from "next/image"

export default function AvailabilityMapSection() {
  return (
    <>
    <section className="bg-wheat-extra-light  w-full">
      <div className="flex flex-col gap-y-7.5 py-7.5">
        <div>
          <h1 className="text-[48px] font-medium text-center text-brand-blue drop-shadow-lg pb-[20px]">Ripe for Harvesting</h1>
          <h2 className="text-[20px] px-6 text-center">
            Which neighborhood will you share Great Harvest with?
          </h2>
        </div>
        <div className="w-full">
        <Image className="mx-auto" src="/images/map-great-harvest.png" width={350} height={220} alt="available Great Harvest locations" />
        </div>
        <div className="mx-auto grid gap-y-2.5">
          <div className="flex">
            <div className="w-7 h-7 rounded-full bg-wheat-medium mr-2.5"></div>
            <p className="text-lg">High Availibality</p>
          </div>
          <div className="flex">
            <div className="w-7 h-7 rounded-full bg-light-tan mr-2.5"></div>
            <p className="text-lg">Mixed Availibality</p>
          </div>
          <div className="flex">
            <div className="w-7 h-7 rounded-full bg-wheat-dark mr-2.5"></div>
            <p className="text-lg">Low Availibality</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
