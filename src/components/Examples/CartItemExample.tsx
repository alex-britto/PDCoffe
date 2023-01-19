import { useState } from 'react';
import Expresso from '../../assets/icons/expresso.png'
import { CartItem } from "../../components";

const CartItemExample = () => {
    const [inputValue, setInputValue] = useState(0)
    const expressoIcon = <img src={Expresso} />

    return (
        <div className="m-4">
        <CartItem
            icon={expressoIcon}
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