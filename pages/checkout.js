import React from "react";
import { getSession } from "next-auth/react";

const CheckOut = () => {
  return <div>CheckOut</div>;
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};

export default CheckOut;
