import Router from "next/router";

import { IGetProducts } from "~/types";

import {
  Button,
  Container,
  Description,
  ImageContainer,
  Title,
} from "./Card.style";

export function Card({ data }: { data: IGetProducts }) {
  return (
    <Container onClick={() => Router.replace(`/product/${data._id}`)}>
      <ImageContainer url={data.image} />
      <Title>{data.name}</Title>
      <Description>{data.category}</Description>
      <Title>
        R$
        {String(
          data.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        )}
      </Title>
      <Button>Ver Mais</Button>
    </Container>
  );
}
