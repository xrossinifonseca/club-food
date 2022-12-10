import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineArrowLeft,
  AiOutlineClose,
} from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const Cart = ({ active }) => {
  const {
    cartItems,
    totalQuantitites,
    totalPrice,
    onRemove,
    toggleCartItemQuantity,
  } = useStateContext();

  return (
    <aside className="fixed w-screen h-screen   flex justify-end top-0 z-50">
      <div className="p-4 w-full h-full sm:w-1/2 lg:w-1/4  bg-white relative">
        <div className="w-full flex items-center justify-between">
          <button
            type="button"
            className="flex items-center justify-center text-xl font-bold"
            onClick={() => active(false)}
          >
            <AiOutlineArrowLeft />
          </button>

          <span className="text-details font-semibold">
            sua sacola ({totalQuantitites})
          </span>
        </div>

        {cartItems.length < 1 && (
          <div className="mt-10 text-xl text-center">
            <h3>Sua sacola esta vazia</h3>
          </div>
        )}
        <div className="w-full h-[450px] overflow-auto mt-4 space-y-4 ">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div
                className="flex h-auto items-center bg-primary relative p-2"
                key={item._id}
              >
                <img src={urlFor(item?.image[0])} className="w-[20%]" />
                <button
                  type="button"
                  className="absolute top-2 right-2 text-details"
                  onClick={() => onRemove(item)}
                >
                  <AiOutlineClose />
                </button>
                <div className="p-2 space-y-2">
                  <div>
                    <h5 className="font-semibold">{item.name}</h5>
                    <h4 className="text-details font-semibold">
                      R${item.price}
                    </h4>
                  </div>

                  <div className="inline-flex items-center text-[14px]  space-x-2 absolute bottom-2 right-2">
                    <button
                      type="button"
                      onClick={() => toggleCartItemQuantity(item._id, "dec")}
                      className="border border-black h-6 w-6 rounded-full flex justify-center items-center"
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="font-semibold">{item.quantity}x</span>
                    <button
                      type="button"
                      onClick={() => toggleCartItemQuantity(item._id, "inc")}
                      className="border border-details text-details h-6 w-6 rounded-full flex justify-center items-center"
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="w-full absolute bottom-0 left-0">
            <div className="flex justify-between p-4 font-semibold">
              <h3>Subtotal:</h3>
              <h3>R${totalPrice.toFixed(2)} </h3>
            </div>

            <div className="w-full flex justify-center p-2">
              <Link href="/entrar">
                <button
                  type="button"
                  className="bg-details w-3/5 h-8 rounded text-white "
                  onClick={() => active(false)}
                >
                  Formas de pagamentos
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Cart;
