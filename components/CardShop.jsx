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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          tempore vero tenetur quasi enim, tempora facilis sit beatae! Ipsum
          exercitationem adipisci quae atque eaque, labore odit iste repellat
          consequuntur quam?
        </p>

        <button type="button">
          <Link href="/produtos/frutas">Peça agora </Link>
        </button>
      </div>
    </div>
  );
};

export default CardShop;
