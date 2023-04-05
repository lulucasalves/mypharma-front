import { AxiosResponse } from "axios";
import { IGetCategories } from "~/types";
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
    .get<IGetCategories[]>(`/product?sort=${sort}${queryParam}${categoryParam}`)
    .then((response: AxiosResponse<IGetCategories[]>) => response.data)
    .catch((error) => console.log(error));
}
