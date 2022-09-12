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
    <div className="hero-banner-container">
      <div className="hero-banner">
        <h1>{heroBanner.largeText1}</h1>

        <form onSubmit={handleChange} className="search">
          <input
            type="text"
            placeholder="buscar produto"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <AiOutlineSearch className="icon-search" />
        </form>
        {searchItem.length >= 1 && (
          <div className="search-container">
            <p>
              produtos para <span>{searchItem}</span>
            </p>
            {searchProduct(info).map((item) => (
              <div key={item._id}>
                <div className="search-product">
                  <img src={urlFor(item.image[0])} className="search-image" />
                  <h3>{item.name}</h3>
                  <p>R$ {item.price}</p>
                </div>
                <button
                  className="btn-search"
                  onClick={() => addToCart(item, qty)}
                >
                  adiconar
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="hero-desc">
          <h3>Seu hortifruti online.</h3>
          <h4>{heroBanner.desc}</h4>
          <h5>{heroBanner.smallText}</h5>

          <Scroll to="cardshop" smooth={true} duration={500}>
            <button type="button" className="btn">
              Shop
            </button>
          </Scroll>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-icon">
          <p onClick={() => setShowCep(true)}>
            Informe seu CEP <GoLocation size={20} />
          </p>
        </div>
        <img
          src={urlFor(heroBanner.image)}
          className="hero-image"
          alt="cart-logo"
        />
      </div>

      {showCep && <CepForm active={() => setShowCep(false)} />}
    </div>
  );
};

export default HeroBanner;
