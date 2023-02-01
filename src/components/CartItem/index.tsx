import { Trash } from "phosphor-react";
import { useState } from "react";
import { ICartItem } from "../../@types/coffee";
import { defaultTheme } from "../../styles/themes";
import { handleConvertPriceToBRL } from "../../utils/";
import { DeleteButton } from "../DeleteButton";
import { SelectQuantityInput } from "../SelectQuantityInput";
import Typography2 from "../Typography2";
import {
  CardButtonsContainer,
  CardCoffeeImage,
  CardContainer,
  CardContent,
  Separator,
} from "./styles";

interface CardCoffeeProps {
  coffee: ICartItem;
  onRemoveCartItem: (id: number) => void;
}

export function CartItem({
  coffee: { id, title, price, imageUrl, quantity },
  onRemoveCartItem,
}: CardCoffeeProps) {
  const [quantityValue, setQuantityValue] = useState(quantity);

  const handleChangeQuantity = () => {};
  return (
    <>
      <CardContainer>
        <CardCoffeeImage>
          <img src={imageUrl} alt={title} />
        </CardCoffeeImage>

        <CardContent>
          <Typography2 color={defaultTheme.colors.base.subtitle}>
            {title}
          </Typography2>

          <CardButtonsContainer>
            <SelectQuantityInput
              value={quantity}
              onChange={handleChangeQuantity}
            />

            <DeleteButton
              icon={
                <Trash size={22} color={defaultTheme.colors.purple.default} />
              }
              label="Remover"
              onClick={() => onRemoveCartItem(id)}
            />
          </CardButtonsContainer>
        </CardContent>

        <div
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Typography2 weight="bold" color={defaultTheme.colors.base.text}>
            {handleConvertPriceToBRL(price)}
          </Typography2>
        </div>
      </CardContainer>
      <Separator />
    </>
  );
}
