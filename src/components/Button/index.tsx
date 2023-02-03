import { ButtonHTMLAttributes } from "react";
import Typography from "../Typography";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  bgColor?: string;
  bgHoverColor?: string;
  color?: string;
  width?: string;
  maxWidth?: string;
}

export function Button({
  label,
  bgColor,
  bgHoverColor,
  color,
  width,
  maxWidth,
  onClick,
}: ButtonProps) {
  return (
    <Container
      onClick={onClick}
      bgColor={bgColor}
      bgHoverColor={bgHoverColor}
      width={width}
      maxWidth={maxWidth}
    >
      <Typography size={14} color={color} weight={700}>
        {label}
      </Typography>
    </Container>
  );
}
