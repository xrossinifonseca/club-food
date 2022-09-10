import React, { useState } from "react";
import { client } from "../lib/client";

const Busca = ({ fruits }) => {
  return <div></div>;
};
export const getServerSideProps = async () => {
  const query = '*[_type == "fruits"]';
  const fruits = await client.fetch(query);
  const queryVerduras = '*[_type == "verduras"]';
  const verduras = await client.fetch(queryVerduras);
  const queryLegumes = '*[_type == "legumes"]';
  const legumes = await client.fetch(queryLegumes);

  return {
    props: {
      fruits,
      verduras,
      legumes,
    },
  };
};

export default Busca;
