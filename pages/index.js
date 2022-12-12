import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import {
  HeroBanner,
  Info,
  MenuSection,
  Restaurant,
  SnackCombos,
} from "../components";

const Index = ({ bannerData, produtos, burguers, combos }) => {
  const [heroDiscount, heroBanner] = bannerData;
  const products = [burguers, produtos];

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

export const getServerSideProps = async (context) => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const queryProdtuos = '*[_type =="produtos"]';
  const produtos = await client.fetch(queryProdtuos);
  const burguersQuery = '*[_type =="burguers"]';
  const burguers = await client.fetch(burguersQuery);
  const combosQuery = '*[_type =="combos"]';
  const combos = await client.fetch(combosQuery);

  return {
    props: {
      bannerData,
      produtos,
      burguers,
      combos,
    },
  };
};

export default Index;
