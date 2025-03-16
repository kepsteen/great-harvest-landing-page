import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <>
    <nav className="px-5 py-5 lg:px-11 max-w-[1240px] mx-auto" role="navigation" aria-label="Main Navigation">
      <div className="flex justify-between">
        <div className="w-1/3 min-w-[100px] max-w-[160px]">
          <img className="w-full" src="./images/great-harvest-logo.png" alt="Great Harvest Logo" />
        </div>
        <MobileNav />
        <DesktopNav />
      </div>
    </nav>
    </>
  )
}
