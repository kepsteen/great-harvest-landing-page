import Navbar from "../components/navbar/Navbar"
import  './landingPage.css'

export default function LandingPage() {
  return (
    <>
      <div className="landing-section-container" aria-hidden="true">
        <div className="mx-auto lg:mx-0 my-auto w-full lg:w-1/2 flex flex-col gap-y-26">
          <div className="flex flex-col text-center">
            <h1 className="text-[74px] text-cream text-shadow leading-20">Harvest</h1>
            <h1 className="text-[53px] md:text-[74px] text-logoOrange md:text-cream text-shadow">Opportunity</h1>
            <h1 className="text-[74px] text-cream text-shadow leading-20">Today</h1>
          </div>
          <div className="w-full px-1 pb-5 md:px-24">
            <div className="px-3 md:px-5 py-1 md:py-5 rounded-xl bg-lightBeigeOp text-brandBlue font-bold text-xl">
              <h1>Revolutionary Concept</h1>
              <span>Since 1976 Great Harvest has been providing clean, fresh, made-from-scratch products before it was a thing. Because it's always been our thing.</span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}


{/* <svg width="418" height="201" viewBox="0 0 418 201" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="71.6477" width="418" height="128.83" fill="#6C863D"/>
<path d="M208.13 170.835L-0.398932 79.3865L-0.460938 58.3248L419.529 59.3219L419.542 78.3523L208.13 170.835Z" fill="#F5F3F1"/>
<path d="M207.126 155.614L208.129 156.054L209.132 155.615L420.544 63.1323L422.043 62.4765L422.042 60.8402L422.029 41.8098L422.028 39.3174L419.535 39.3115L-0.455002 38.3144L-2.96833 38.3084L-2.96093 40.8218L-2.89892 61.8834L-2.89413 63.5116L-1.40298 64.1656L207.126 155.614Z" fill="#F5F3F1" stroke="#DE6048" stroke-width="5"/>
<path d="M207.126 138.104L208.129 138.544L209.132 138.105L420.544 45.6219L422.043 44.9661L422.042 43.3298L422.029 24.2994L422.028 21.807L419.535 21.801L-0.455002 20.804L-2.96833 20.798L-2.96093 23.3113L-2.89892 44.373L-2.89413 46.0012L-1.40298 46.6551L207.126 138.104Z" fill="#F5F3F1" stroke="#B13C26" stroke-width="5"/>
<path d="M207.126 120.593L208.129 121.033L209.132 120.594L420.544 28.1114L422.043 27.4556L422.042 25.8193L422.029 6.78895L422.028 4.29652L419.535 4.29061L-0.455002 3.29353L-2.96833 3.28756L-2.96093 5.80088L-2.89892 26.8625L-2.89413 28.4907L-1.40298 29.1447L207.126 120.593Z" fill="#F5F3F5" stroke="#0A2240" stroke-width="5"/>
</svg> */}
