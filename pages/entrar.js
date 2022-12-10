import React from "react";
import Login from "../components/form/Login";
import { client } from "../lib/client";

const checkout = ({ bannerData }) => {
  return (
    <>
      <Login banner={bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      bannerData,
    },
  };
};

export default checkout;
