import React from 'react'

export default function Secondsection() {
    return (
      <div className="flex justify-between px-[10px] py-[80px]">
        <div className="pl-[50px] pr-[20px] w-[90%]">
          <h3 className="text-[gray] font-bold text-[30px]">About Us</h3>
          <h1 className="text-[40px] font-bold">WELCOME TO MAESTRO PIZZINI</h1>
          <p className="text-[#8b8b8b] text-[18px] ">
            Investigationes demonstraverunt lectores legere me lius quod ii
            legunt saepius. Claritas est etiam processus dynaus, quise sequitur
            mutationem consuetudium lectorum.
          </p>
          <div className="bg-[rgb(255,69,79)] rounded-full flex justify-start w-[30%] py-[15px] px-[30px] mt-[20px]">
            <a className="text-white text-[14px] font-semibold " href="#">
              READ MORE
            </a>
          </div>
        </div>
        <div className="w-[]">
          <img src="/img/pizza.jpg" alt="#" />
        </div>
      </div>
    );
}
