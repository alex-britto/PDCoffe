import { CatalogItem, Spinner } from "../../components";
import { Container, ContentContainer } from "./styles";
import { ICartItem, ICoffee } from "../../@types/coffee";

import { HTMLAttributes } from "react";
import { useTheme } from "styled-components";

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  coffeeList: ICoffee[];
  isLoading: boolean;
  onAddToCart: (coffee: ICartItem) => void;
}

export const Menu = ({ coffeeList, isLoading, onAddToCart }: MenuProps) => {
  // THEME HOOK
  const theme = useTheme();

  return (
    <Container>
      <ContentContainer>
        {isLoading ? (
          <Spinner size={40} color={theme.colors.purple.default} />
        ) : (
          coffeeList.map((coffee) => (
            <CatalogItem
              key={coffee.id}
              coffee={coffee}
              onAddToCart={(coffee: ICartItem) => onAddToCart(coffee)}
            />
          ))
        )}
      </ContentContainer>
    </Container>
  );
};
