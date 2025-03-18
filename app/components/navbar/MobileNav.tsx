import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";



export default function MobileNav() {
  return (
    <>
    <div className="flex items-center gap-x-6 lg:hidden">
      <div>
        <button aria-label="Search">
          <IoSearch size={27} color='#0A2240'/>
        </button>
      </div>
      <div>
        <button aria-label="Open mobile menu">
          <RxHamburgerMenu size={27} color='#0A2240'/>
        </button>
      </div>
    </div>
    </>
  )
}
