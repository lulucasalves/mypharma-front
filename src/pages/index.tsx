import { NextPage } from "next";
import Head from "next/head";

import { Products } from "~/templates";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MyPharma Loja</title>
      </Head>
      <Products />
    </>
  );
};

export default Home;
