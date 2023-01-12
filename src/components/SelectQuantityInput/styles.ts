import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.base.button};
  color: ${({ theme }) => theme.colors.base.title};
  text-transform: uppercase;
  padding: 8px;
  width: 72px;
  border: none;
  border-radius: 6px;
  font-family: "Roboto";
  transition: 0.2s;

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.purple.default};
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.purple.dark};
    }
  }
`;
