import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps {
  title?: string;
  children: ReactNode;
}

export function Button({ title, children }: ButtonProps) {
  return (
    <Container className="my-6 ml-auto items-center">{children}</Container>
  );
}
