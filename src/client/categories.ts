import { AxiosResponse } from "axios";
import { IGetCategories } from "~/types";
import { api } from "./fetcher";

export async function getCategories() {
  return api
    .get<IGetCategories[]>(`/category`)
    .then((response: AxiosResponse<IGetCategories[]>) => response.data)
    .catch((error) => console.log(error));
}
