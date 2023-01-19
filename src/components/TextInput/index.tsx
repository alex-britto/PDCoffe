import { InputHTMLAttributes } from "react";
import { Container, Input } from "./styles";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
  maxWidth?: string;
}

export const TextInput = ({
  optional = false,
  disabled,
  placeholder,
  onChange,
  ...props
}: TextFieldProps) => {
  return (
    <Container {...props}>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {optional && !disabled && <p>Opcional</p>}
    </Container>
  );
};
