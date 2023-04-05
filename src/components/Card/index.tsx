import { useContext } from "react";
import { IMyContext, MyContext } from "~/context/ProductsProvider";
import { IGetProducts } from "~/types";
import {
  Button,
  Container,
  Description,
  ImageContainer,
  Title,
} from "./Card.style";

export function Card({ data }: { data: IGetProducts }) {
  const { cart, changeCart } = useContext<IMyContext>(MyContext);

  return (
    <Container>
      <ImageContainer url={data.image} />
      <Title>{data.name}</Title>
      <Description>{data.category}</Description>
      <Title>R${String(data.price).replace(".", ",")}</Title>
      <Button onClick={() => changeCart!([...cart!, data])}>
        Adicionar ao carrinho
      </Button>
    </Container>
  );
}
