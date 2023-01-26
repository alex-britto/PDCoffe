import { CartItem } from "../../components";

import * as coffees from './../../assets/images'

const CartItemExample = () => {

    return (
        <div className="m-4">
        <CartItem
            imageSrc={coffees['Espresso']}
            title="Expresso Tradicional"
            priceTag="R$ 9,90"
            onRemoveClick={() => console.log("removeu")}
        />
        </div>
    )
}

export default CartItemExample