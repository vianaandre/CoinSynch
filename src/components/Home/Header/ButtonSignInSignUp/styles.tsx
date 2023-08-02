import styled from "styled-components";

export const ContainerButtonSignInSignUp = styled.div`
    width: 200px;

    display: flex;
    margin-left: ${({ theme }) => theme.SPACING(16)};

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
        margin-left: auto;
    }

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
        margin-left: 0px;
        flex-direction: column;
        align-items: center;
        margin-top: ${({ theme }) => theme.SPACING(5)};
        gap: ${({ theme }) => theme.SPACING(5)};
    }

    button {
        max-height: 32px;
        font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[14]};

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
            max-width: 140px;
        }
    }
`;