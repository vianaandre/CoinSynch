import styled from "styled-components";

export const ContainerCopyRight = styled.div`
    padding: ${({ theme }) => theme.SPACING(6)} 0px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
        padding: ${({ theme }) => theme.SPACING(5)} 0px;
    }

    div.container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
            justify-content: center;
            
            p {
                display: none;
            }
        }
    }
`;