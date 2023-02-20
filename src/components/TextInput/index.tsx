import { InputHTMLAttributes } from "react";
import { useTheme } from "styled-components";
import { maskCep } from "../../utils";
import Typography from "../Typography";
import { Container, EndLabel, Input } from "./styles";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  endLabel?: string;
  placeholder: string;

  value: string;
  isCep?: boolean;
}

export const TextInput = ({
  endLabel,
  placeholder,

  value,
  isCep = false,
  ...props
}: TextFieldProps) => {
  const theme = useTheme();

  return (
    <Container>
      <Input
        placeholder={placeholder}
        maxLength={isCep ? 9 : 100}
        value={
          isCep ? (maskCep(value) === "00000-000" ? "" : maskCep(value)) : value
        }
        {...props}
      />

      {value.length === 0 && (
        <EndLabel>
          <Typography size={12} color={theme.colors.base.label}>
            {endLabel}
          </Typography>
        </EndLabel>
      )}
    </Container>
  );
};
