import styled from "styled-components";

export const ContainerBanner = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 499px;
    margin-top: ${({ theme }) => theme.SPACING(25)};

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
        margin-top: ${({ theme }) => theme.SPACING(15.5)};
    }

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
        margin-top: ${({ theme }) => theme.SPACING(14)};
    }

    div.container {
        display: flex;
        align-items: center;
        height: 505px;

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
            height: 320px;
        }
    }
    img.image_effect {
        width: 100vw;
        margin-top: ${({ theme }) => theme.SPACING(16)};

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
            object-fit: cover;
            margin-top: ${({ theme }) => theme.SPACING(0)};
        }

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
            margin-top: ${({ theme }) => theme.SPACING(-10)};
        }
    }
`;