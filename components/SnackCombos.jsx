import React from "react";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const SnackCombos = ({ combos }) => {
  const { addToCart } = useStateContext();

  return (
    <section className="w-full h-auto mt-20 flex flex-col items-center justify-center p-4">
      <div className=" w-full lg:w-4/5 ">
        <h1 className="text-details  text-xl lg:text-4xl font-bold">
          COMBOS DA SEMANA
        </h1>
      </div>

      <div className=" w-full h-auto lg:w-4/5 flex p-4  mt-10 overflow-x-auto overflow-y-hidden space-x-10 ">
        {combos.map((combo) => (
          <div
            className="min-w-full lg:min-w-[40%] h-44 flex items-center justify-around bg-white rounded-xl relative p-2"
            key={combo._id}
          >
            <span>
              <h1 className="font-semibold">{combo.name}</h1>
              <h1 className="text-gray-800 text-sm">{combo.details}</h1>
              <h1 className="font-semibold">
                Total: <span className="text-details">R$ {combo.price}</span>
              </h1>
            </span>
            <img
              src={urlFor(combo.image && combo.image[0])}
              className="w-[30%]"
            />

            <buttom
              className="absolute -bottom-2 bg-details rounded-full h-10 text-center text-white font-semibold p-2"
              onClick={() => addToCart(combo, 1)}
            >
              Pedir agora
            </buttom>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SnackCombos;
