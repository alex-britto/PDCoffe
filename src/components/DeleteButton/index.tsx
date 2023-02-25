import { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from "./styles";
import { Typography } from "../../components";
import { useTheme } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactNode;
}

export function DeleteButton({ icon, label, onClick }: ButtonProps) {
  const theme = useTheme();

  return (
    <Container onClick={onClick}>
      {icon} <Typography color={theme.colors.base.text}>{label}</Typography>
    </Container>
  );
}
