import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactNode;
}

export function DeleteButton({ icon, label, onClick }: ButtonProps) {
  return (
    <Container onClick={onClick}>
      {icon} {label}
    </Container>
  );
}
