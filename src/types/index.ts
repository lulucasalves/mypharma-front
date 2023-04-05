export interface IGetProducts {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export interface IGetProductsStore {
  product: IGetProducts;
  quantity: number;
}

export interface IGetCategories {
  _id: number;
  name: string;
}

export interface IGetParams {
  order: "nameC" | "nameD" | "priceD" | "priceC";
  category: string;
  query: string;
}
