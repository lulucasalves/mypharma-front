import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin-bottom: 50px;

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const InputDiv = styled.div`
  position: relative;
  width: 100%;

  button {
    position: absolute;
    right: 20px;
    margin-top: 1px;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
  }

  input {
    height: 40px;
    outline: none;
    width: 100%;
    border-radius: 4px;
    border: 2px solid rgba(0, 0, 0, 0.3);
    padding-left: 20px;

    &:focus {
      border-color: ${colors.blue};
    }
  }
`;

export const SelectDiv = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  select {
    height: 40px;
    background-color: transparent;
    color: ${colors.black};
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    width: 200px;
    padding-left: 50px;
    font-weight: 600;

    &:focus {
      border-color: ${colors.blue};
    }
  }

  @media (max-width: 950px) {
    width: 100%;
    select {
      width: 100%;
    }
  }
`;
