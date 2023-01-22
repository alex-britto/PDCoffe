export default function Status({
  text,
  backgroundColor,
  color,
}: {
  text: string;
  backgroundColor?: string;
  color?: string;
}) {
  return (
    <StyledStatus backgroundColor={backgroundColor} color={color}>
      <span>{text}</span>
    </StyledStatus>
  );
}

import styled from "styled-components";

const StyledStatus = styled.div<{
  backgroundColor?: string;
  color?: string;
}>`
  padding: 4px 8px;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.colors.yellow.light};
  border-radius: 99px;
  font-size: 10px;
  line-height: 13px;
  span {
    font-weight: bold;
    color: ${({ color, theme }) =>
      color ? color : theme.colors.yellow.dark};
    text-transform: uppercase;
  }
`;
