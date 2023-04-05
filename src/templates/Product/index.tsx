import Router, { useRouter } from "next/router";
import { Menu } from "~/components";
import {
  Button,
  Category,
  Content,
  Description,
  ImageContainer,
  InfoContainer,
  Infos,
  InputDiv,
  Price,
} from "./Product.style";
import { useContext, useMemo, useState } from "react";
import { IGetProducts } from "~/types";
import { getProductsById } from "~/client";
import Skeleton from "react-loading-skeleton";
import { IMyContext, MyContext } from "~/context/ProductsProvider";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { colors } from "~/styles/colors";

export function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { cart, changeCart } = useContext<IMyContext>(MyContext);

  const [product, setProduct] = useState<IGetProducts>();
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useMemo(() => {
    if (id) {
      setIsLoading(true);
      (async () => {
        await getProductsById(id as string)
          .then((response) => setProduct(response as IGetProducts))
          .finally(() => setIsLoading(false));
      })();
    }
  }, [id]);

  function verifyQuantity(value: number) {
    if (value < 1) setQuantity(1);
    else if (value > 99) setQuantity(99);
    else setQuantity(parseInt(String(value)));
  }

  return (
    <>
      <Menu />
      <Content>
        <BsArrowLeftCircleFill
          onClick={() => Router.replace("/")}
          cursor="pointer"
          size={40}
          fill={colors.darkBlue}
        />
        {isLoading ? (
          <Skeleton height={440} width={1315} borderRadius={16} />
        ) : product ? (
          <InfoContainer>
            <ImageContainer url={product.image} />
            <Infos>
              <h2>{product.name}</h2>
              <Description>{product.description}</Description>
              <Category>
                <span>Categoria:</span> {product.category}
              </Category>
              <Price>
                R$
                {String(
                  (product.price * quantity)
                    .toFixed(2)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                )}
              </Price>
              <InputDiv>
                <button
                  onClick={() => {
                    if (quantity > 1) setQuantity((old) => old - 1);
                  }}
                >
                  -
                </button>
                <input
                  onChange={(e) => verifyQuantity(e.target.value)}
                  value={quantity}
                  type="number"
                />
                <button
                  onClick={() => {
                    if (quantity < 99) setQuantity((old) => old + 1);
                  }}
                >
                  +
                </button>
              </InputDiv>
              <Button
                onClick={() => {
                  const cartList = cart?.filter(
                    (value) => value.product._id !== product._id
                  );

                  changeCart?.([...cartList!, { product, quantity }]);
                  Router.replace("/cart");
                }}
              >
                Adicionar ao carrinho
              </Button>
            </Infos>
          </InfoContainer>
        ) : (
          <h2>Este Produto não existe...</h2>
        )}
      </Content>
    </>
  );
}
