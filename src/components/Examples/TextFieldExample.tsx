import { useState } from "react"
import { TextField } from "../TextField/Textfield"

export const TextFieldExample = () => {
  const [value, setValue] = useState<string>("")

  return (
    <>
      <TextField
        placeholder="Label"
        endLabel="Opcional"
        width="100%"
        maxWidth={500}
        className="mt-6"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <h1>Texto: {value}</h1>
    </>
  )
}
