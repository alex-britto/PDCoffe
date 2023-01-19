import styled, { css } from "styled-components";


export const StyledStatus = styled.p.attrs<HTMLParagraphElement>({
  className: "m-6"
})`
  ${({ theme }) => css`
    background: ${theme.colors.yellow.light};
    border-radius: 100px;
    width: fit-content;
    padding: 4px 8px;
    font-family: ${theme.fonts.roboto};
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    color: ${theme.colors.yellow.dark}


  `}
`;






