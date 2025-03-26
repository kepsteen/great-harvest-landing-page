import { IoSearch } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";


export default function DesktopNav() {
  return (
    <>
    <div className="hidden lg:flex">
      <ul className="flex items-center gap-x-9">
        <li>
          <div>
            <a className="text-[20px] font-bold flex items-center gap-x-2" href="#" aria-label="Location dropdown" aria-haspopup="true" aria-expanded="false">
              <span>Locations</span>
              <BsChevronDown size={15} />
              {/* once dropdown functionality is included need to update expanded */}
            </a>
          </div>
        </li>
        <li>
          <div>
            <a className="text-[20px] font-bold" href="#" aria-label="Research">Research</a>
          </div>
        </li>
        <li>
          <div>
            <a className="text-[20px] font-bold flex items-center gap-x-2" href="#" aria-label="About Us dropdown"  aria-haspopup="true" aria-expanded="false">
              <span className="text-center">About Us</span>
              <BsChevronDown size={15}/>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a className="text-[20px] font-bold p-5 bg-darkGreen text-white" href="#" aria-label="Ready to Franchise">Ready to Franchise</a>
          </div>
        </li>
      </ul>
      <div className="flex items-center pl-10">
        <button className="cursor-pointer" aria-label="Search">
          <IoSearch size={30} />
        </button>
      </div>
    </div>
    </>
  )
}
