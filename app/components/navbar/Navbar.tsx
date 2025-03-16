import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";




export default function Navbar() {
  return (
    <>
    <nav className="p-5">
      <div className="flex justify-between">
        <div className="w-1/3 min-w-[100px]">
          <img className="w-full" src="./images/great-harvest-logo.png" />
        </div>
        <div className="flex items-center gap-x-6">
          <div>
            <IoSearch size={27}/>
          </div>
          <div>
            <RxHamburgerMenu size={27} />
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
