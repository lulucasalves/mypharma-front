import { BuyProducts, Menu } from "~/components";
import { Button, Checkout, Container, Content, Price } from "./Cart.style";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { colors } from "~/styles/colors";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";
import { IMyContext, MyContext } from "~/context/ProductsProvider";

export function Cart() {
  const { cart } = useContext<IMyContext>(MyContext);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart?.forEach(
      (product) => (sum += product.product.price * product.quantity)
    );

    setPrice(sum);
  }, [cart]);

  return (
    <>
      <Menu />
      <Container>
        <BsArrowLeftCircleFill
          onClick={() => Router.replace("/")}
          cursor="pointer"
          size={40}
          fill={colors.darkBlue}
        />
        <Content>
          <BuyProducts />
          <Checkout>
            <h2>Finalizar compra</h2>
            <Price>
              <h3>Total</h3>
              <h2>
                R$
                {String(
                  price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                )}
              </h2>
            </Price>
            <Button>Comprar</Button>
          </Checkout>
        </Content>
      </Container>
    </>
  );
}
