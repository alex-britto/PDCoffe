import { ChangeEventHandler, InputHTMLAttributes, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={placeholder}
          {...register("value")}
          onChange={onChange}
        />

        {value.length === 0 && <EndLabel>{endLabel}</EndLabel>}
      </form>
    </Container>
  );
};
