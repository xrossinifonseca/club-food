import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full mt-10  lg:h-24  flex flex-col-reverse lg:flex-row items-center justify-around font-semibold text-gray-600 p-2">
      <h1 className=" text-sm sm:text-lg mt-4 lg:mt-0">
        &copy;Club Food 2022 todos os direitos reservados
      </h1>

      <div className="flex space-x-6 text-sm">
        <h1 className="">Termos de serviços</h1>
        <h1>Politica de privacidade</h1>

        <span className="flex space-x-4 text-xl">
          <AiFillFacebook className="text-blue-900" />
          <AiOutlineTwitter className="text-blue-500" />
          <AiOutlineInstagram className="text-pink-500" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
