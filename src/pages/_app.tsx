import type { AppProps } from "next/app";
import { SkeletonTheme } from "react-loading-skeleton";

import { ProductsProvider } from "~/context/ProductsProvider";
import { Global } from "~/styles/globals";

import "react-loading-skeleton/dist/skeleton.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <SkeletonTheme>
        <Global />
        <Component {...pageProps} />
      </SkeletonTheme>
    </ProductsProvider>
  );
}

export default MyApp;
