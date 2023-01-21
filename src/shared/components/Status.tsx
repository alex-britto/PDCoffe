import styled, { css } from "styled-components";

interface StatusProps {
	label: string;
}

const Status = ({ label }: StatusProps) => {
	return <StyledStatus>{label}</StyledStatus>;
};

export default Status;

const StyledStatus = styled.div`
	${({ theme }) => css`
		font-weight: 700;
		font-size: 10px;
		color: ${theme.colors.yellow.dark};
		background-color: ${theme.colors.yellow.light};
		padding: 4px 8px;
		border-radius: 100px;
		width: fit-content;
	`}
`;
