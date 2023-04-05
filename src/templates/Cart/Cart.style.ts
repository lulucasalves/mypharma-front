import styled from "styled-components";
import { colors } from "~/styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 0 75px;
  margin-bottom: 100px;

  @media (max-width: 600px) {
    padding: 0 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;

  @media (max-width: 1415px) {
    gap: 0;
    flex-direction: column;
  }
`;

export const Checkout = styled.div`
  width: 350px;
  padding: 30px;
  display: flex;
  border-radius: 16px;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 1415px) {
    width: 100%;
  }
`;

export const Price = styled.div`
  margin-top: 20px;
  justify-content: center;
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 1415px) {
    text-align: center;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  color: ${colors.white};
  width: 100%;
  margin-top: 20px;
  border-radius: 4px;
  background-color: ${colors.blue};
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }
`;
