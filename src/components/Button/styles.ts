import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.purple.dark};
  color: white;

  text-align: right;
  font-weight: bold;
  text-decoration: underline;

  &:hover: {
    background-color: ${({ theme }) => theme.colors.yellow.default};
  }
`;
