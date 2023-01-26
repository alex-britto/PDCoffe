import { CatalogItem } from "../CatalogItem"
import { useTheme } from "styled-components"

import * as coffees from '../../assets/images'

const CatalogItemExample = () => {
    const theme = useTheme()

    return (
        <div className="m-4">
        <CatalogItem 
            imageSrc={coffees['Arabe']}
            title="Expresso Tradicional"
            tags={["Tradicional"]}
            subtitle="O tradicional café feito com água quente e grãos moídos"
            typographyColor={theme.colors.base.label}
            priceTag={9.90}
            onCartAdd={(value) => console.log(value)}
        />
        </div>
    )
}

export default CatalogItemExample