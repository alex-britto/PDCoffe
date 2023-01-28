import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { Coffee } from "../../@types/coffee";
import { defaultTheme } from "../../styles/themes";
import { handleConvertPriceNumberToString } from "../../utils/formatCurrency";
import { CartButton } from "../CartButton";
import { SelectQuantityInput } from "../SelectQuantityInput";
import { Typography } from "../Typography";
import {
  CardCoffeeImage,
  CardContainer,
  CardContent,
  CardFooter,
  TagsContainer,
} from "./styles";

interface CardCoffeeProps {
  coffee: Coffee;
  onAddToCart: (coffee: Coffee, quantity: number) => void;
}

export function CatalogItem({
  coffee: { title, description, price, imageUrl, tags },
  onAddToCart,
}: CardCoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <CardContainer>
      <CardCoffeeImage>
        <img src={imageUrl} alt={title} />
      </CardCoffeeImage>

      <CardContent>
        <TagsContainer>
          {tags?.map((tag, index) => (
            <span key={index}>
              <Typography
                size={12}
                weight={700}
                color={defaultTheme.colors.yellow.dark}
              >
                {tag}
              </Typography>
            </span>
          ))}
        </TagsContainer>

        <Typography
          size={20}
          weight={700}
          color={defaultTheme.colors.base.subtitle}
          family={defaultTheme.fonts.baloo}
        >
          {title}
        </Typography>

        <Typography color={defaultTheme.colors.base.label}>
          {description}
        </Typography>
      </CardContent>

      <CardFooter>
        <div>
          <Typography color={defaultTheme.colors.base.text}>R$</Typography>

          <Typography
            size={24}
            weight={800}
            color={defaultTheme.colors.base.subtitle}
            family={defaultTheme.fonts.baloo}
          >
            {handleConvertPriceNumberToString(price)}
          </Typography>
        </div>

        <SelectQuantityInput
          value={quantity}
          onChange={(e) => setQuantity(e)}
        />

        <CartButton
          onClick={
            quantity > 0
              ? () =>
                  onAddToCart({ title, description, price, imageUrl }, quantity)
              : () => {}
          }
          icon={<ShoppingCart size={22} weight="fill" />}
        />
      </CardFooter>
    </CardContainer>
  );
}
