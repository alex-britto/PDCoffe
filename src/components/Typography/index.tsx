import { PropsWithChildren } from "react";

interface TypographyProps
  extends PropsWithChildren<{
    color?: string;
    weight?: number;
    size?: number;
    family?: string;
  }> {}

export function Typography({
  children,
  color = "#000",
  weight = 400,
  size = 14,
  family = "Roboto",
}: TypographyProps) {
  return (
    <p
      style={{
        color,
        fontWeight: weight,
        fontSize: size,
        fontFamily: family,
      }}
    >
      {children}
    </p>
  );
}
