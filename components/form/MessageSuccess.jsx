import React from "react";
import { useRouter } from "next/router";

const MessageSuccess = () => {
  const router = useRouter();
  return (
    <div className="fixed top-0 flex   justify-center items-center w-screen h-screen z-50 ">
      <div className="w-full sm:w-3/5  lg:w-1/2 h-4/5 bg-white rounded-xl flex flex-col items-center justify-center space-y-4 p-4">
        <img src="/assets/appfood.png" className="w-[20%] mr-4" />
        <h1 className="text-lg font-semibold">
          Cadastro Realizado com Sucesso!
        </h1>
        <p className="text-gray-500 font-medium">Comece a matar sua fome.</p>
        <button
          className="bg-green-700 w-4/5 h-12 font-medium rounded text-white "
          onClick={() => router.push("/entrar")}
        >
          FECHAR
        </button>
      </div>
      <div className="absolute h-screen w-screen bg-black -z-30 opacity-70"></div>
    </div>
  );
};

export default MessageSuccess;
