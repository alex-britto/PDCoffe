import { ChangeEventHandler, InputHTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Input } from "./styles";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
  maxWidth?: string;
}

interface IForm {
  value: string;
}

export const TextInput = ({
  optional = false,
  disabled,
  placeholder,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState("");

  const { register } = useForm<IForm>();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container {...props}>
      <Input
        placeholder={placeholder}
        {...register("value")}
        onChange={onChange}
        disabled={disabled}
      />

      {optional && value.length === 0 && !disabled && <p>Opcional</p>}
    </Container>
  );
};
