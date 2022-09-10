import React from "react";
import { Legumes } from "../../components/index";

import { client } from "../../lib/client";

const legumes = ({ legumes }) => {
  return (
    <div className="shop-card-container">
      <div className="product-card legumes">
        <h1>Legumes</h1>
      </div>
      <div className="products-container">
        {legumes?.map((legume) => (
          <Legumes key={legume._id} legumes={legume} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "legumes"]';
  const legumes = await client.fetch(query);

  return {
    props: {
      legumes,
    },
  };
};

export default legumes;
