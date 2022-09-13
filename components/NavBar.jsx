import React, { useEffect } from "react";
import { GiOrange } from "react-icons/gi";
import { BsCart4 } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import Cart from "./Cart";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import SideMenu from "./SideMenu";
import CepForm from "./CepForm";

const NavBar = () => {
  const {
    showCart,
    setShowCart,
    totalQuantitites,
    sideMenu,
    setSideMenu,
    showCep,
    setShowCep,
  } = useStateContext();

  return (
    <div className="navbar-container">
      <Link href="/">
        <div>
          <GiOrange size={30} className="nav-icon" />
        </div>
      </Link>

      <ul className="list">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/produtos/frutas">
          <li>Frutas</li>
        </Link>
        <Link href="/produtos/legumes">
          <li>Legumes</li>
        </Link>
        <Link href="/produtos/verduras">
          <li>Verduras</li>
        </Link>
        <Link href="/produtos/bebidas">
          <li>bebidas</li>
        </Link>
      </ul>

      <div className="side-menu">
        <BiFoodMenu className="menu-icon" onClick={() => setSideMenu(true)} />
        <GoLocation className="cep-icon" onClick={() => setShowCep(true)} />
      </div>

      <div className="cart">
        <BsCart4 size={30} onClick={() => setShowCart(true)} />
        <span className="cart-item-qty">{totalQuantitites}</span>
      </div>

      {showCart && <Cart />}
      {sideMenu && <SideMenu />}
      {showCep && <CepForm />}
    </div>
  );
};

export default NavBar;
