import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Restaurant = () => {
  return (
    <section className="w-full mt-20 flex items-center justify-center text-gray-700">
      <div className="w-full lg:w-4/5 h-40 bg-white rounded-xl p-2">
        <h1 className="font-bold text-details text-2xl text-center">
          INFORMAÇÕES
        </h1>

        <div className="w-full flex justify-between lg:justify-around items-center mt-4">
          <div>
            <h1 className=" text-sm lg:text-xl font-semibold">
              Entre em contato
            </h1>
            <ul className="space-y-2 text-sm mt-2 text-center">
              <li className="flex">
                <AiOutlinePhone /> (21) 9999-9999
              </li>
              <li className="flex">
                <AiOutlineMail /> clubfood@lanche.com
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-sm lg:text-xl font-semibold">
              Horário de funcionamento
            </h1>

            <ul className="space-y-2 text-sm mt-2 text-center">
              <li className="flex">Terça - Sábado</li>
              <li className="flex">18h - 00h</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
