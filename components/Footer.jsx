import React from "react";

function Footer() {
  return (
    <div className="bg-[rgb(34,33,33)] grid grid-cols-3 py-[60px] max-md:grid-cols-1 max-md:gap-y-[20px]">
      <div className="flex flex-col items-center">
        <h4 className="text-[1max] text-[14px] text-white font-semibold	font-[roboto]">
          DOWNLOAD OUR APP
        </h4>
        <p className="text-[1max] text-[14px] leading-4 text-white font-semibold text-center">
          Download App for Android and <br /> IOS mobile phone
        </p>

        <div className="grid mt-2.5 gap-y-[10px] max-md:place-items-center">
          <img
            className="w-[10vmax] max-md:w-[25%]"
            src={
              "https://ecommerce-afzalimdad9.netlify.app/static/media/playstore.82b4831979e0ce7c733e.png"
            }
            alt="playstore"
          />
          <img
            className="w-[10vmax] max-md:w-[25%] "
            src={
              "https://ecommerce-afzalimdad9.netlify.app/static/media/Appstore.d0c5839937e3c36285f6.png"
            }
            alt="Appstore"
          />
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-[3vmax] font-[roboto] text-[#eb4034] font-semibold">
          MAESTRO PIZINNI.
        </h1>
        <p className="text-white text-[14px]">
          High Quality is our first priority
        </p>
        <p className="text-white text-[16px]">
          Copyrights {new Date().getFullYear()} © Usama
        </p>
      </div>

      <div className="text-white flex flex-col items-center justify-center">
        <p>Follow Us</p>
        <a href="https://www.instagram.com/" target="_blank">
          Instagram
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          Youtube
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          Facebook
        </a>
      </div>
    </div>
  );
}

export default Footer;
