import React from "react";
import { client } from "../../lib/client";
import { Fruits } from "../../components/index";

const frutas = ({ fruits }) => {
  return (
    <div className="shop-card-container">
      <div className="product-card fruit">
        <h1>Frutas</h1>
      </div>
      <div className="products-container">
        {fruits?.map((fruit) => (
          <Fruits key={fruit._id} frutas={fruit} />
        ))}
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "fruits"]';
  const fruits = await client.fetch(query);

  return {
    props: {
      fruits,
    },
  };
};
export default frutas;
