import React from "react";
import { client } from "../../lib/client";
import { Bebidas } from "../../components/index";

const bebidas = ({ bebidas }) => {
  return (
    <div className="shop-card-container">
      <div className="product-card bebidas">
        <h1>Bebidas</h1>
      </div>
      <div className="products-container">
        {bebidas?.map((item) => (
          <Bebidas key={item._id} bebidas={item} />
        ))}
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "bebidas"]';
  const bebidas = await client.fetch(query);

  return {
    props: {
      bebidas,
    },
  };
};

export default bebidas;
