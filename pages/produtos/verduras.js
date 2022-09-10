import React from "react";
import { client } from "../../lib/client";
import { Verduras } from "../../components/index";

const verduras = ({ verduras }) => {
  return (
    <div className="shop-card-container">
      <div className="product-card verduras">
        <h1>Verduras</h1>
      </div>
      <div className="products-container">
        {verduras?.map((verdura) => (
          <Verduras key={verdura._id} verduras={verdura} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const verdurasQuery = '*[_type == "verduras"]';
  const verduras = await client.fetch(verdurasQuery);

  return {
    props: {
      verduras,
    },
  };
};

export default verduras;
