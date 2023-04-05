import { AxiosResponse } from "axios";
import { IGetProducts } from "~/types";
import { api } from "./fetcher";

export async function getProducts({
  sort,
  query,
  category,
}: {
  sort: string;
  query?: string;
  category?: string;
}) {
  const queryParam = query ? `&&query=${query}` : "";
  const categoryParam =
    category && category !== "all" ? `&&category=${category}` : "";

  return api
    .get<IGetProducts[]>(`/product?sort=${sort}${queryParam}${categoryParam}`)
    .then((response: AxiosResponse<IGetProducts[]>) => response.data)
    .catch((error) => console.log(error));
}

export async function getProductsById(id: string) {
  return api
    .get<IGetProducts>(`/product/${id}`)
    .then((response: AxiosResponse<IGetProducts>) => response.data)
    .catch((error) => console.log(error));
}
