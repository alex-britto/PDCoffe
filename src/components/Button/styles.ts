import styled from "styled-components";

interface ButtonProps {
  bgColor?: string;
  bgHoverColor?: string;
  color?: string;
  width?: string;
  maxWidth?: string;
}

export const Container = styled.button<ButtonProps>`
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  color: ${({ color }) => color || "inherit"};
  text-transform: uppercase;
  padding: 12px 8px;
  width: ${({ width }) => width || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "auto"};
  border: none;
  border-radius: 6px;
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    background-color: ${({ bgHoverColor }) => bgHoverColor || "transparent"};
  }
`;
