import React from 'react'

function Thirdsection() {
    return (
      <div
        className="flex justify-center bg-center md:bg-cover py-20 px-10 bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url(/img/bg.jpg)" }}
      >
        <div className="flex flex-col">
          <div className="flex items-center md:items-start">
            <h1 className="text-white font-bold md:text-[40px] text-[18px] text-center md:text-start md:w-[600px]">
              Free Delivery With <br />
              PIZZA OF THE DAY <br /> Only 8.99 USD
            </h1>
          </div>
          <div className="flex justify-center md:justify-start py-4">
            <a className="bg-[rgb(255,69,79)] rounded-full md:text-[14px] text-[10px] text-white font-bold flex justify-center px-5 py-3">
              SHOW MORE
            </a>
          </div>
        </div>

        {/* <div className='mt-[10%] flex flex-col'>
                <div className='flex justify-center '>
                    <h1 className='text-white font-bold text-[40px] w-[40%]'>Free Delivery With PIZZA
                        OF THE DAY Only 8.99 USD</h1>
                </div>
                <div></div>
                <div className='bg-[red] rounded-full flex justify-center w-[12%] mt-[20px] py-[12px] px-[1px]'>
                    <button className='text-white text-[13px]  font-semibold pl-[22px]'>SHOP NOW</button>
                </div>
            </div> */}
      </div>
    );
}

export default Thirdsection
