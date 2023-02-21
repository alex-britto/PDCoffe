import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  gap: 32px;
  align-items: flex-start;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border-radius: 6px;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.base.card};
  gap: 20px;

  header {
    width: 100%;
    display: flex;
    margin-bottom: 25px;
    gap: 8px;
  }
`;

export const PaymentFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.base.card};
  margin-bottom: 20px;

  header {
    width: 100%;
    display: flex;
    margin-bottom: 32px;
    gap: 8px;
  }
`;

export const PaymentButtonsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 12px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
