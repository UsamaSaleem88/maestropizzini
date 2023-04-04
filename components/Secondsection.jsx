import React from "react";

export default function Secondsection() {
  return (
    <div className=" max-md:bg-[url('/img/pizza.jpg')] bg-cover bg-no-repeat ">
      <div className="flex md:justify-between justify-center px-[10px] py-[80px] backdrop-blur-sm">
        <div className="md:pl-[50px] max-md:text-center max-md:items-center flex flex-col md:pr-[20px] w-[90%]">
          <h3 className="md:text-[gray] text-black font-bold text-[30px]">
            About Us
          </h3>
          <h1 className="text-[40px] font-bold max-md:text-black max-md:text-[14px]">
            WELCOME TO MAESTRO PIZZINI
          </h1>
          <p className="text-[#8b8b8b] text-[18px] max-md:text-[12px] max-md:text-black ">
            Investigationes demonstraverunt lectores legere me lius quod ii
            legunt saepius. Claritas est etiam processus dynaus, quise sequitur
            mutationem consuetudium lectorum.
          </p>
          <div className="bg-[rgb(255,69,79)] rounded-full flex justify-center md:w-[30%] w-[40%] py-[15px] md:px-[24px] px-[12px] mt-[20px]">
            <a
              className="text-white md:text-[14px] text-[10px] font-bold"
              href="#"
            >
              READ MORE
            </a>
          </div>
        </div>
        <div className="md:block hidden">
          <img src="/img/pizza.jpg" alt="#" />
        </div>
      </div>
    </div>
  );
}
