import {
  Badge,
  CartButton,
  SelectQuantityInput,
  Typography,
} from "../../components";
import {
  CardCoffeeImage,
  CardContainer,
  CardContent,
  CardFooter,
  TagsContainer,
} from "./styles";
import { HTMLAttributes, useState } from "react";
import { ICartItem, ICoffee } from "../../@types/coffee";

import { ShoppingCart } from "phosphor-react";
import { handleConvertPriceNumberToString } from "../../utils";
import { useTheme } from "styled-components";

interface CardCoffeeProps extends HTMLAttributes<HTMLDivElement> {
  coffee: ICoffee;
  onAddToCart: (coffee: ICartItem) => void;
}

export function CatalogItem({
  coffee: { id, title, description, price, imageUrl, tags },
  onAddToCart,
}: CardCoffeeProps) {
  const [quantity, setQuantity] = useState(1);
  const theme = useTheme();

  return (
    <CardContainer>
      <CardCoffeeImage>
        <img src={imageUrl} alt={title} />
      </CardCoffeeImage>

      <CardContent>
        <TagsContainer>
          {tags?.map((tag, index) => (
            <Badge key={index} tag={tag} />
          ))}
        </TagsContainer>

        <Typography
          size={20}
          weight={700}
          height="160%"
          family="Baloo 2"
          color={theme.colors.base.subtitle}
        >
          {title}
        </Typography>

        <Typography size={14} color={theme.colors.base.label}>
          {description}
        </Typography>
      </CardContent>

      <CardFooter>
        <div>
          <Typography color={theme.colors.base.text}>R$</Typography>

          <Typography
            size={24}
            weight={800}
            color={theme.colors.base.subtitle}
            family="Baloo 2"
          >
            {handleConvertPriceNumberToString(price)}
          </Typography>
        </div>

        <SelectQuantityInput
          value={quantity}
          onChange={(e) => setQuantity(e)}
        />

        <CartButton
          onClick={() => onAddToCart({ id, title, price, quantity, imageUrl })}
          icon={<ShoppingCart size={22} weight="fill" />}
        />
      </CardFooter>
    </CardContainer>
  );
}
