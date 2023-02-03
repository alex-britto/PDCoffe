import styled from "styled-components";

export const BadgeContainer = styled.span`
  display: block;
  background: ${({ theme }) => theme.colors.yellow.light};
  border-radius: 100px;
  padding: 4px 8px;
  width: fit-content;
  text-transform: uppercase;
  margin-bottom: 8px;
`;
