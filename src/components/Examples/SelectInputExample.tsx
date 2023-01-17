import { CreditCard, Bank, Money } from "phosphor-react"
import { useTheme } from "styled-components"
import SelectInputList from "../SelectInput/SelectInputList"

const SelectInputExample = () => {
  const theme = useTheme()

  const selectItems = [{
    id: "1",
    title: "Crédito",
    icon: <CreditCard color={theme.colors.purple.dark} size={16} className="mr-3"/>,
  },
  {
    id: "2",
    title: "Débito",
    icon: <Bank color={theme.colors.purple.dark} size={16} className="mr-3" />,
  }, 
  {
    id: "3",
    title: "Dinheiro",
    icon: <Money color={theme.colors.purple.dark} size={16} className="mr-3" />,
  }
]
  
  return (
    <div className="m-4">
      <SelectInputList 
      items={selectItems} 
      onClick={(item) => console.log("clicou no item", item)}
      selectedInputItemDefault="1"
      />
    </div>
  )
}

export default SelectInputExample