import React, { useEffect } from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { GoLocation } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
// rolagen react-scroll
import { Link as Scroll } from "react-scroll";
import CepForm from "./CepForm";
import { useStateContext } from "../context/StateContext";

const HeroBanner = ({ heroBanner, search }) => {
  const { image, largeText1, smallText } = heroBanner;

  const {
    addToCart,
    qty,
    showCep,
    setShowCep,
    searchItem,
    setSearchItem,
    info,
    setInfo,
    serchParams,
  } = useStateContext();

  useEffect(() => {
    setInfo(search);
  }, []);
  const searchProduct = (items) => {
    return items.filter((item) => {
      return serchParams.some((newItem) => {
        return (
          item[newItem]
            ?.toString()
            ?.toLowerCase()
            ?.indexOf(searchItem.toLocaleLowerCase()) > -1
        );
      });
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-screen flex items-center justify-around">
      <div className="h-auto ">
        <h1 className="font-bold  text-xl sm:text-4xl lg:text-6xl">
          Não deixe para <br /> <span className="text-details">depois</span> o
          que se <br />
          pode comer <span className="text-details">hoje.</span>
        </h1>

        <div className="flex space-x-2 sm:space-x-4 mt-8">
          <button className="transform  duration-700 ease-out hover:scale-125 bg-details h-10 p-2 text-white font-semibold rounded-full">
            Peça agora
          </button>
          <button className="border transform  duration-700 ease-out hover:scale-125 border-details w-24 h-10 p-2 text-black font-semibold rounded-full">
            Menu
          </button>
        </div>
      </div>

      <img src={urlFor(image)} className="w-1/4" />
    </div>
  );
};

export default HeroBanner;
