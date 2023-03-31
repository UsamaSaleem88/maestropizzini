import React from 'react'

export default function Firstsection() {
    return (
      <div className="w-full flex justify-start flex-col pl-[60PX] mt-[70px]">
        <h3 className="text-white text-[46px] font-bold">Pizza Devlivery</h3>
        <h1 className="text-white text-[56px] font-bold">MAESTRO PIZINNI</h1>
        <p className="text-white text-[22px] w-[40%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          minus ut mollitia error molestiae quia.
        </p>
        <div className="bg-[rgb(255,69,79)] rounded-full flex justify-start w-[14%] py-[16px] px-[27px] mt-[20px]">
          <a className="text-white text-[14px] font-bold" href="#">
            DELEVERY NOW
          </a>
        </div>
      </div>
    );
}
