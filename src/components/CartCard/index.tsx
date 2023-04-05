import { useContext } from "react";
import { IMyContext, MyContext } from "~/context/ProductsProvider";
import { IGetProductsStore } from "~/types";
import {
  Button,
  Category,
  Container,
  ImageContainer,
  Infos,
  InputDiv,
  Price,
  Title,
} from "./CartCard.style";

export function CartCard({ data }: { data: IGetProductsStore }) {
  const { cart, changeCart } = useContext<IMyContext>(MyContext);

  function changeQuantity(quantity: number) {
    const cartList = cart?.filter(
      (value) => value.product._id !== data.product._id
    );

    changeCart?.([...cartList!, { product: data.product, quantity }]);
  }

  function removeCart() {
    const cartList = cart?.filter(
      (value) => value.product._id !== data.product._id
    );

    changeCart?.([...cartList!]);
  }

  function verifyQuantity(value: number) {
    if (value < 1) changeQuantity(1);
    else if (value > 99) changeQuantity(99);
    else changeQuantity(parseInt(String(value)));
  }

  return (
    <Container>
      <ImageContainer url={data.product.image} />
      <Infos>
        <Title>
          <h2>{data.product.name}</h2>
          <Price>
            R$
            {String(
              (data.product.price * data.quantity)
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            )}
          </Price>
        </Title>
        <Category>
          <span>Categoria:</span> {data.product.category}
        </Category>
        <InputDiv>
          <button
            onClick={() => {
              if (data.quantity > 1) changeQuantity(data.quantity - 1);
            }}
          >
            -
          </button>
          <input
            onChange={(e) => verifyQuantity(e.target.value)}
            value={data.quantity}
            type="number"
          />
          <button
            onClick={() => {
              if (data.quantity < 99) changeQuantity(data.quantity + 1);
            }}
          >
            +
          </button>
        </InputDiv>
        <Button onClick={() => removeCart()}>Excluir do carrinho</Button>
      </Infos>
    </Container>
  );
}
