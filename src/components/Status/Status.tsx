import { HTMLAttributes } from "react"
import styled, { css } from "styled-components"

interface StatusProps extends HTMLAttributes<HTMLDivElement> {
  title: string
}

export const Status = ({ title, ...rest }: StatusProps) => {
  return (
    <Container className="px-2 py-1" {...rest}>
      {title}
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    text-transform: uppercase;
    color: ${theme.colors.yellow.dark};
    background-color: ${theme.colors.yellow.light};
    border-radius: 20px;
  `}
`
