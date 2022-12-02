import React from "react";
import { client } from "../lib/client";
import {
  HeroBanner,
  Info,
  MenuSection,
  Restaurant,
  SnackCombos,
} from "../components";
import { Ofertas } from "../components/index";

const index = ({ bannerData, produtos, burguers }) => {
  // const searchItem = [...fruits, ...legumes, ...verduras, ...bebidas];
  const [heroDiscount, heroBanner] = bannerData;

  return (
    <>
      <HeroBanner heroBanner={heroBanner} />
      <MenuSection menu={burguers} />
      <SnackCombos />
      <Info />
      <Restaurant />
    </>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const queryProdtuos = '*[_type =="produtos"]';
  const produtos = await client.fetch(queryProdtuos);
  const burguersQuery = '*[_type =="burguers"]';
  const burguers = await client.fetch(burguersQuery);

  return {
    props: {
      bannerData,
      produtos,
      burguers,
    },
  };
};

export default index;
