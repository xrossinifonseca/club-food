import React from "react";
import { urlFor } from "../lib/client";
import { AiFillStar } from "react-icons/ai";
const MenuSection = ({ menu }) => {
  const images = [
    "/assets/burguer.png",
    "/assets/pizzaSearch.png",
    "/assets/drinkSearch.png",
    "/assets/friesSearch.png",
  ];

  return (
    <section className="w-full flex flex-col items-center  mt-40 ">
      <div className="bg-white w-[90%] sm:w-[65%] xl:w-1/2 h-[80px] rounded-full shadow-xl flex items-center justify-around">
        {images.map((image) => (
          <>
            <img
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
            className=" w-[150px] transform  duration-700 ease-out hover:scale-125 h-[200px] lg:w-[200px] lg:h-[250px]  bg-white rounded-xl flex flex-col items-center p-2 "
          >
            <img src={urlFor(item.image && item.image[0])} className="w-1/2" />

            <div className="w-full text-start mt-10 font-semibold">
              <h1 className="text-start ">{item.name}</h1>

              <span className="flex items-center text-yellow-500 space-x-1">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>

              <h1 className="text-details mt-4">R$ {item.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
