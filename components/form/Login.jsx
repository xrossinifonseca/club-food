import React, { useState } from "react";
import { urlFor } from "../../lib/client";
import { useRouter } from "next/router";
import LoginEmail from "./LoginEmail";
const Login = ({ banner }) => {
  const { image } = banner;
  const route = useRouter();

  return (
    <div className="w-full lg:flex p-4  ">
      <article className=" lg:w-1/2  rounded  flex items-center justify-center pb-20 ">
        <img src={urlFor(image)} className="w-1/2 sm:w-[30%] lg:w-1/2" />
        <h1 className="font-bold text-2xl sm:text-3xl">
          Falta pouco para matar sua <span className="text-details">fome!</span>
        </h1>
      </article>
      <article className=" lg:w-1/2 flex items-start justify-center ">
        <div className="relative bg-white w-full h-[400px] sm:w-4/5  lg:h-4/5 flex flex-col items-center justify-center   rounded space-y-4 ">
          <LoginEmail />

          <span className="text-gray-500 font-medium text-center sm:flex ">
            Não possui uma conta?{" "}
            <h2
              className="sm:ml-2 text-details lg:cursor-pointer hover:opacity-70"
              onClick={() => route.push("/registrar")}
            >
              Cadastre-se agora.
            </h2>
          </span>
        </div>
      </article>
    </div>
  );
};

export default Login;
