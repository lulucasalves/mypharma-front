import { createGlobalStyle } from "styled-components";

import { colors } from "./colors";

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Mulish', sans-serif;
    color: ${colors.black};
  }

  body {
    background-color: ${colors.white};
    width:100%;
    overflow-x: hidden;
  }

  button {
    border: none;
    cursor: pointer;

  }

  html {
    width:100%;
    scroll-behavior:smooth;

    @media (max-width: 1340px) {
      font-size: 93.75%;
    }
    @media (max-width: 840px) {
      font-size: 87.5%;
    }
  }
`;
