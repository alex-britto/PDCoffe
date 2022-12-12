import { ReactNode } from "react";
import { Badge, Container } from "./styles";

interface ButtonProps {
  children: ReactNode;
  variant?: "PRIMARY" | "SECONDARY";
  isBadge?: boolean;
}

export function CartButton({
  children,
  variant = "PRIMARY",
  isBadge = false,
}: ButtonProps) {
  return (
    <Container variant={variant}>
      {children}

      {isBadge && variant === "SECONDARY" && (
        <Badge>
          <span>3</span>
        </Badge>
      )}
    </Container>
  );
}
