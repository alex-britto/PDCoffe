import { useState } from "react"
import { NumberInput } from "../NumberInput/NumberInput"

export const NumberInputExample = () => {
  const [number, setNumber] = useState<number>(1)

  return (
    <>
      <NumberInput className="mt-6" value={number} onChange={setNumber} />
      <h1>Valor: {number}</h1>
    </>
  )
}
