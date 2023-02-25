import { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from "./styles";
import { Typography } from "../../components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | ReactNode;
  bgColor?: string;
  bgHoverColor?: string;
  color?: string;
  width?: string;
  maxWidth?: string;
  disabled?: boolean;
}

export function Button({
  label,
  bgColor,
  bgHoverColor,
  color,
  width,
  maxWidth,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <Container
      onClick={onClick}
      bgColor={bgColor}
      bgHoverColor={bgHoverColor}
      width={width}
      maxWidth={maxWidth}
      disabled={disabled}
    >
      <Typography size={14} color={color} weight={700}>
        {label}
      </Typography>
    </Container>
  );
}
