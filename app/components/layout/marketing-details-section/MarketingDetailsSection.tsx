import Image from "next/image"
import './marketing-details-section.css'

interface MarketingCard {
  icon: string;
  alt: string;
  title: string;
  passage: string;
}

const MarketingCardArr: MarketingCard[] = [
 {
  icon: '/man-presenting.svg',
  alt: 'figure presenting',
  title: 'Dedicated Training and Development Specialist',
  passage: 'From inital converstations and info sharing right through the training process and ultimately grand opening, Great Harvest team members are by your side through it all.'
 },
 {
  icon: './mini-bakery.svg',
  alt: 'mini bakery',
  title: 'Hub and Spoke Bakery Café models',
  passage: 'Whether you are interested in one store, the standard hub and two spokes, or building a bigger Great Harvest empire, our team is ready to get you setup for success with proven methods and processes that will help ensure a smooth entry into the Great Harvest franchise world.'
 },
 {
  icon: './lightbulb.svg',
    alt: 'lightbulb',
  title: 'Marketing Strategies',
  passage: 'Our marketing pros will help guide you through all phases of marketing. From hyper local to nationwide branding, we will be there to drive business to your Great Harvest!'
 }
]

export default function MarketingDetailsSection() {
  return (
    <>
      <section className="bg-brandBlue text-white">
        <div className="flex flex-col marketing-section w-full">
          <div className="flex justify-center w-full py-8">
            <picture className="h-[149px]">
              <source media="(min-width: 768px)" srcSet="/images/tablet-watering-cans.png" />
            <Image
              src='/images/mobile-watering-cans.png'
              alt="two watering cans"
              width={312}
              height={149}
              className="h-full object-contain"
            />
            </picture>
          </div>
          <div className="px-5">
            <h1 className="text-[48px] text-center">Let&apos;s Make BREAD together!</h1>
          </div>
          <div className="px-6 pt-6.5 text-[28px] flex justify-center text-center">
            <p>Our team is dedicated to getting you open quickly and efficiently</p>
          </div>
          <div className="pb-10">
            <ul className="md:flex lg:mx-auto lg:max-w-[1024px]">
            {MarketingCardArr.map((marketingCard, index) => (
              <li key={index} className='pt-12 md:w-1/3'>
                <div className="flex justify-center">
                  <Image src={marketingCard.icon} alt={marketingCard.alt} width={61} height={61} />
                </div>
                <h1 className="text-[20px] px-10 md:px-5 lg:px-10 py-4 text-center">{marketingCard.title}</h1>
                <div className="px-5">
                  <p className="text-[18px]">{marketingCard.passage}</p>
                </div>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
