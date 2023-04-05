import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { useContext } from "react";

import { IMyContext, MyContext } from "~/context/ProductsProvider";

import { Cart, Container } from "./Menu.style";
import Router from "next/router";

export function Menu() {
  const { cart } = useContext<IMyContext>(MyContext);

  return (
    <Container>
      <Image
        onClick={() => Router.replace("/")}
        src="/logo.svg"
        width={200}
        height={100}
        alt=""
      />
      <Cart onClick={() => Router.replace("/cart")}>
        <HiShoppingCart size={30} />
        {cart?.length ? <p>{cart.length}</p> : null}
      </Cart>
    </Container>
  );
}
