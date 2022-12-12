import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps {
  title: string;
  children: ReactNode;
}

export function DeleteButton({ children, title }: ButtonProps) {
  return (
    <Container>
      {children} {title}
    </Container>
  );
}
