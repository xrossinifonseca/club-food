import React, { useState } from "react";
import { urlFor } from "../../lib/client";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const Login = ({ banner }) => {
  const { image } = banner;

  const signUpWithLinkedin = () => {
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=true&client_id=${process.env.NEXT_PUBLIC_LINKEDIN_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URL}&scope=r_liteprofile%20r_emailaddress`;
  };

  return (
    <div className="w-full lg:flex p-4  ">
      <div className=" lg:w-1/2  rounded  flex items-center justify-center pb-20 ">
        <img src={urlFor(image)} className="w-1/2 sm:w-[30%] lg:w-1/2" />
        <h1 className="font-bold text-2xl sm:text-3xl">
          Falta pouco para matar sua <span className="text-details">fome!</span>
        </h1>
      </div>
      <div className=" lg:w-1/2 flex items-start justify-center ">
        <div className="relative bg-white w-full h-[400px] flex flex-col items-center justify-center  lg:w-4/5 lg:h-[80%] rounded space-y-4 ">
          <h1 className="absolute top-4 text-xl sm:text-3xl text-gray-700 font-semibold p-4">
            Faça login para continuar
          </h1>

          <button
            type="button"
            onClick={() => signUpWithLinkedin()}
            className="bg-buttonin hover:opacity-80 text-white font-semibold w-[80%] h-10 rounded flex items-center justify-center "
          >
            <AiFillLinkedin className="text-xl " /> Entrar com LinkedIn
          </button>

          <button
            type="button"
            className="bg-details hover:opacity-80 text-white font-semibold w-[80%] h-10 rounded flex items-center justify-center "
          >
            Email
          </button>

          <Link href="/registrar">
            <h3 className="text-gray-500 font-medium lg:cursor-pointer hover:opacity-70">
              Não possui conta?{" "}
              <span className="text-details">Cadastre-se agora!</span>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
