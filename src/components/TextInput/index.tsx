import { ChangeEventHandler, InputHTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";

import { useTheme } from "styled-components";
import Typography from "../Typography";
import { Container, EndLabel, Input } from "./styles";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  endLabel?: string;
  placeholder: string;
}

interface IFormInput {
  value: string;
}

export const TextInput = ({
  endLabel,
  placeholder,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState<string>("");
  const theme = useTheme();

  const { register } = useForm<IFormInput>();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container {...props}>
      <Input
        placeholder={placeholder}
        {...register("value")}
        onChange={onChange}
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
