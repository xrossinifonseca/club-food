import React from "react";
import { client, urlFor } from "../lib/client";
import { HeroBanner } from "../components";
import Ofertas from "../components/products/ofertas";
import CardShop from "../components/CardShop";
import { GiBananaPeeled, GiTomato, GiBroccoli } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import FooterBanner from "../components/FooterBanner";

const index = ({ bannerData, ofertas, fruits, legumes, verduras, bebidas }) => {
  const bannerDb = bannerData.length && bannerData;
  const searchItem = [...fruits, ...legumes, ...verduras, ...bebidas];

  return (
    <div>
      <HeroBanner heroBanner={bannerDb[1]} search={searchItem} />

      <CardShop cardShopFruit={bannerDb[2]} />

      {/* produtos em ofertas */}
      <div className="ofertas">
        <h1>Produtos em ofertas</h1>
        <div className="ofertas-icon">
          <p>
            frutas <GiBananaPeeled />
          </p>
          <p>
            verduras <GiBroccoli />
          </p>
          <p>
            legume <GiTomato />
          </p>
          <p>
            bebidas <BiDrink />
          </p>
        </div>

        <div className="card-oferta">
          {ofertas?.map((oferta) => (
            <Ofertas key={oferta._id} ofertas={oferta} />
          ))}
        </div>
      </div>

      <FooterBanner FooterBanner={bannerDb[4]} />
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
