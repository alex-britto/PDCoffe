import { ReactNode, useState } from "react"
import styled, { css } from "styled-components"

interface CatalogItemProps {
  title?: string
  icon?: ReactNode
  selected?: boolean
  onClick?: () => void
}

import ProductImg from "../../assets/expresso.png"
import { Status } from "../Status/Status"
import { Typography } from "../Typography/Typography"
import { defaultTheme } from "../../styles/themes/defaultTheme"
import { NumberInput } from "../NumberInput/NumberInput"
import { Button } from "../Button/Button"
import { ShoppingCartSimple } from "phosphor-react"

export const CatalogItem = ({
  title,
  icon,
  selected = false,
  onClick,
  ...props
}: CatalogItemProps) => {
  const [quantity, setQuantity] = useState<number>(1)

  return (
    <Container {...props} onClick={onClick}>
      <Content>
        {icon && <span className="mr-3">{icon}</span>}
        <Image src={ProductImg} />
        <Status label="Tradicional" className="mt-3 mb-4" />
        <Typography variant="h2" className="mb-2">
          Expresso Tradicional
        </Typography>
        <Typography variant="body" color={defaultTheme.colors.base.label}>
          O tradicional café feito com água quente e grãos moídos
        </Typography>
        <PriceContainer>
          <PriceBox>
            <Typography
              color={defaultTheme.colors.base.text}
              variant="body"
              className="mr-1 mt-1"
            >
              R$
            </Typography>
            <Typography color={defaultTheme.colors.base.text} variant="h1">
              9,90
            </Typography>
          </PriceBox>

          <QuantityBox>
            <NumberInput
              value={quantity}
              onChange={(value) => setQuantity(value)}
            />
            <Button color="secondary">
              <ShoppingCartSimple size={22} color={defaultTheme.colors.white} />
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

const Image = styled.img`
  ${() => css`
    margin-top: -40px;
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
