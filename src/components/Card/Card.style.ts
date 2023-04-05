import styled from "styled-components";
import { colors } from "~/styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  border-radius: 8px;
  width: 350px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    transition: 0.3s;
    transform: scale(1.02);
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  text-align: center;
`;

export const ImageContainer = styled.div<{ url: string }>`
  background-size: cover;
  border-radius: 8px;
  width: 250px;
  height: 250px;
  background-image: ${({ url }) => `url(${url})`};
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
  opacity: 0.6;
  word-break: break-all;
  margin-top: 10px;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  color: ${colors.white};
  margin-top: 15px;
  width: 100%;
  border-radius: 4px;
  background-color: ${colors.blue};
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }
`;
