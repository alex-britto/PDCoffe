import { HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components";

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
	children: ReactNode;
	color?: string;
	fontFamily?: keyof DefaultTheme["font"]["family"];
	fontSize?: keyof DefaultTheme["font"]["size"];
	lineHeight?: keyof DefaultTheme["font"]["height"];
	fontWeight?: keyof DefaultTheme["font"]["weight"];
}

const Typography = ({
	children,
	color,
	fontFamily,
	fontSize,
	lineHeight,
	fontWeight,
	...rest
}: TypographyProps) => {
	return (
		<StyledTypography
			color={color}
			fontFamily={fontFamily}
			fontSize={fontSize}
			lineHeight={lineHeight}
			fontWeight={fontWeight}
			{...rest}
		>
			{children}
		</StyledTypography>
	);
};

export default Typography;

const StyledTypography = styled.p<TypographyProps>`
	${({ theme, color, fontFamily, fontSize, lineHeight, fontWeight }) => css`
		color: ${color || "inherit"};
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
