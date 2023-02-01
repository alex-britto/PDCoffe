/* eslint-disable indent */
import { FC } from "react";
import styled from "styled-components";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  family?: "Baloo 2" | "Roboto";
  weight?: "regular" | "bold" | "extrabold";
  height?: "130%" | "160%";
  size?: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32 | 48;
  color?: string;
}

const TypographyStyled = styled.p<TypographyProps>`
  font-family: ${(props) =>
    props.family === "Baloo 2"
      ? "Baloo 2, cursive"
      : props.family === "Roboto"
      ? "Roboto, sans-serif"
      : "Arial, sans-serif"};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.height};
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => props.color};
`;

const Typography2: FC<TypographyProps> = ({ children, ...props }) => (
  <TypographyStyled {...props}>{children}</TypographyStyled>
);

Typography2.defaultProps = {
  family: "Roboto",
  weight: "regular",
  height: "130%",
  size: 16,
  color: "#000",
};

export default Typography2;
