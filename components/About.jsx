import React from "react";

function About() {
  return (
    <div className="">
      <div className="flex justify-center items-center space-x-[30px] py-[140px] px-[30px]">
        <div>
          <img src="/img/pizza.jpg"  alt="#" />
        </div>
        <div>
          <h3 className="md:text-[gray] text-black font-bold md:text-[30px] text-[18px]">
            The Pizza Menu
          </h3>
          <h1 className="md:text-[40px] text-[20px] text-black font-bold">
            CHICAGO THIN CRUST
          </h1>
          <p className="md:text-[#8b8b8b] text-black md:text-[18px] text-[12px] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint eos
            saepe libero, consequatur molestias, corporis ullam totam rem
            assumenda unde, expedita debitis.
          </p>
          <div className="bg-[rgb(255,69,79)] rounded-full flex justify-center md:w-[30%] w-[45%] py-[15px] md:px-[30px] px-[12px] mt-[20px]">
            <a
              className="text-white md:text-[14px] text-[10px] font-bold"
              href="#"
            >
              VIEW MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
