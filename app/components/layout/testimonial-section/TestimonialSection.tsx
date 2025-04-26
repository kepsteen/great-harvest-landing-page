import Image from "next/image"

export default function TestimonialSection() {
  return (
    <>
      <section className="bg-[url(https://imgc.allpostersimages.com/img/posters/karandaev-wood-texture-cutting-board-background_u-l-q1052q40.jpg?artHeight=550&artPerspective=n&artWidth=550&background=ffffff)] pt-10 pb-5">
        <div>
          <h1 className="font-normal text-[48px] text-center">Backed by our Franchisees</h1>
          <div className="bg-white rounded-xl mx-5 px-6 pt-6">
            <div className="mb-2.5">
            <p className="text-[13.5px]">
              “Owning a Great Harvest bakery has been nothing short of transformational—for our family, our team, and our community. What started as a dream to build something meaningful has become a deeply rooted part of our daily lives. The opportunity to blend hand-crafted food with heart-centered service has given us purpose beyond just running a business.  ... The Great Harvest model has given us the tools and freedom to create a bakery that reflects our values—where kindness matters, quality is never compromised, and people genuinely feel at home. We&rsquo;ve built lasting relationships with customers, partnered with local organizations, and created jobs that have helped people grow not just professionally, but personally.”
            </p>
            <div className="py-2.5">
              <h2 className="text-end">Elise, Katie, & Kodiak Smith</h2>
              <p className="text-end">Harvesting in<br />Northwest, Indiana</p>
            </div>
            </div>
            <div className="pb-4">
              <Image className="rounded-full mx-auto" src="/images/franchisees-owner.png" width={290} height={298} alt="Three of Great Harvest franchise owner in Great Harvest apparel" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
