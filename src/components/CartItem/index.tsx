import { Trash } from "phosphor-react";
import { useState } from "react";
import { ICartItem } from "../../@types/coffee";
import { defaultTheme } from "../../styles/themes";
import { handleConvertPriceToBRL } from "../../utils/";
import { DeleteButton } from "../DeleteButton";
import { SelectQuantityInput } from "../SelectQuantityInput";
import { Typography } from "../Typography";
import {
  CardButtonsContainer,
  CardCoffeeImage,
  CardContainer,
  CardContent,
  Separator,
} from "./styles";

interface CardCoffeeProps {
  coffee: ICartItem;
  onRemove: (id: number) => void;
}

export function CartItem({
  coffee: { title, price, imageUrl, quantity },
  onRemove,
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
          <Typography size={16} color={defaultTheme.colors.base.subtitle}>
            {title}
          </Typography>

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
              onClick={() => onRemove(1)}
            />
          </CardButtonsContainer>
        </CardContent>

        <div
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Typography
            size={16}
            weight={700}
            color={defaultTheme.colors.base.text}
          >
            {handleConvertPriceToBRL(price)}
          </Typography>
        </div>
      </CardContainer>
      <Separator />
    </>
  );
}
