import styled from "styled-components";

export const Container = styled.button`
<<<<<<< Updated upstream
  padding: 10px 25px;
  background-color: ${({ theme }) => theme.colors.purple.dark};
  color: white;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
=======
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
>>>>>>> Stashed changes
`;
