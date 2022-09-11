import React from "react";
import { client } from "../lib/client";
import { HeroBanner } from "../components";

// import Ofertas from "../components/products/ofertas";
import CardShop from "../components/CardShop";

const index = ({ bannerData, ofertas, fruits, legumes, verduras, bebidas }) => {
  const bannerDb = bannerData.length && bannerData;
  const searchItem = [...fruits, ...legumes, ...verduras, ...bebidas];

  return (
    <div>
      <HeroBanner heroBanner={bannerDb[1]} search={searchItem} />

      <CardShop
        cardShopFruit={bannerDb[2]}
        cardShopLegume={bannerDb[3]}
        cardShopVerdura={bannerDb[4]}
        cardShopBebida={bannerDb[0]}
      />

      {/* <h1>PRODUTOS EM OFERTAS</h1>
      <p>A maior variedade de frutas, legumes e verduras.</p>
      <div className="product-ofertas">
        {ofertas?.map((oferta) => (
          <Ofertas key={oferta._id} ofertas={oferta} />
        ))}
      </div> */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const queryOfertas = '*[_type =="ofertas"]';
  const ofertas = await client.fetch(queryOfertas);

  const query = '*[_type == "fruits"]';
  const fruits = await client.fetch(query);
  const queryVerduras = '*[_type == "verduras"]';
  const verduras = await client.fetch(queryVerduras);
  const queryLegumes = '*[_type == "legumes"]';
  const legumes = await client.fetch(queryLegumes);
  const queryBebidas = '*[_type == "bebidas"]';
  const bebidas = await client.fetch(queryBebidas);

  return {
    props: {
      bannerData,
      ofertas,
      fruits,
      legumes,
      verduras,
      bebidas,
    },
  };
};

export default index;
