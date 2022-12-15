import React from "react";
import { client } from "../lib/client";
import {
  HeroBanner,
  Info,
  MenuSection,
  Restaurant,
  SnackCombos,
} from "../components";

const Index = ({ bannerData, pizzas, burgers, combos }) => {
  const [heroDiscount, heroBanner] = bannerData;
  const products = [burgers, pizzas];

  return (
    <>
      <HeroBanner heroBanner={heroBanner} />
      <MenuSection menu={products} />
      <SnackCombos combos={combos} />
      <Info />
      <Restaurant />
    </>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const queryPizzas = '*[_type =="pizzas"]';
  const pizzas = await client.fetch(queryPizzas);
  const burgersQuery = '*[_type =="burgers"]';
  const burgers = await client.fetch(burgersQuery);
  const combosQuery = '*[_type =="combos"]';
  const combos = await client.fetch(combosQuery);

  return {
    props: {
      bannerData,
      pizzas,
      burgers,
      combos,
    },
  };
};

export default Index;
