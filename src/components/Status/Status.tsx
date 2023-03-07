import { ReactNode } from "react"
import styled, { css } from "styled-components"
import { defaultTheme } from "../../styles/themes/defaultTheme"

interface StatusProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  icon?: ReactNode
  color?: string
  backgroundColor?: string
}

export const Status = ({
  label,
  icon,
  color,
  backgroundColor,
  ...props
}: StatusProps) => {
  return (
    <Container {...props}>
      {icon && <span className="mr-3">{icon}</span>}
      <span>{label}</span>
    </Container>
  )
}

const Container = styled.div<{
  backgroundColor?: string
  color?: string
}>`
  ${({ backgroundColor, color }) => css`
    background: ${backgroundColor
      ? backgroundColor
      : defaultTheme.colors.yellow.light};
    border-radius: 100px;
    color: ${color ?? defaultTheme.colors.yellow.dark};
    font-family: Roboto, sans-serif;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.3;
    padding: 4px 8px;
    text-transform: uppercase;
    width: fit-content;
  `}
`
