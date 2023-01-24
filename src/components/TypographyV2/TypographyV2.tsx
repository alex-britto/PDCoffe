import styled, { useTheme } from "styled-components";

const variants = {
  display: {
    fontSize: "48px",
    fontFamily: "'Baloo 2', cursive",
    fontWeight: 800,
    component: "h1",
  },
  subDisplay: {
    fontSize: "20px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 400,
    component: "h2",
  },
  heading: {
    fontSize: "32px",
    fontFamily: "'Baloo 2', cursive",
    fontWeight: 800,
    component: "h2",
  },
  subHeading: {
    fontSize: "20px",
    fontFamily: "'Baloo 2', cursive",
    fontWeight: 700,
    component: "h3",
  },
  body: {
    fontSize: "16px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 400,
    component: "p",
  },
  subTitle: {
    fontSize: "14px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 400,
    component: "p",
  },
};

interface StyledTypographyV2Props {
  variant: keyof typeof variants;
  size?: string;
  weight?: 400 | 700 | 800;
  color?: string;
}

interface TypographyProps extends StyledTypographyV2Props {
  as?: React.ElementType;
  children: React.ReactNode;
}

const StyledTypographyV2 = styled.p<StyledTypographyV2Props>`
  ${({ variant, size, weight, color }) => ({
    ...variants[variant],
    ...(size && { fontSize: size }),
    ...(weight && { fontWeight: weight }),
    color: color,
  })}
`;

function TypographyV2({
  as,
  variant,
  color,
  children,
  ...props
}: TypographyProps) {
  console.log(variant);
  const theme = useTheme();
  return (
    <StyledTypographyV2
      color={color || theme.colors.base.text}
      as={as || variants[variant].component}
      variant={variant}
      {...props}>
      {children}
    </StyledTypographyV2>
  );
}

export default TypographyV2;
