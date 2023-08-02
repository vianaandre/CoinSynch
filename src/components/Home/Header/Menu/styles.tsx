import styled from "styled-components";

export const ContainerMenu = styled.nav`
    margin-left: ${({ theme }) => theme.SPACING(10)};

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
        margin-left: 0px;
    }

    ul {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.SPACING(5)};

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
            flex-direction: column;
        }
        
        li {
            a {
                display: flex;
                padding: ${({ theme }) => theme.SPACING(1)};
            }
        }
    }
`;