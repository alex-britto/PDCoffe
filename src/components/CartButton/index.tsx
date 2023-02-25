import { Badge, Container } from "./styles";
import { ButtonHTMLAttributes, ReactNode } from "react";

import { Typography } from "../../components";
import { useTheme } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "PRIMARY" | "SECONDARY";
  quantity?: number;
  icon?: ReactNode;
}

export function CartButton({
  variant = "PRIMARY",
  quantity = 0,
  onClick,
  icon,
}: ButtonProps) {
  const theme = useTheme();

  return (
    <Container variant={variant} onClick={onClick}>
      {icon}

      {quantity > 0 && variant === "SECONDARY" && (
        <Badge>
          <span>
            <Typography size={12} weight={700} color={theme.colors.white}>
              {quantity > 99 ? "99+" : quantity}
            </Typography>
          </span>
        </Badge>
      )}
    </Container>
  );
}
