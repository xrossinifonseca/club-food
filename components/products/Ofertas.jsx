import React from "react";
import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";

import Link from "next/link";

const Ofertas = ({ ofertas }) => {
  const { image, details, price, name, slug } = ofertas;
  const { addToCart, qty } = useStateContext();

  return (
    <div
      className={`min-w-[240px] lg:w-[240px] h-[285px] bg-details-card rounded-xl m-2  flex flex-col items-center justify-center ${
        name === "Tomate c/ Bacon" && "bg-details"
      }`}
    >
      <img src={urlFor(image && image[0])} className="w-[60%]" />

      <div className="w-full p-2 mt-4 ">
        <h1 className="text-black font-semibold "> {name}</h1>
        <p className="text-gray-500">{details}</p>
        <h1 className="text-details text-lg">R${price}</h1>
      </div>
    </div>
  );
};

export default Ofertas;
