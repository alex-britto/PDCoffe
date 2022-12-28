import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children: ReactNode;
}

export function DeleteButton({ children, label, onClick }: ButtonProps) {
  return (
    <Container onClick={onClick}>
      {children} {label}
    </Container>
  );
}
