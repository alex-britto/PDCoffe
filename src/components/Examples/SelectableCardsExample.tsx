import { useState } from "react"
import { Bank, CreditCard, Money } from "phosphor-react"
import { SelectableCards } from "../SelectableCards/SelectableCards"

export const SelectableCardsExample = () => {
  const [selectedValue, setSelectedValue] = useState("Credito")

  const selectableCardsItems = [
    {
      id: "Credito",
      icon: <CreditCard size={16} />,
      title: "Cartão de crédito",
    },
    {
      id: "Debito",
      icon: <Bank size={16} />,
      title: "Cartão de débito",
    },
    {
      id: "Boleto",
      icon: <Money size={16} />,
      title: "Boleto",
    },
  ]

  return (
    <>
      <SelectableCards
        items={selectableCardsItems}
        selectedDefault={selectedValue}
        onChange={setSelectedValue}
      />

      <p>Opção selecionada: {selectedValue}</p>
    </>
  )
}
