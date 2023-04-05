import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${colors.darkBlue};
  margin-bottom: 50px;

  padding: 0 75px;

  @media (max-width: 600px) {
    padding: 0 25px;
  }
`;

export const Cart = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    fill: ${colors.white};
  }

  p {
    position: absolute;
    color: ${colors.white};
    height: 18px;
    font-size: 14px;
    width: 18px;
    text-align: center;
    font-weight: 800;
    border-radius: 10px;
    top: -10px;
    right: -10px;
    background-color: ${colors.blue};
  }

  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }
`;
