import { ButtonHTMLAttributes, ReactNode } from "react";
import { Badge, Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "PRIMARY" | "SECONDARY";
  quantity?: number;
}

export function CartButton({
  children,
  variant = "PRIMARY",
  quantity = 0,
  onClick,
}: ButtonProps) {
  return (
    <Container variant={variant} onClick={onClick}>
      {children}

      {quantity > 0 && variant === "SECONDARY" && (
        <Badge>
          <span>{quantity}</span>
        </Badge>
      )}
    </Container>
  );
}
