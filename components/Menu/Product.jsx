import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { urlFor } from "../../lib/client";
import { BsFillBagPlusFill } from "react-icons/bs";
import { useStateContext } from "../../context/StateContext";
const Product = ({ product }) => {
  const { addToCart } = useStateContext();
  return (
    <div className=" w-full  h-32 flex justify-between duration-700 ease-out lg:hover:scale-110 items-center lg:flex-col  lg:w-[200px] lg:h-auto  bg-white rounded-xl  p-2 border-b-2">
      <img src={urlFor(product.image && product.image[0])} className="w-20" />
      <div className=" flex items-center text-center flex-col font-semibold  ">
        <h1 className="text-start ">{product.name}</h1>
        <span className="flex items-center text-yellow-500 space-x-1">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <span className="text-details font-medium mt-4">
          R$ {product.price}
        </span>
        <BsFillBagPlusFill
          className="text-green-500 text-xl lg:cursor-pointer"
          onClick={() => addToCart(product, 1)}
        />
      </div>
    </div>
  );
};

export default Product;
