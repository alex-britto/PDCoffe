import { useState } from 'react';
import { CartItem } from "../../components";

import * as coffees from './../../assets/images'

const CartItemExample = () => {
    const [inputValue, setInputValue] = useState(0)

    return (
        <div className="m-4">
        <CartItem
            imageSrc={coffees['Espresso']}
            title="Expresso Tradicional"
            priceTag="R$ 9,90"
            inputValue={inputValue}
            onSubtraction={() => setInputValue((inputValue) => inputValue > 0 ? inputValue - 1 : inputValue)}
            onAddition={() => setInputValue((inputValue) => inputValue + 1)}
            onClickButton={() => console.log("item comprado")}
        />
        </div>
    )
}

export default CartItemExample