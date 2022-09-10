import React from "react";
import Link from "next/link";
import { GiBananaPeeled, GiTomato, GiBroccoli } from "react-icons/gi";
import { AiOutlineRight, AiOutlineHome } from "react-icons/ai";
import { BiDrink } from "react-icons/bi";
import { useStateContext } from "../context/StateContext";

const SideMenu = () => {
  const { setSideMenu } = useStateContext();

  return (
    <div className="side-menu-container">
      <div className="menu-top">
        <h1>MENU</h1>
        <AiOutlineRight onClick={() => setSideMenu(false)} />
      </div>

      <ul className="list-side-menu">
        <Link href="/">
          <li>
            Home <AiOutlineHome />
          </li>
        </Link>
        <Link href="/produtos/frutas">
          <li>
            Frutas <GiBananaPeeled />
          </li>
        </Link>
        <Link href="/produtos/legumes">
          <li>
            Legumes <GiTomato />
          </li>
        </Link>
        <Link href="/produtos/verduras">
          <li>
            Verduras <GiBroccoli />
          </li>
        </Link>
        <Link href="/produtos/bebidas">
          <li>
            bebidas <BiDrink />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideMenu;
