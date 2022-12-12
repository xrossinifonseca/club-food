import { getSession } from "next-auth/react";
import React from "react";
import Login from "../components/form/Login";
import { client } from "../lib/client";

const SignIn = ({ bannerData }) => {
  return (
    <>
      <Login banner={bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      bannerData,
      session,
    },
  };
};

export default SignIn;
