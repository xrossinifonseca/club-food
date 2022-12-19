import React from "react";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const SelectProduct = ({ item, product }) => {
  const { addToCart } = useStateContext();

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen z-50 ">
      <div className="w-full sm:w-3/5  lg:w-1/2 h-4/5 bg-white rounded-xl flex flex-col items-center  relative p-4">
        <img
          src={urlFor(product.image && product.image[0])}
          className="w-[20%]"
        />

        <h1 className="text-3xl font-bold">{product.name}</h1>
        <h1 className="font-bold text-details text-xl">R$ {product.price}</h1>

        <button
          className="bg-details w-1/2 h-10 rounded-xl text-white absolute bottom-4"
          onClick={() => addToCart(product, 1)}
        >
          Adicionar no carrinho
        </button>
      </div>
      <div
        className="absolute h-screen  w-screen bg-black -z-30 opacity-70"
        onClick={() => item(false)}
      ></div>
    </div>
  );
};

export default SelectProduct;
