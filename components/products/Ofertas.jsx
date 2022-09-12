import React from "react";
import { urlFor } from "../../lib/client";

const Ofertas = ({ ofertas: { image, details, price, name } }) => {
  return (
    <div className="product-oferta">
      <img src={urlFor(image && image[0])} className="oferta-image" />
      <p>{name}</p>
      <p className="oferta-detail">{details}</p>
      <h5>R$ {price}/unidade</h5>
      <button type="button" className="btn-cart">
        Adicionar
      </button>
    </div>
  );
};

export default Ofertas;
