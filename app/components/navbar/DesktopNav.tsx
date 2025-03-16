import { IoSearch } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";


export default function DesktopNav() {
  return (
    <>
    <div className="hidden lg:flex">
      <ul className="flex items-center gap-x-10">
        <li>
          <div>
            <a className="text-[20px] font-bold flex items-center gap-x-2">
              <span>Locations</span>
              <BsChevronDown size={15}/>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a className="text-[20px] font-bold">Research</a>
          </div>
        </li>
        <li>
          <div>
            <a className="text-[20px] font-bold flex items-center gap-x-2">
              <span>About Us</span>
              <BsChevronDown size={15}/>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a className="text-[20px] font-bold p-5">Ready to Franchise</a>
          </div>
        </li>

      </ul>
      <div className="flex items-center pl-10">
        <IoSearch size={30} />
      </div>
    </div>
    </>
  )
}
