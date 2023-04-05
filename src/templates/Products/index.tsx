import { Cards, Filters, Menu } from "~/components";
import { Content } from "./Products.style";

export function Products() {
  return (
    <>
      <Menu />
      <Content>
        <Filters />
        <Cards />
      </Content>
    </>
  );
}
