import { CreditCard, Bank, Money } from "phosphor-react"
import { defaultTheme } from "../../styles/themes/defaultTheme"
import SelectInputList from "./SelectInputList"

const SelectInputExamples = () => {
  const selectItems = [{
    id: "1",
    title: "Crédito",
    icon: <CreditCard color={defaultTheme.colors.purple.dark} size={16} className="mr-3"/>,
  },
  {
    id: "2",
    title: "Débito",
    icon: <Bank color={defaultTheme.colors.purple.dark} size={16} className="mr-3" />,
  }, 
  {
    id: "3",
    title: "Dinheiro",
    icon: <Money color={defaultTheme.colors.purple.dark} size={16} className="mr-3" />,
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

export default SelectInputExamples