import { useState } from "react"
import styled, { css, useTheme } from "styled-components"

import { Typography } from "../Typography/Typography"
import { NumberInput } from "../NumberInput/NumberInput"
import { Button } from "../Button/Button"
import { Trash } from "phosphor-react"
import { handleConvertPriceToBRL } from "../../utils/formatCurrency"

interface CoffeeCartProps {
  id: number
  title: string
  imageUrl: string
  price: number
}

interface CartItemProps {
  coffee: CoffeeCartProps
  minQuantity?: number
  maxQuantity?: number
}

export const CartItem = ({
  coffee,
  minQuantity,
  maxQuantity,
  ...props
}: CartItemProps) => {
  const [quantity, setQuantity] = useState<number>(1)

  const theme = useTheme()

  const { title, id, imageUrl, price } = coffee || []

  return (
    <Container {...props}>
      <img src={imageUrl} alt={title} />

      <InfoContainer>
        <Typography variant="h4">{title}</Typography>

        <QuantityBox>
          <NumberInput
            value={quantity}
            onChange={setQuantity}
            min={minQuantity}
            max={maxQuantity}
          />
          <Button color="base">
            <Trash size={16} color={theme.colors.purple.dark} />
            Remover
          </Button>
        </QuantityBox>
      </InfoContainer>

      <Typography
        color={theme.colors.base.text}
        variant="h4Bold"
        className="ml-[50px]"
      >
        {handleConvertPriceToBRL(price)}
      </Typography>
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => css`
    align-items: flex-start;
    background: ${theme.colors.base.card};
    display: flex;
    justify-content: flex-start;
    padding: 8px;
    position: relative;
    width: auto;

    img {
      margin-right: 20px;
      max-width: 64px;
    }
  `}
`

const InfoContainer = styled.div`
  ${() => css`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
  `}
`

const QuantityBox = styled.div`
  ${() => css`
    align-items: center;
    display: flex;
    gap: 8px;
    margin-top: 8px;
  `}
`
