import React from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";

const CardShop = ({ cardShopFruit }) => {
  return (
    <div name="cardshop" className="cardshop-container">
      <div className="card-left">
        <img src={urlFor(cardShopFruit.image)} className="card-image" />
      </div>
      <div className="card-right">
        <h3>Um novo jeito de pedir frutas e verduras</h3>
        <p>
          Seu novo jeito de obter frutas, verduras e legumes frescos e de melhor
          qualidade, com toda praticidade e bem cuidado direto para sua casa.
          Levamos até você o que a natureza tem de melhor.
        </p>

        <button type="button">
          <Link href="/produtos/frutas">Peça agora </Link>
        </button>
      </div>
    </div>
  );
};

export default CardShop;
