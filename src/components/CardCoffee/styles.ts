import styled from "styled-components";

export const CardContainer = styled.div`
  width: 256px;
  background: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px 36px;
  padding: 8px;
`;

export const CardCoffeeImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -24px;
  margin-bottom: 12px;
`;

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;

  span {
    display: block;
    background: ${({ theme }) => theme.colors.yellow.light};
    border-radius: 100px;
    padding: 4px 8px;
    width: fit-content;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
`;
