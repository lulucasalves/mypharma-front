import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 100px;

  @media (max-width: 600px) {
    padding: 0 25px;
  }
`;
