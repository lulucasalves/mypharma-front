import { createContext, ReactNode, useEffect, useState } from "react";

import { IGetParams, IGetProducts } from "~/types/index";

export const MyContext = createContext<IMyContext>({});

interface IContext {
  children?: ReactNode;
}

export interface IMyContext {
  products?: IGetProducts[];
  setProducts?: (value: IGetProducts[]) => void;
  cart?: IGetProducts[];
  changeCart?: (value: IGetProducts[]) => void;
  filters?: IGetParams;
  setFilters?: (value: IGetParams) => void;
}

export function ProductsProvider({ children }: IContext) {
  const [products, setProducts] = useState<IGetProducts[]>([]);
  const [cart, setCart] = useState<IGetProducts[]>([]);
  const [filters, setFilters] = useState<IGetParams>({
    category: "",
    order: "nameD",
    query: "",
  });

  useEffect(() => {
    const getCart = localStorage.getItem("cart");

    if (getCart) {
      setCart(JSON.parse(getCart));
    }
  }, []);

  function changeCart(value: IGetProducts[]) {
    localStorage.setItem("cart", JSON.stringify(value));
    setCart(value);

    return;
  }

  return (
    <MyContext.Provider
      value={{ cart, changeCart, products, setProducts, filters, setFilters }}
    >
      {children}
    </MyContext.Provider>
  );
}
