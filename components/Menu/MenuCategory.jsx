import React, { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import Product from "./Product";
import { selectCategory } from "../../helpers/categorys";
import { urlFor } from "../../lib/client";

const MenuCategory = ({ items }) => {
  const { searchItem } = useStateContext();
  const [categoryItems, setCategoryItems] = useState("burgers");

  const products = searchItem(items, categoryItems);

  return (
    <section className="w-full flex flex-col items-center">
      <article className="w-full  flex  sm:justify-center space-x-5 overflow-x-auto p-2">
        {selectCategory.map((item) => (
          <div
            key={item.id}
            className={`min-w-[100px] min-h-[100px] text-details bg-white rounded-xl flex flex-col items-center justify-center  ${
              item.name === categoryItems && "bg-details text-white"
            } lg:cursor-pointer`}
            onClick={() => setCategoryItems(item.name)}
          >
            <img src={item.image} className="w-1/4" />
            <h1 className="font-medium">{item.name}</h1>
          </div>
        ))}
      </article>

      <div className="w-full sm:w-3/5  lg:w-[500px]  sm:flex justify-center mt-5 p-2">
        <input
          type="text"
          placeholder="Digite seu lanche"
          className="w-full  p-2 focus:outline-none h-14 rounded-lg "
        />
      </div>

      <article className="w-full sm:w-3/5  lg:w-auto mt-5 ">
        <div className="w-full h-auto  lg:grid grid-cols-4 gap-x-4 lg:gap-x-10 mt-5 ">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default MenuCategory;
