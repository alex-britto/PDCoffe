import { ReactNode } from "react"
import styled, { css } from "styled-components"

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
      <p>{label}</p>
    </Container>
  )
}

const Container = styled.div<{
  backgroundColor?: string
  color?: string
}>`
  ${({ theme, backgroundColor, color }) => css`
    background: ${backgroundColor
      ? backgroundColor
      : theme.colors.yellow.light};
    border-radius: 100px;
    color: ${color ? color : theme.colors.yellow.dark};
    font-size: 10px;
    font-weight: 700;
    padding: 4px 8px;
    text-transform: uppercase;
    width: fit-content;
  `}
`
