import {
	Bank,
	CreditCard,
	IconProps,
	Minus,
	Money,
	Plus,
	ShoppingCart,
	Trash,
} from "phosphor-react";
import styled from "styled-components";

const icons = {
	Trash: Trash,
	Cart: ShoppingCart,
	Minus: Minus,
	Plus: Plus,
	CreditCard: CreditCard,
	Bank: Bank,
	Money: Money,
};

export type Icons = keyof typeof icons;

export interface CustomIconProps extends IconProps {
	name: Icons;
}

const CustomIcon = ({ name, ...rest }: CustomIconProps) => {
	const SelectedIcon = icons[name];

	return (
		<StyledIcon>
			<SelectedIcon {...rest} />
		</StyledIcon>
	);
};

export default CustomIcon;

const StyledIcon = styled.div<IconProps>``;
