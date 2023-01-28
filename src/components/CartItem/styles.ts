import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: min-content;
  background: ${({ theme }) => theme.colors.base.card};
  padding: 4px;
`;

export const CardCoffeeImage = styled.div`
  width: 64px;
  height: 64px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;

  p {
    align-self: flex-start;
  }
`;

export const CardButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.base.button};
`;
