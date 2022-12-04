import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import Cart from "./Cart";
import SideMenu from "./SideMenu";

const NavBar = () => {
  const [openSideMenu, setOpenMenu] = useState(false);

  return (
    <nav className="w-full  bg-primary">
      <div className="w-full flex items-center justify-between p-4 ">
        <div
          className="w-14 h-14 bg-white rounded-full flex items-center justify-center lg:cursor-pointer"
          onClick={() => setOpenMenu(true)}
        >
          <AiOutlineMenu className="text-xl text-details" />
        </div>

        <div className="flex text-xl text-details space-x-4">
          <AiOutlineUser />
          <div className="relative">
            <BsBag className="text-xl" />
            <span className="absolute bg-details top-3 left-2  h-4 w-4 text-center text-[12px] text-white rounded-full "></span>
          </div>
        </div>
      </div>
      {openSideMenu && <SideMenu active={setOpenMenu} />}
    </nav>
  );
};

export default NavBar;
