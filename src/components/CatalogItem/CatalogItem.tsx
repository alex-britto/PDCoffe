import { ReactNode, useState } from "react"
import styled, { css, useTheme } from "styled-components"

import ProductImg from "../../assets/Expresso.png"
import { Status } from "../Status/Status"
import { Typography } from "../Typography/Typography"
import { NumberInput } from "../NumberInput/NumberInput"
import { Button } from "../Button/Button"
import { ShoppingCartSimple } from "phosphor-react"
import { handleConvertPriceNumberToString } from "../../utils/formatCurrency"

interface CoffeeTypes {
  id: number
  title: string
  description: string
  imageUrl: string
  price: number
  tags: string[]
  icon?: ReactNode
}

interface CatalogItemProps {
  coffee: CoffeeTypes
  selected?: boolean
  onClick?: () => void
}

export const CatalogItem = ({
  coffee: { title, id, description, imageUrl, price, tags, icon },
  selected = false,
  onClick,
  ...props
}: CatalogItemProps) => {
  const [quantity, setQuantity] = useState<number>(1)

  const theme = useTheme()

  return (
    <Container {...props} onClick={onClick}>
      <Content>
        {icon && <span className="mr-3">{icon}</span>}

        <Image src={imageUrl} alt={title} />

        {tags?.map((tag, index) => (
          <StatusContainer>
            <Status label={tag} />
          </StatusContainer>
        ))}

        <Typography variant="h2" className="mb-2">
          {title}
        </Typography>

        <Typography variant="body" color={theme.colors.base.label}>
          {description}
        </Typography>

        <PriceContainer>
          <PriceBox>
            <Typography
              color={theme.colors.base.text}
              variant="body"
              className="mr-1 mt-1"
            >
              R$
            </Typography>
            <Typography color={theme.colors.base.text} variant="h1">
              {handleConvertPriceNumberToString(price)}
            </Typography>
          </PriceBox>

          <QuantityBox>
            <NumberInput value={quantity} onChange={setQuantity} />
            <Button color="secondary">
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
  `}
`

const Image = styled.img`
  ${() => css`
    margin-top: -40px;
  `}
`

const StatusContainer = styled.div`
  ${() => css`
    align-items: center;
    display: flex;
    gap: 4px;
    justify-content: center;
    margin-bottom: 16px;
    margin-top: 12px;
    width: 100%;
  `}
`

const PriceContainer = styled.div`
  ${() => css`
    align-items: center;
    display: flex;
    gap: 23px;
    justify-content: center;
    margin-top: 33px;
    width: 100%;
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
