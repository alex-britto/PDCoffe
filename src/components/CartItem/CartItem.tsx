import { Trash } from "phosphor-react"
import { HTMLAttributes, useState } from "react"
import styled, { css, useTheme } from "styled-components"
import { Button, NumberInput, Typography } from ".."

interface CartItemProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: string
  title: string
  price: number
  quantity?: number
  onCartClick: (e: number) => void
  onRemoveClick: () => void
}

export const CartItem = ({
  imageSrc,
  tags,
  title,
  price,
  quantity = 0,
  onCartClick,
  onRemoveClick,
  ...rest
}: CartItemProps) => {
  const theme = useTheme()
  const [numberInputValue, setNumberInputValue] = useState(quantity)
  function handleCartClick() {
    onCartClick(numberInputValue)
  }
  function handleRemoveClick() {
    onRemoveClick()
  }
  return (
    <Container className="flex" {...rest}>
      <div>
        <img src={imageSrc} alt={title} />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <Typography family="header" variant="h4">
            {title}
          </Typography>
          <Typography
            family="header"
            variant="h3"
            color={theme.colors.base.text}
          >
            {new Intl.NumberFormat("pt-Br", {
              minimumFractionDigits: 2,
            }).format(price)}
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <NumberInput
            value={numberInputValue}
            onIncreaseClick={() =>
              setNumberInputValue((numberInputValue) => numberInputValue + 1)
            }
            onDecreaseClick={() =>
              setNumberInputValue((numberInputValue) => numberInputValue - 1)
            }
            min={1}
            max={10}
          />
          <Button
            variant="small"
            label="remover"
            bgColor={theme.colors.base.button}
            bgHoverColor={theme.colors.base.hover}
            textColor={theme.colors.base.subtitle}
            icon={<Trash size={16} color={theme.colors.purple.default} />}
            onClick={() => console.log("test")}
          />
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => css`
    max-width: 368px;
    background-color: ${theme.colors.base.card};

    img {
      border-radius: 50%;
      margin-top: -40px;
      width: fit-content;
    }
  `}
`
