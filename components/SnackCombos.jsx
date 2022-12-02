import React from "react";

const SnackCombos = () => {
  return (
    <section className="w-full h-auto mt-20 flex flex-col items-center justify-center p-4">
      <div className=" w-full lg:w-4/5 ">
        <h1 className="text-details  text-xl lg:text-4xl font-bold">
          COMBOS DA SEMANA
        </h1>
      </div>

      <div className="w-full h-auto lg:w-4/5 flex p-2   mt-10 overflow-x-auto overflow-y-hidden space-x-10">
        <div className="min-w-[40%] h-44 flex justify-center bg-white rounded-xl relative">
          <buttom className="absolute -bottom-2 bg-details rounded-full h-10 text-center text-white font-semibold p-2">
            Pedir agora
          </buttom>
        </div>
        <div className="min-w-[40%] h-44 flex justify-center bg-white rounded-xl relative">
          <buttom className="absolute -bottom-2 bg-details rounded-full h-10 text-center text-white font-semibold p-2">
            Pedir agora
          </buttom>
        </div>
        <div className="min-w-[40%] h-44 flex justify-center bg-white rounded-xl relative">
          <buttom className="absolute -bottom-2 bg-details rounded-full h-10 text-center text-white font-semibold p-2">
            Pedir agora
          </buttom>
        </div>
      </div>
    </section>
  );
};

export default SnackCombos;
