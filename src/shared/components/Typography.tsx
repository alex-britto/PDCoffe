import { HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components";
import defaultTheme from "../../styles/themes/defaultTheme";

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
	children: ReactNode;
	color?: string;
	fontFamily?: keyof DefaultTheme["font"]["family"];
	fontSize?: keyof DefaultTheme["font"]["size"];
	lineHeight?: keyof DefaultTheme["font"]["height"];
	fontWeight?: keyof DefaultTheme["font"]["weight"];
	variant?: keyof typeof variants;
}

const variants = {
	h2: {
		fontFamily: `"${defaultTheme.font.family.Baloo2}"`,
		fontSize: defaultTheme.font.size[24],
		fontWeight: defaultTheme.font.weight.ExtraBold,
	},
	h3: {
		fontFamily: `"${defaultTheme.font.family.Baloo2}"`,
		fontSize: defaultTheme.font.size[20],
		fontWeight: defaultTheme.font.weight.Bold,
	},
	textBoldMedium: {
		fontFamily: `"${defaultTheme.font.family.Roboto}"`,
		fontSize: defaultTheme.font.size[16],
		fontWeight: defaultTheme.font.weight.Bold,
	},
	textMedium: {
		fontFamily: `"${defaultTheme.font.family.Roboto}"`,
		fontSize: defaultTheme.font.size[16],
		fontWeight: defaultTheme.font.weight.Regular,
	},
	textSmall: {
		fontFamily: `"${defaultTheme.font.family.Roboto}"`,
		fontSize: defaultTheme.font.size[14],
		fontWeight: defaultTheme.font.weight.Regular,
	},
};

const Typography = ({
	children,
	color,
	fontFamily,
	fontSize,
	lineHeight,
	fontWeight,
	variant,
	...rest
}: TypographyProps) => {
	return (
		<StyledTypography
			color={color}
			fontFamily={fontFamily}
			fontSize={fontSize}
			lineHeight={lineHeight}
			fontWeight={fontWeight}
			variant={variant}
			{...rest}
		>
			{children}
		</StyledTypography>
	);
};

export default Typography;

const StyledTypography = styled.p<TypographyProps>`
	${({
		theme,
		color,
		fontFamily,
		fontSize,
		lineHeight,
		fontWeight,
		variant,
	}) => css`
		color: ${color || "inherit"};

		${variant && variants[variant]}

		${fontFamily &&
		css`
			font-family: "${theme.font.family[fontFamily]}";
		`}
		${fontSize &&
		css`
			font-size: ${theme.font.size[fontSize]};
		`}
		${lineHeight &&
		css`
			line-height: ${theme.font.height[lineHeight]};
		`}
		${fontWeight &&
		css`
			font-weight: ${theme.font.weight[fontWeight]};
		`}
	`}
`;
