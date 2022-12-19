import { useRouter } from "next/router";
import React from "react";
import { useStateContext } from "../context/StateContext";
import MenuSection from "../components/MenuSection";

const CheckOut = () => {
  const { cartItems } = useStateContext();
  const router = useRouter();

  return (
    <>
      <section className="w-full flex mt-10">
        <article className="p-2 lg:w-1/2">
          <h1 className="text-center text-gray-500 lg:text-3xl font-medium">
            Finalize seu pedido
          </h1>
        </article>
        <article></article>
      </section>
    </>
  );
};

export default CheckOut;
