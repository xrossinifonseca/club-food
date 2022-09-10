import React from "react";
import { urlFor } from "../../lib/client";
urlFor;

const Ofertas = ({ ofertas: { image, price, slug, details, name } }) => {
  return (
    <div>
      <div className="card ">
        <img
          src={urlFor(image && image[0])}
          width={80}
          className="image-product"
        />

        <p>{name}</p>
        <p className="product-detail">{details}</p>
        <h5>R$ {price}/unidade</h5>
        <button type="button" className="btn-cart" onClick="">
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Ofertas;
