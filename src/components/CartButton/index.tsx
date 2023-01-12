import { ButtonHTMLAttributes, ReactNode } from "react";
import { Badge, Container } from "./styles";

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
  return (
    <Container variant={variant} onClick={onClick}>
      {icon}

      {quantity > 0 && variant === "SECONDARY" && (
        <Badge>
          <span>{quantity}</span>
        </Badge>
      )}
    </Container>
  );
}
