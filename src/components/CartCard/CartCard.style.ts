import styled from "styled-components";
import { colors } from "~/styles/colors";

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  gap: 40px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  @media (max-width: 915px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageContainer = styled.div<{ url: string }>`
  background-size: cover;
  border-radius: 8px;
  min-width: 200px;
  max-width: 200px;

  min-height: 200px;
  background-image: ${({ url }) => `url(${url})`};
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Infos = styled.div`
  gap: 20px;
  flex-direction: column;
  width: 100%;
  display: flex;

  h2 {
    font-size: 28px;
  }

  @media (max-width: 915px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Description = styled.p`
  font-weight: 500;
`;

export const Category = styled.p`
  padding: 5px 10px;
  font-weight: 500;
  font-size: 14px;
  width: fit-content;
  border-radius: 4px;
  background: ${colors.blueOpacity};
  color: ${colors.white};

  span {
    color: ${colors.white};
    font-weight: 700;
  }
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  color: ${colors.white};
  width: fit-content;
  border-radius: 4px;
  background-color: rgba(230, 0, 0, 0.8);
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }

  @media (max-width: 915px) {
    width: 100%;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;

  input {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    width: 40px;
    text-align: center;
    border-right: none;
    border-left: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 30px;
  }

  button {
    font-weight: 700;
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.3);
    color: ${colors.white};
  }
`;
