import { ShoppingCart } from "phosphor-react";
import { HTMLAttributes, useState } from "react";
import { ICartItem, ICoffee } from "../../@types/coffee";
import { defaultTheme } from "../../styles/themes";
import { handleConvertPriceNumberToString } from "../../utils";
import { CartButton } from "../CartButton";
import { SelectQuantityInput } from "../SelectQuantityInput";
import Typography2 from "../Typography2";
import {
  CardCoffeeImage,
  CardContainer,
  CardContent,
  CardFooter,
  TagsContainer,
} from "./styles";

interface CardCoffeeProps extends HTMLAttributes<HTMLDivElement> {
  coffee: ICoffee;
  onAddToCart: (coffee: ICartItem) => void;
}

export function CatalogItem({
  coffee: { id, title, description, price, imageUrl, tags },
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
              <Typography2
                size={12}
                weight="bold"
                color={defaultTheme.colors.yellow.dark}
              >
                {tag}
              </Typography2>
            </span>
          ))}
        </TagsContainer>

        <Typography2
          size={20}
          weight="bold"
          height="160%"
          family="Baloo 2"
          color={defaultTheme.colors.base.subtitle}
        >
          {title}
        </Typography2>

        <Typography2 size={14} color={defaultTheme.colors.base.label}>
          {description}
        </Typography2>
      </CardContent>

      <CardFooter>
        <div>
          <Typography2 color={defaultTheme.colors.base.text}>R$</Typography2>

          <Typography2
            size={24}
            weight="extrabold"
            color={defaultTheme.colors.base.subtitle}
            family="Baloo 2"
          >
            {handleConvertPriceNumberToString(price)}
          </Typography2>
        </div>

        <SelectQuantityInput
          value={quantity}
          onChange={(e) => setQuantity(e)}
        />

        <CartButton
          onClick={() => onAddToCart({ title, price, quantity, imageUrl, id })}
          icon={<ShoppingCart size={22} weight="fill" />}
        />
      </CardFooter>
    </CardContainer>
  );
}
