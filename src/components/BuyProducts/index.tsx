import { useContext } from "react";
import { IMyContext, MyContext } from "~/context/ProductsProvider";
import { CartCard } from "../CartCard";

import { Container } from "./BuyProducts.style";

export function BuyProducts() {
  const { cart } = useContext<IMyContext>(MyContext);

  return (
    <Container>
      {cart!.length ? (
        cart
          ?.sort((a, b) => a.product.name < b.product.name)
          .map((product, i) => <CartCard key={i} data={product} />)
      ) : (
        <h2>Nenhum item foi adicionado...</h2>
      )}
    </Container>
  );
}
