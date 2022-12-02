import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary">
      <Head>
        <title>Fruit Store</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="min-h-screen  sm:flex flex-col items-center">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
