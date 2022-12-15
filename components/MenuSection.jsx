import React, { useState } from "react";
import { urlFor } from "../lib/client";
import { AiFillStar } from "react-icons/ai";
import SelectProduct from "./SelectProduct";
import { selectCategory } from "../helpers/categorys";
import { useStateContext } from "../context/StateContext";

const MenuSection = ({ menu }) => {
  const [onSelect, setOnSelect] = useState(false);
  const [product, setProduct] = useState([]);
  const [categoryItems, setCategoryItems] = useState("burgers");
  const { searchItem } = useStateContext();

  const selectProduct = (item) => {
    setProduct(item);
    setOnSelect(true);
  };

  const products = searchItem(menu, categoryItems);

  return (
    <section id="menu" className="w-full flex flex-col items-center  mt-40 ">
      <article className="bg-white w-[90%] sm:w-[65%] xl:w-1/2 h-[80px] rounded-full shadow-xl flex items-center justify-around">
        {selectCategory.map((image) => (
          <img
            key={image.id}
            src={image.image}
            alt="images-menu"
            className="w-[30px] lg:w-[40px]"
            onClick={() => setCategoryItems(image.name)}
          />
        ))}
      </article>

      <article className=" h-auto grid grid-cols-2 sm:grid-cols-3  gap-x-5 lg:gap-x-20 gap-y-10 mt-20">
        {products.map((item) => (
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
      </article>
      {onSelect && <SelectProduct item={setOnSelect} product={product} />}
    </section>
  );
};

export default MenuSection;
