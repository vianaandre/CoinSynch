import styled from "styled-components";

export const ContainerCardAbout = styled.li`
    padding: ${({ theme }) => theme.SPACING(6)};
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: fit-content;
    width: calc(50% - 16px);
    max-width: 280px;

    background-color:  ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.05);

    border-radius: 6px;

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
        width: 100%;
        min-width: 200px;
    }

    div.icon {
        margin-bottom: ${({ theme }) => theme.SPACING(4)};

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
            svg {
                width: 40px;
                height: 40px;
            }
        }
    }

    h4.header {
        margin-top: ${({ theme }) => theme.SPACING(1)};
        margin-bottom: ${({ theme }) => theme.SPACING(2)};

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
            font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[24]};
        }

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
            font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[20]};
        } 
    }

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
        p.label {
            line-height: 170%;
        }
    }
`;