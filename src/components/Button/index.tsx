import { Container } from "./styles";

interface ButtonProps {
<<<<<<< Updated upstream
  children?: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <Container>{children}</Container>;
=======
  title: string;
}

export function Button({ title }: ButtonProps) {
  return <Container>{title}</Container>;
>>>>>>> Stashed changes
}
