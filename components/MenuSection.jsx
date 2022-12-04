import React, { useState } from "react";
import { urlFor } from "../lib/client";
import { AiFillStar } from "react-icons/ai";
import SelectProduct from "./SelectProduct";
const MenuSection = ({ menu }) => {
  const [onSelect, setOnSelect] = useState(false);
  const [product, setProduct] = useState([]);

  const images = [
    "/assets/burguer.png",
    "/assets/pizzaSearch.png",
    "/assets/drink.png",
    "/assets/friesSearch.png",
  ];

  const selectProduct = (item) => {
    setProduct(item);
    setOnSelect(true);
  };

  return (
    <section className="w-full flex flex-col items-center  mt-40 ">
      <div className="bg-white w-[90%] sm:w-[65%] xl:w-1/2 h-[80px] rounded-full shadow-xl flex items-center justify-around">
        {images.map((image) => (
          <>
            <img
              key={image}
              src={image}
              alt="images-menu"
              className="w-[30px] lg:w-[40px]"
            />
          </>
        ))}
      </div>

      <div className=" h-auto grid grid-cols-2 sm:grid-cols-3  gap-x-5 lg:gap-x-20 gap-y-10 mt-20">
        {menu.map((item) => (
          <div
            key={item._id}
            className=" w-[150px]  duration-700 ease-out lg:hover:scale-125 h-[200px] lg:w-[200px] lg:h-[250px]  bg-white rounded-xl flex flex-col items-center p-2 "
            onClick={() => selectProduct(item)}
          >
            <img src={urlFor(item.image && item.image[0])} className="w-1/2" />

            <div className="w-full text-center mt-2 font-semibold ">
              <h1 className="text-start ">{item.name}</h1>

              <span className="flex items-center text-yellow-500 space-x-1">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>

              <h1 className="text-details font-bold lg:text-xl mt-4">
                R$ {item.price}
              </h1>
            </div>
          </div>
        ))}
      </div>
      {onSelect && <SelectProduct item={setOnSelect} product={product} />}
    </section>
  );
};

export default MenuSection;
