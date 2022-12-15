import React from "react";
import MenuCategory from "../components/Menu/MenuCategory";
import Products from "../components/Menu/Product";
import { client } from "../lib/client";

const Menu = ({ pizzas, burgers }) => {
  const products = [pizzas, burgers];

  return (
    <>
      <MenuCategory items={products} />
    </>
  );
};

export const getServerSideProps = async () => {
  const pizzasQuery = '*[_type =="pizzas"]';
  const pizzas = await client.fetch(pizzasQuery);
  const burgersQuery = '*[_type =="burgers"]';
  const burgers = await client.fetch(burgersQuery);

  return {
    props: {
      pizzas,
      burgers,
    },
  };
};

export default Menu;
