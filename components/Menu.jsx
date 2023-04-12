import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

function Menu() {
  const [items, setItems] = useState([]);
  const getData = async () => {
    const response = await fetch(`/api/get-menu-items`)
      .then((res) => res.json())
      .catch((err) => console.error(err));
    setItems(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-y-[20px] pb-[40px] max-md:grid-cols-1">
      {items.length &&
        items.map((item) => (
          <div className="flex flex-col items-center">
            <img src={item.image} className="w-[250px] h-[250px]" alt="#" />
            <h4 className="font-bold text-white">{item.name}</h4>
            <p className="text-[rgb(255,69,79)] text-[12px] font-bold">
              ${item.price}
            </p>
            <p className="text-[12px] text-[white] text-center">
              {item.description}
            </p>
            <a href="#" className="text-[24px]">
              <AiFillPlusCircle color="rgb(255,69,79)" />
            </a>
          </div>
        ))}

      {/* <div className="flex flex-col items-center">
        <img src="/img/zinger.png" className="w-[250px] h-[200px]" alt="#" />
        <h4 className="font-bold text-white ">Chicken Burger</h4>
        <p className="text-[rgb(255,69,79)] text-[12px] font-bold">$4.50</p>
        <p className="text-[12px] text-[white] text-center">
          Lorem ipsum dolor sit amet consectetur,
          <br /> adipisicing elit. Saepe, maxime.
        </p>
        <a href="#" className="text-[24px]">
          <AiFillPlusCircle color="rgb(255,69,79)" />
        </a>
      </div>

      <div className="flex flex-col items-center">
        <img src="/img/zinger.png" className="w-[250px] h-[200px]" alt="#" />
        <h4 className="font-bold text-white">Chicken Burger</h4>
        <p className="text-[rgb(255,69,79)] text-[12px] font-bold">$4.50</p>
        <p className="text-[12px] text-[white] text-center">
          Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
          Saepe, maxime.
        </p>
        <a href="#" className="text-[24px]">
          <AiFillPlusCircle color="rgb(255,69,79)" />
        </a>
      </div>

      <div className="flex flex-col items-center">
        <img src="/img/zinger.png" className="w-[250px] h-[200px]" alt="#" />
        <h4 className="font-bold text-white">Chicken Burger</h4>
        <p className="text-[rgb(255,69,79)] text-[12px] font-bold">$4.50</p>
        <p className="text-[12px] text-[white] text-center">
          Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
          Saepe, maxime.
        </p>
        <a href="#" className="text-[24px]">
          <AiFillPlusCircle color="rgb(255,69,79)" />
        </a>
      </div>

      <div className="flex flex-col items-center">
        <img src="/img/zinger.png" className="w-[250px] h-[200px]" alt="#" />
        <h4 className="font-bold text-white">Chicken Burger</h4>
        <p className="text-[rgb(255,69,79)] text-[12px] font-bold">$4.50</p>
        <p className="text-[12px] text-[white] text-center">
          Lorem ipsum dolor sit amet consectetur,
          <br /> adipisicing elit. Saepe, maxime.
        </p>
        <a href="#" className="text-[24px]">
          <AiFillPlusCircle color="rgb(255,69,79)" />
        </a>
      </div>

      <div className="flex flex-col items-center">
        <img src="/img/zinger.png" className="w-[250px] h-[200px]" alt="#" />
        <h4 className="font-bold text-white">Chicken Burger</h4>
        <p className="text-[rgb(255,69,79)] text-[12px] font-bold">$4.50</p>
        <p className="text-[12px] text-[white] text-center">
          Lorem ipsum dolor sit amet consectetur,
          <br /> adipisicing elit. Saepe, maxime.
        </p>
        <a href="#" className="text-[24px]">
          <AiFillPlusCircle color="rgb(255,69,79)" />
        </a>
      </div> */}
    </div>
  );
}

export default Menu;
