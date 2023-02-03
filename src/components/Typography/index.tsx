import styled from "styled-components";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  family?: "Baloo 2" | "Roboto";
  weight?: 400 | 700 | 800;
  height?: "130%" | "160%";
  size?: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32 | 48;
  color?: string;
}

const TypographyStyled = styled.p<TypographyProps>`
  font-family: ${({ family }) =>
    family === "Baloo 2" ? "Baloo 2, cursive" : "Roboto, sans-serif"};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ height }) => height};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => color};
`;

const Typography = ({ children, ...props }: TypographyProps) => (
  <TypographyStyled {...props}>{children}</TypographyStyled>
);

Typography.defaultProps = {
  family: "Roboto",
  weight: 400,
  height: "130%",
  size: 16,
  color: "#000",
};

export default Typography;
