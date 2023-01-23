
import styled from "styled-components";

const variants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  // body: "p",
  text: "span",
};

const styles = {
  h1: {
    fontFamily: "'Baloo 2', cursive;",
    fontWeight: "700",
    fontSize: "48px",
  },
  h2: {
    fontFamily: "'Baloo 2', cursive;",
    fontWeight: "700",
    fontSize: "32px",
  },
  h3: {
    fontFamily: "'Baloo 2', cursive;",
    fontWeight: "700",
    fontSize: "24px",
  },
  h4: {
    fontFamily: "'Baloo 2', cursive;",
    fontWeight: "700",
    fontSize: "20px",
  },
  h5: {
    fontFamily: "'Baloo 2', cursive;",
    fontWeight: "700",
    fontSize: "18px",
  },
  h6: {
    fontFamily: "'Baloo 2', cursive;",
    fontWeight: "700",
    fontSize: "16px",
  },
  // body: {},
  text: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 400,
    fontSize: 14,
  },
};

interface TypographyProps {
  variant: keyof typeof variants;
  fontSize?: string;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 800 | 900;
  fontFamily?: "'Roboto', sans-serif" | "'Baloo 2', cursive";
}

const Typography = styled("span").attrs<TypographyProps>(
  ({ variant }) => ({
    as: variants[variant],
  })
)<TypographyProps>(
  ({ theme, color, fontFamily, variant, fontSize, fontWeight }) => `
color: ${color ?? theme.colors.base.text};
font-family: ${fontFamily ?? styles[variant].fontFamily};
font-size: ${fontSize ?? styles[variant].fontSize};
font-weight: ${fontWeight ?? 400};
`
);
export default Typography;
