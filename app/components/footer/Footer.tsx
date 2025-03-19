import Image from "next/image"

const footerNavOptions: string[] = ["Locations", "Order Catering", "Franchise", "About Us", "Contact Us"]

export default function Footer() {

  const footerNavMap = footerNavOptions.map((footerNavOption, index) => (
    <div key={index}>
      <span className="text-[15px]">{footerNavOption}</span>
    </div>
  ))

  return (
    <>
      <footer className="bg-brandBlue text-white">
        <div className="py-10">
          <div className="flex flex-col gap-y-5 items-center">
            <div className="flex">
              <h1 className="font-bold text-[20px]">Great Harvest</h1>
            </div>
            {footerNavMap}
          </div>
          <div className="flex flex-col items-center">
            <div className="pt-10 gap-y-5 grid grid-rows-2 grid-cols-[50px_auto] items-center">
                <div className="pr-2">
                <Image src="./location-pointer.svg" alt="location pointer" width={46} height={46} />
                </div>
                <div>
                  <h2>28 S Montana Street <br/> Dillon, MT 59725</h2>
                </div>
                <div className="pr-2">
                <Image src="./android-phone.svg" alt="location pointer" width={46} height={46} />
                </div>
                <div>
                  <h2>1.800.442.0424 <br/> 406.683.6842 </h2>
                </div>
            </div>
            <div className="flex justify-center gap-x-5 pt-5">
              <Image src={"./twitter-bird.svg"} alt="twitter bird" width={41} height={41} />
              <Image src={"./facebook-logo.svg"} alt="facebook logo" width={41} height={41} />
              <Image src={"./linkedin-logo.svg"} alt="linkedin logo" width={41} height={41} />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
