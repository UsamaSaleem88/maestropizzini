import React from 'react'

export default function Firstsection() {
    return (
      <div className="w-full flex items-center md:items-start justify-center md:justify-start h-full flex-col md:pl-[60PX] mt-[70px]">
        <h3 className="text-white md:text-[46px] text-[22px] font-bold">Pizza Devlivery</h3>
        <h1 className="text-white md:text-[56px] text-[22px] font-bold">MAESTRO PIZINNI</h1>
        <p className="text-white md:text-[22px] text-[10px] w-[40%] text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          minus ut mollitia error molestiae quia.
        </p>
        <div className="bg-[rgb(255,69,79)] rounded-full flex justify-start md:w-[14%] py-[16px] px-[27px] mt-[20px]">
          <a className="text-white md:text-[14px] text-[10px] font-bold" href="#">
            DELEVERY NOW
          </a>
        </div>
      </div>
    );
}
