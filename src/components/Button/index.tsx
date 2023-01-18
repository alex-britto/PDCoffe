import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, onClick }: ButtonProps) {
  return <Container onClick={onClick}>{label}</Container>;
}
