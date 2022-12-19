import React from "react";
import { iconsFood, selectCategory } from "../helpers/categorys";

const MenuSection = () => {
  return (
    <section id="menu" className="w-full flex flex-col items-center  mt-40 ">
      <article className="bg-white w-[90%] sm:w-[65%] xl:w-1/2 h-[80px] rounded-full shadow-xl flex items-center justify-around">
        {iconsFood.map((image) => (
          <img
            key={image.id}
            src={image.image}
            alt="images-menu"
            className="w-[30px] lg:w-[40px]"
          />
        ))}
      </article>

      <article className="w-full sm:w-3/5 xl:w-2/5  h-auto grid grid-cols-2 justify-items-center gap-y-4 gap-x-4 mt-10 p-2 ">
        {selectCategory.map((category) => (
          <div
            key={category.id}
            className={`w-full h-[150px] duration-700 ease-out lg:hover:scale-110 rounded-lg ${category.style}  sm:p-2 `}
          >
            <h1 className="text-white font-bold text-xl lg:text-2xl text-center ">
              {category.name}
            </h1>
            <div className="w-full flex flex-col sm:flex-row-reverse items-center sm:justify-around mt-4 ">
              <img src={category.image} className=" w-[70px] lg:w-[100px]" />
              <button
                type="button"
                className="hidden sm:block  w-24 rounded-full border border-white text-white "
              >
                Ver menu
              </button>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default MenuSection;
