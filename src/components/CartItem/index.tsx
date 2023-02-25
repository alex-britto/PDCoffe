import {
  CardButtonsContainer,
  CardCoffeeImage,
  CardContainer,
  CardContent,
  Separator,
} from "./styles";
import {
  DeleteButton,
  SelectQuantityInput,
  Typography,
} from "../../components";

import { ICartItem } from "../../@types/coffee";
import { Trash } from "phosphor-react";
import { handleConvertPriceToBRL } from "../../utils/";
import { useState } from "react";
import { useTheme } from "styled-components";

interface CardCoffeeProps {
  coffee: ICartItem;
  onRemoveCartItem: (id: number) => void;
}

export function CartItem({
  coffee: { id, title, price, imageUrl, quantity },
  onRemoveCartItem,
}: CardCoffeeProps) {
  const [quantityValue, setQuantityValue] = useState(quantity);
  const theme = useTheme();

  const handleChangeQuantity = () => {};

  return (
    <>
      <CardContainer>
        <CardCoffeeImage>
          <img src={imageUrl} alt={title} />
        </CardCoffeeImage>

        <CardContent>
          <Typography color={theme.colors.base.subtitle}>{title}</Typography>

          <CardButtonsContainer>
            <SelectQuantityInput
              value={quantity}
              onChange={handleChangeQuantity}
            />

            <DeleteButton
              icon={<Trash size={22} color={theme.colors.purple.default} />}
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
          <Typography weight={700} color={theme.colors.base.text}>
            {handleConvertPriceToBRL(price)}
          </Typography>
        </div>
      </CardContainer>
      <Separator />
    </>
  );
}
