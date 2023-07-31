import styled from "styled-components";

export const ContainerInput = styled.div`
    width: 100%;
    height: fit-content;
    padding: ${({ theme }) => theme.SPACING(4)};
    max-height: ${({ theme }) => theme.SPACING(12)};

    display: flex;
    align-items: center;

    border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY[300]};
    border-radius: 6px;
    transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};

    svg {
        path {
            transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};
        }
    }

    &.focus {
        border-color: ${({ theme }) => theme.COLORS.PRIMARY[500]};
        transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};

        svg {
            path {
                transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};
                fill: ${({ theme }) => theme.COLORS.PRIMARY[500]};
            }
        }
    }

    input {
        display: flex;
        text-align: left;

        width: 100%;

        font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[16]};
        height: ${({ theme }) => theme.SPACING(4)};
        line-height: ${({ theme }) => theme.TYPOGRAPHY.SIZE[16]};
        font-family: ${({ theme }) => theme.TYPOGRAPHY.FONT};
        font-style: normal;
        font-weight: ${({ theme }) => theme.TYPOGRAPHY.WEIGHT.REGULAR};
        color: ${({ theme }) => theme.COLORS.TEXT_BASE};

        border: none;

        &::placeholder, &::-webkit-input-placeholder, &:-ms-input-placeholder, &::-moz-placeholder {
            color: ${({ theme }) => theme.COLORS.TEXT_BASE} !important;
        }

        &:focus {
            outline: none;
            box-shadow: none;
        }
    }
`;

export const Icon = styled.div`
    padding-right: ${({ theme }) => theme.SPACING(2)};
    display: flex;
    height: fit-content;
`;