import { CatalogItem } from "../CatalogItem"
import Expresso from '../../assets/icons/expresso.png'
import { useTheme } from "styled-components"
import { useState } from "react"

const CatalogItemExample = () => {
    const theme = useTheme()
    const expressoIcon = <img src={Expresso} />

    const [inputValue, setInputValue] = useState(0)

    return (
        <div className="m-4">
        <CatalogItem 
            icon={expressoIcon} 
            statusBgColor={theme.colors.yellow.light} 
            statusColor={theme.colors.yellow.dark} 
            statusText="Tradicional" 
            title="Expresso tradicional"
            subtitle="O tradicional café feito com água quente e grãos moídos"
            typographyColor={theme.colors.base.label}
            priceTag="9,90"
            numberInputValue={inputValue}
            onSubtraction={() => setInputValue((inputValue) => inputValue > 0 ? inputValue - 1 : inputValue)}
            onAddition={() => setInputValue((inputValue) => inputValue + 1)}
        />
        </div>
    )
}

export default CatalogItemExample