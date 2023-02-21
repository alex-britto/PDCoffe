import { InputHTMLAttributes } from "react";
import { useTheme } from "styled-components";
import { maskCEP, maskCNPJ, maskCPF, maskPhone } from "../../utils";
import Typography from "../Typography";
import { Container, EndLabel, Input } from "./styles";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  endLabel?: string;
  placeholder: string;
  value: string;
  mask?: "cep" | "cnpj" | "cpf" | "phone";
  maxLength?: number;
  disabled?: boolean;
}

export const TextInput = ({
  endLabel,
  placeholder,
  value,
  mask,
  maxLength = 100,
  disabled = false,
  ...props
}: TextFieldProps) => {
  const theme = useTheme();

  const inputMask = (value: string) => {
    if (mask === "cep") {
      maxLength = 9;
      return maskCEP(value);
    }

    if (mask === "cnpj") {
      maxLength = 18;
      return maskCNPJ(value);
    }

    if (mask === "cpf") {
      maxLength = 14;
      return maskCPF(value);
    }

    if (mask === "phone") {
      maxLength = 15;
      return maskPhone(value);
    }

    return value;
  };

  return (
    <Container>
      <Input
        placeholder={placeholder}
        maxLength={maxLength}
        value={value.length > 0 ? inputMask(value) : value}
        disabled={disabled}
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
