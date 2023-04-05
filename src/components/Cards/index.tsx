import { useContext, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getProducts } from "~/client";
import { IMyContext, MyContext } from "~/context/ProductsProvider";

import { IGetProducts } from "~/types";

import { Card } from "../Card";

import { Container } from "./Cards.style";

export function Cards() {
  const { filters } = useContext<IMyContext>(MyContext);
  const [products, setProducts] = useState<IGetProducts[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useMemo(() => {
    setIsLoading(true);
    (async () => {
      await getProducts({
        sort: filters!.order,
        query: filters?.query,
        category: filters?.category,
      })
        .then((response) => setProducts(response as IGetProducts[]))
        .finally(() => setIsLoading(false));
    })();
  }, [filters]);

  return (
    <Container>
      {isLoading
        ? [1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} height={460} borderRadius={8} width={350} />
          ))
        : products &&
          products.length &&
          products.map((product) => <Card data={product} key={product._id} />)}
    </Container>
  );
}
