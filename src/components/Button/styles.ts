import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow.default};
  color: white;
  text-transform: uppercase;
  padding: 12px 8px;
  width: 132px;
  border: none;
  border-radius: 6px;
  font-family: "Roboto";
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    background-color: ${({ theme }) => theme.colors.yellow.dark};
  }
`;
