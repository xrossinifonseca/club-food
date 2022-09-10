import React from "react";
import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";

const Bebidas = ({ bebidas }) => {
  const { image, name, slug, details, price } = bebidas;
  const { addToCart, qty } = useStateContext();
  return (
    <div>
      <div className="card">
        <img
          src={urlFor(image && image[0])}
          width={80}
          className="image-product"
        />

        <p>{name}</p>
        <p className="product-detail">{details}</p>
        <h5>R$ {price}/unidade</h5>
        <button
          type="button"
          className="btn-cart"
          onClick={() => addToCart(bebidas, qty)}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Bebidas;
