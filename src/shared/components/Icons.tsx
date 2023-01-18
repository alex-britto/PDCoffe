import { IconProps, Trash } from "phosphor-react";
import styled from "styled-components";

const icons = {
	Trash: Trash,
};

export interface CustomIconProps extends IconProps {
	name: keyof typeof icons;
}

const Icon = ({ name, ...rest }: CustomIconProps) => {
	const SelectedIcon = icons[name];

	return (
		<StyledIcon>
			<SelectedIcon {...rest} />
		</StyledIcon>
	);
};

export default Icon;

const StyledIcon = styled.div<IconProps>``;
