import { ShoppingCartSimple } from "phosphor-react"
import { HTMLAttributes, useState } from "react"
import styled, { css, useTheme } from "styled-components"
import { Button, NumberInput, Status, Typography } from ".."

interface CatalogItemProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: string
  tags: string[]
  title: string
  description: string
  price: number
  quantity?: number
  onCartClick: (e: number) => void
}

export const CatalogItem = ({
  imageSrc,
  tags,
  title,
  description,
  price,
  quantity = 0,
  onCartClick,
  ...rest
}: CatalogItemProps) => {
  const theme = useTheme()
  const [numberInputValue, setNumberInputValue] = useState(quantity)
  function handleCartClick() {
    onCartClick(numberInputValue)
  }
  return (
    <Container className={`${rest?.className} `} {...rest}>
      <img src={imageSrc} alt={title} />
      <ul className="flex gap-2 mt-3">
        {tags.map((tag) => (
          <li key={tag}>
            <Status title={tag} />
          </li>
        ))}
      </ul>
      <Typography family="header" variant="h4" className="mt-4">
        {title}
      </Typography>
      <Typography
        variant="p"
        className="text-center mt-2"
        color={theme.colors.base.label}
      >
        {description}
      </Typography>
      <div className="flex items-center mt-8">
        <div className="flex items-center">
          <Typography
            variant="p"
            color={theme.colors.base.text}
            className="mr-1"
          >
            R$
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
          containerProps={{ className: "ml-6" }}
        />
        <Button
          bgColor={theme.colors.purple.dark}
          bgHoverColor={theme.colors.purple.default}
          icon={<ShoppingCartSimple size={22} color="white" />}
          onClick={() => handleCartClick()}
          className="ml-2"
        />
      </div>
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => css`
    width: 256px;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 20px;
    padding: 20px;

    border-radius: 6px 36px;

    img {
      border-radius: 50%;
      margin-top: -40px;
      width: fit-content;
    }
  `}
`
