import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.base.background};
  padding: 32px 160px;

  img {
    width: 85px;
  }
`;
