import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </SessionProvider>
  );
}

export default MyApp;
