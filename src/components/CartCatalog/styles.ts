import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 448px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px 44px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  gap: 16px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;
