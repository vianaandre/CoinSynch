import styled from "styled-components";

export const ContainerInfos = styled.div`
    max-width: 580px;

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
        width: 320px;
    }

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1.header {
        color: ${({ theme }) => theme.COLORS.PRIMARY[500]};
        max-width: 520px;

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
            text-align: center;
            line-height: 160%;
        }
    }

    h5.header { 
        margin-top: ${({ theme }) => theme.SPACING(6)};
        margin-bottom: ${({ theme }) => theme.SPACING(8)};

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
            margin-top: ${({ theme }) => theme.SPACING(4)};
            margin-bottom: ${({ theme }) => theme.SPACING(6)};
        }

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
            font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[14]};
            line-height: 170%;
            text-align: center;

            margin-top: ${({ theme }) => theme.SPACING(2)};
            margin-bottom: ${({ theme }) => theme.SPACING(6)};
        }
    }

    button.signup {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.SPACING(2.5)};
        margin-bottom: ${({ theme }) => theme.SPACING(10)};
        max-width: 278px;

        font-weight: ${({ theme }) => theme.TYPOGRAPHY.WEIGHT.BOLD};

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
            max-width: 232px;
        }

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
            margin-bottom: ${({ theme }) => theme.SPACING(6)};
        }
    }

    div.badges {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.SPACING(8)};

        p {
            padding: ${({ theme }) => theme.SPACING(1)} ${({ theme }) => theme.SPACING(4)};
            border-radius: 4px;

            font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[20]};
            font-family: ${({ theme }) => theme.TYPOGRAPHY.FONT};
            font-style: normal;
            line-height: ${({ theme }) => theme.TYPOGRAPHY.HEIGHT[20]};
            
            background-color: ${({ theme }) => theme.COLORS.PRIMARY[100]};
            color: ${({ theme }) => theme.COLORS.PRIMARY[500]};

            text-align: center;

            @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[16]};
            }
        }
    }
`;