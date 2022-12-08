import styled from "styled-components";

export const Container = styled.button`
  padding: 10px 25px;
  background-color: ${({ theme }) => theme.colors.purple.dark};
  color: white;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
