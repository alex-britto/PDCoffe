import { ReactNode } from "react";
import { Badge, Container } from "./styles";

interface ButtonProps {
  children: ReactNode;
  variant?: "PRIMARY" | "SECONDARY";
  quantity?: number;
}

export function CartButton({
  children,
  variant = "PRIMARY",
  quantity = 0,
}: ButtonProps) {
  return (
    <Container variant={variant}>
      {children}

      {quantity > 0 && variant === "SECONDARY" && (
        <Badge>
          <span>{quantity}</span>
        </Badge>
      )}
    </Container>
  );
}
