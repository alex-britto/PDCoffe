import { ChangeEventHandler, InputHTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { defaultTheme } from "../../styles/themes";
import Typography2 from "../Typography2";
import { Container, EndLabel, Input } from "./styles";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  endLabel: string;
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
        style={{
          fontFamily: defaultTheme.fonts.roboto,
        }}
      />

      {value.length === 0 && (
        <EndLabel>
          <Typography2
            family="Roboto"
            size={12}
            color={defaultTheme.colors.base.label}
          >
            {endLabel}
          </Typography2>
        </EndLabel>
      )}
    </Container>
  );
};
