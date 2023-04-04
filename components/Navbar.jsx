import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className={`${open ? "bg-[rgb(34,33,33)]" : "bg-transparent"} pt-2`}>
        <div className="flex justify-between items-center px-[50px] ">
          <div>
            <img src="/img/logo.png" alt="" className="w-[250px] h-[40px] max-md:w-[100px] max-md:h-[27px] " />
          </div>
          <div className="hidden md:flex gap-[20px] font-extrabold text-[18px] text-white mt-6">
            <a href="#">HOME</a>
            <a href="#">MENU</a>
            <a href="#">SHOP</a>
            <a href="#">NEWS</a>
            <a href="#">CONTACT</a>
          </div>
          <div className="block md:hidden" onClick={() => setOpen(!open)}>
            {open === true ? (
              <RxCross1 color="white" size={26} />
            ) : (
              <RxHamburgerMenu color="white" size={26} />
            )}
          </div>
        </div>
        {open && (
          <div className="text-white flex flex-col items-center font-semibold font-[roboto] py-[20px]">
            <a href="#">HOME</a>
            <a href="#">MENU</a>
            <a href="#">SHOP</a>
            <a href="#">NEWS</a>
            <a href="#">CONTACT</a>
          </div>
        )}
      </nav>
    </div>
  );
}
