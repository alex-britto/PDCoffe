import { defaultTheme } from "../../styles/themes/defaultTheme"
import SelectInput from "./SelectInput"

const SelectInputExamples = () => {
  return (
    <>
    <SelectInput 
      variant="credit"
      label="Crédito"
      maxWidth={178}
      icon
      iconColor={defaultTheme.colors.purple.default} className="m-4" />
       <SelectInput 
      variant="debt"
      label="Débito"
      maxWidth={178}
      icon
      iconColor={defaultTheme.colors.purple.default} className="m-4" />
      <SelectInput 
     variant="cash"
     label="Dinheiro"
     maxWidth={178}
     icon
     iconColor={defaultTheme.colors.purple.default} className="m-4" />
    </>
  )
}

export default SelectInputExamples