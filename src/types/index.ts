export interface IGetProducts {
  _id: number;
  name: string;
  category: string;
  price: number;
  image: string
  description: string;
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
