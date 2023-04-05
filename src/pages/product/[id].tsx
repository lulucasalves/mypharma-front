import { NextPage } from "next";
import Head from "next/head";

import { Product } from "~/templates";

const ProductPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MyPharma Loja</title>
      </Head>
      <Product />
    </>
  );
};

export default ProductPage;
