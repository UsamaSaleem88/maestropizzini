import React from "react";

function Fourthsection() {
  return (
    <div className="max-md:bg-[url('/img/pizza.jpg')]  bg-cover bg-no-repeat ">
      <div className="flex justify-center md:justify-between px-[10px] py-[80px] backdrop-blur-sm">
        <div className="max-md:hidden">
          <img src="/img/pizza.jpg" alt="#" />
        </div>

        <div className="md:pl-[50px] md:pr-[20px] w-[90%] max-md:text-center max-md:items-center flex flex-col">
          <h3 className="md:text-[gray] text-white font-bold md:text-[30px] text-[18px]">
            The Pizza Menu
          </h3>
          <h1 className="md:text-[40px] text-[20px] text-white font-bold">
            CHICAGO THIN CRUST
          </h1>
          <p className="md:text-[#8b8b8b] text-white md:text-[18px] text-[12px] ">
            Investigationes demonstraverunt lectores legere me lius quod ii
            legunt saepius. Claritas est etiam processus dynaus, quise sequitur
            mutationem consuetudium lectorum.
          </p>
          <div className="bg-[rgb(255,69,79)] rounded-full flex justify-center md:w-[30%] w-[60%] py-[15px] md:px-[30px] px-[12px] mt-[20px]">
            <a className="text-white text-[14px] font-normal" href="#">
              View MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourthsection;
