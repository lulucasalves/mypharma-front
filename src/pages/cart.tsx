import { NextPage } from "next";
import Head from "next/head";

import { Cart } from "~/templates";

const CartPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MyPharma Loja</title>
      </Head>
      <Cart />
    </>
  );
};

export default CartPage;
