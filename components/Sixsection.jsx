import React, { useEffect, useState } from "react";

function Sixsection() {
  const [items,setItems] = useState([]);
  const getData = async () => {
    const response = await fetch(`/api/get-menu-items`).then((res) => res.json()).catch((err) => console.error(err))
    setItems(response.data);
  };

  useEffect(() => {
    getData();
  },[]);
  return (
    <div className="grid grid-cols-3 py-[50px] px-[20px] gap-x-3 max-md:grid-cols-1">
      {items.length &&
        items.map((item) => (
          <div className="flex flex-col items-center" key={item.id}>
            <img
              src={item.image}
              alt="#"
              className="w-[250px] h-[250px]"
            />
            <h1 className="font-bold text-[28px]">{item.name}</h1>
            <p className="text-[18px] text-[#888888] font-normal text-center">
              {item.description}
            </p>
            <p className="font-normal text-[28px]">${item.price}</p>
          </div>
        ))}

      {/* <div className="flex flex-col items-center">
        <img src="/img/pizza2.png" alt="#" className="w-[250px] h-[250px]" />
        <h1 className="font-bold text-[28px]">Pizza Margeritta</h1>
        <p className="text-[18px] text-[#888888] font-normal text-center">
          Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula.
          Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel
          hendrerit dui tempor in.
        </p>
        <p className="font-normal text-[28px]">$90.00</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="/img/pizza3.png" alt="#" className="w-[250px] h-[250px]" />
        <h1 className="font-bold text-[28px]">Pizza Margeritta</h1>
        <p className="text-[18px] text-[#888888] font-normal text-center">
          Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula.
          Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel
          hendrerit dui tempor in.
        </p>
        <p className="font-normal text-[28px]">$80.00</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="/img/pizza4.png" alt="#" className="w-[250px] h-[250px]" />
        <h1 className="font-bold text-[28px]">Pizza Margeritta</h1>
        <p className="text-[18px] text-[#888888] font-normal text-center">
          Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula.
          Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel
          hendrerit dui tempor in.
        </p>
        <p className="font-normal text-[28px]">$70.00</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="/img/pizza5.png" alt="#" className="w-[250px] h-[250px]" />
        <h1 className="font-bold text-[28px]">Pizza Margeritta</h1>
        <p className="text-[18px] text-[#888888] font-normal text-center">
          Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula.
          Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel
          hendrerit dui tempor in.
        </p>
        <p className="font-normal text-[28px]">$30.00</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="/img/pizza6.png" alt="#" className="w-[250px] h-[250px]" />
        <h1 className="font-bold text-[28px]">Pizza Margeritta</h1>
        <p className="text-[18px] text-[#888888] font-normal text-center">
          Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula.
          Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel
          hendrerit dui tempor in.
        </p>
        <p className="font-normal text-[28px]">$22.00</p>
      </div> */}
    </div>
  );
}

export default Sixsection;
