import Image from "next/image"
import { highMapPriority } from "./data/highMapPriority"
import { mediumMapPriority } from "./data/mediumMapPriority"
import { lowMapPriority } from "./data/lowMapPriority"

export default function AvailabilityMapSection() {

  const highPrioStates = highMapPriority.map(( state, index) => (
    <li key={index}>{state}</li>
  ))

  const mediumPrioStates = mediumMapPriority.map((state, index) => (
    <li key={index}>{state}</li>
  ))

    const lowPrioStates = lowMapPriority.map((state, index) => (
    <li key={index}>{state}</li>
  ))


  return (
    <>
    <section className="bg-wheat-extra-light  w-full">
      <div className="flex flex-col gap-y-7.5 py-7.5">
        <div>
          <h1 className="text-[48px] font-medium text-center text-brand-blue drop-shadow-lg pb-[20px]">Ripe for Harvesting</h1>
          <h2 className="text-[20px] px-6 text-center text-brand-blue">
            Which neighborhood will you share Great Harvest with?
          </h2>
        </div>
        <div className="w-full">
        <Image className="mx-auto min-w-[350px] w-5/6" src="/images/map-great-harvest.png" width={350} height={220} alt="available Great Harvest locations" />
        </div>
        <div className="mx-auto grid gap-y-2.5">
          <div className="flex">
            <div className="w-7 h-7 rounded-full bg-wheat-medium mr-2.5"></div>
            <p className="text-lg">High Availability</p>
          </div>
          <div className="flex">
            <div className="w-7 h-7 rounded-full bg-light-tan mr-2.5"></div>
            <p className="text-lg">Mixed Availability</p>
          </div>
          <div className="flex">
            <div className="w-7 h-7 rounded-full bg-wheat-dark mr-2.5"></div>
            <p className="text-lg">Low Availability</p>
          </div>
        </div>
      </div>
    {/* Screen reader only content */}
    <div className="sr-only" aria-label="Priority States for Great Harvest Availability">
      <h3>High Priority States</h3>
      <ul>
        {highPrioStates}
      </ul>

      <h3>Moderate Priority States</h3>
      <ul>
        {mediumPrioStates}
      </ul>

      <h3>Low Priority States</h3>
      <ul>
        {lowPrioStates}
      </ul>
    </div>
    {/* Screen reader only content - Ends Here */}
    </section>
    </>
  )
}
