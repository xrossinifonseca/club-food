import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiHamburger } from "react-icons/gi";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SideMenu = ({ active }) => {
  const { data: session } = useSession();

  const closeMenu = () => {
    active(false);
  };
  const router = useRouter();

  return (
    <aside
      className="fixed top-0 left-0 w-screen h-screen z-50"
      aria-label="Sidebar"
    >
      <div className=" w-full sm:w-1/5 h-full  py-4 px-3 bg-white relative">
        <div className="relative flex justify-between items-center p-2">
          <GiHamburger className="text-2xl text-yellow-800" />

          <h1 className="font-semibold">
            Food <span className="text-details">Club</span>
          </h1>

          <AiOutlineArrowRight
            onClick={closeMenu}
            className=" text-black text-2xl lg:cursor-pointer "
          >
            close
          </AiOutlineArrowRight>
        </div>

        <ul className="space-y-2 mt-5">
          <li
            onClick={() => router.push("/")}
            className="flex items-center justify-center  p-2 text-base font-semibold text-black rounded-lg bg-primary lg:cursor-pointer"
          >
            <span className="ml-3">Inicio</span>
          </li>
          <li className="flex items-center justify-center  p-2 text-base font-semibold text-white rounded-lg bg-details lg:cursor-pointer">
            <span className="ml-3">Lanches e bebidas</span>
          </li>
          <li
            onClick={() => router.push("/entrar")}
            className="flex items-center justify-center  p-2 text-base font-semibold text-black rounded-lg bg-primary lg:cursor-pointer "
          >
            <span className="ml-3">Login</span>
          </li>
          <li
            onClick={() => router.push("/registrar")}
            className="flex items-center justify-center  p-2 text-base font-semibold text-black rounded-lg bg-primary lg:cursor-pointer"
          >
            <span className="ml-3">Criar conta</span>
          </li>
        </ul>

        <button type="button" onClick={() => signOut()}>
          sair
        </button>
      </div>
    </aside>
  );
};

export default SideMenu;
