import React from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";

const CardShop = ({
  cardShopLegume,
  cardShopFruit,
  cardShopVerdura,
  cardShopBebida,
}) => {
  return (
    <div name="cardshop" className="cardshop-container">
      <h1>Produtos em Destaques</h1>
      <p>
        Frutas,legumes e verduras sem sair de casa, deixa que a gente te entrega
        tudo o que precisar.
      </p>

      <div className="cards-section">
        <Link href="/produtos/verduras">
          <div className="card-shop verduras ">
            <img
              src={urlFor(cardShopVerdura.image)}
              className="image-card"
              alt="banana"
            />
            <h1>Verduras</h1>
          </div>
        </Link>

        <Link href="/produtos/frutas">
          <div className="card-shop fruits">
            <img
              src={urlFor(cardShopFruit.image)}
              className="image-card"
              alt="banana"
            />
            <h1>Frutas</h1>
          </div>
        </Link>

        <Link href="/produtos/legumes">
          <div className="card-shop legumes">
            <img
              src={urlFor(cardShopLegume.image)}
              className="image-card"
              alt="tomate"
            />
            <h1>Legumes</h1>
          </div>
        </Link>

        <Link href="/produtos/bebidas">
          <div className="card-shop bebidas">
            <img
              src={urlFor(cardShopBebida.image)}
              alt="whisky"
              className="image-card"
            />
            <h1>Bebidas</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardShop;
