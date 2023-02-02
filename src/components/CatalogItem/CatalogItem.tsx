import { useState } from "react"
import styled, { css, useTheme } from "styled-components"

import { Status } from "../Status/Status"
import { Typography } from "../Typography/Typography"
import { NumberInput } from "../NumberInput/NumberInput"
import { Button } from "../Button/Button"
import { ShoppingCartSimple } from "phosphor-react"
import { handleConvertPriceNumberToString } from "../../utils/formatCurrency"

export interface CoffeeProps {
  id: number
  title: string
  description: string
  imageUrl: string
  price: number
  tags: string[]
}

interface CatalogItemProps extends React.HTMLAttributes<HTMLDivElement> {
  coffee: CoffeeProps
  minQuantity?: number
  maxQuantity?: number
  onAddToCart: (coffee: CoffeeProps, quantity: number) => void
}

export const CatalogItem = ({
  coffee,
  onAddToCart,
  minQuantity,
  maxQuantity,
  ...props
}: CatalogItemProps) => {
  const [quantity, setQuantity] = useState<number>(1)

  const theme = useTheme()

  const { title, id, description, imageUrl, price, tags } = coffee

  const handleCartClick = () => {
    onAddToCart(coffee, quantity)
  }

  return (
    <Container {...props}>
      <Content>
        <img src={imageUrl} alt={title} />

        <StatusContainer>
          {tags?.map((tag, index) => (
            <Status label={tag} key={index} />
          ))}
        </StatusContainer>

        <Typography
          variant="h4"
          family="header"
          as="h4"
          className="mt-4 text-center"
        >
          {title}
        </Typography>

        <Typography
          variant="h5"
          color={theme.colors.base.label}
          className="mt-2 text-center"
        >
          {description}
        </Typography>

        <PriceContainer>
          <PriceBox>
            <Typography variant="h5" className="mr-1 mt-1">
              R$
            </Typography>
            <Typography variant="h3Bold" as="h3" family="header">
              {handleConvertPriceNumberToString(price)}
            </Typography>
          </PriceBox>

          <QuantityBox>
            <NumberInput
              value={quantity}
              onChange={setQuantity}
              min={minQuantity}
              max={maxQuantity}
            />
            <Button color="secondary" onClick={handleCartClick}>
              <ShoppingCartSimple size={22} color={theme.colors.white} />
            </Button>
          </QuantityBox>
        </PriceContainer>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  ${() => css`
    background: transparent;
    overflow: hidden;
  `}
`

const Content = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.base.card};
    border-radius: 6px 32px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
    padding: 20px;
    position: relative;
    width: auto;

    img {
      margin-top: -40px;
    }
  `}
`

const StatusContainer = styled.div`
  ${() => css`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    justify-content: center;
    margin-top: 12px;
    width: 100%;
  `}
`

const PriceContainer = styled.div`
  ${() => css`
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    gap: 23px;
    justify-content: center;
    margin-top: 33px;
    width: 100%;

    @media (max-width: 1200px) {
      flex-wrap: wrap;
    }
  `}
`

const PriceBox = styled.div`
  ${() => css`
    align-items: center;
    display: flex;
  `}
`

const QuantityBox = styled.div`
  ${() => css`
    align-items: center;
    display: flex;
    gap: 8px;
  `}
`
