import React from "react";
import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";

const Ofertas = ({ ofertas }) => {
  const { image, details, price, name } = ofertas;
  const { addToCart, qty } = useStateContext();

  return (
    <div className="product-oferta">
      <img src={urlFor(image && image[0])} className="oferta-image" />
      <p>{name}</p>
      <p className="oferta-detail">{details}</p>
      <h5>R$ {price}/unidade</h5>
      <button
        type="button"
        className="btn-cart"
        onClick={() => addToCart(ofertas, qty)}
      >
        Adicionar
      </button>
    </div>
  );
};

export default Ofertas;
