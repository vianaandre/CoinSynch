import styled from "styled-components";
import { VariantButton } from "./type";

export const ContainerButton = styled.button<{
    variant: VariantButton;
}>`
    width: 100%;
    padding: ${({ theme }) => theme.SPACING(3)} 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 32px;

    background-color: ${({ variant, theme }) => {
		switch(variant) {
		case "primary":
			return theme.COLORS.PRIMARY[500];
		case "secondary":
			return "trasparent";
		default:
			return theme.COLORS.PRIMARY[500];
		}
	}};
    color: ${({ variant, theme }) => {
		switch(variant) {
		case "primary":
			return theme.COLORS.WHITE;
		case "secondary":
			return theme.COLORS.TEXT_BASE;
		default:
			return theme.COLORS.WHITE;
		}
	}};
    font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[16]};
    font-family: ${({ theme }) => theme.TYPOGRAPHY.FONT};
    font-style: normal;
    font-weight: ${({ theme }) => theme.TYPOGRAPHY.WEIGHT.REGULAR};
    line-height: ${({ theme }) => theme.TYPOGRAPHY.HEIGHT[16]};

    cursor: pointer;
    transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};

    &:hover {
        filter: brightness(0.9);
        transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};
    }
    &:active {
        filter: brightness(0.8);
        transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};
    }
`;