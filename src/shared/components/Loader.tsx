import styled, { css, keyframes } from "styled-components";

export const Loader = styled.div`
	${({ theme }) => css`
		border: transparent solid 5px;
		border-color: ${theme.colors.purple.default} transparent;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		animation: ${rotate} linear 0.8s infinite;
	`}
`;

const rotate = keyframes`
    from {
        transform: rotateZ(0deg);
    }

    to {
        transform: rotateZ(360deg);
    }

`;
