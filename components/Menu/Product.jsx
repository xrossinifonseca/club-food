import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";

const Product = ({ product }) => {
  const { addToCart } = useStateContext();
  return (
    <div className=" w-full  h-32 flex justify-between   items-center lg:flex-col  duration-700 ease-out lg:hover:scale-125  lg:w-[200px] lg:h-[250px]  bg-white rounded-xl  p-2 border-b-2">
      <div className=" flex items-center text-center lg:flex-col   font-semibold space-x-2 ">
        <img src={urlFor(product.image && product.image[0])} className="w-20" />
        <h1 className="text-start ">{product.name}</h1>
      </div>

      <div className="flex flex-col space-y-2">
        <span className="text-details font-bold lg:text-xl mt-4">
          R$ {product.price}
        </span>
        <button
          type="button"
          onClick={() => addToCart(product, 1)}
          className="bg-details text-white rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Product;
