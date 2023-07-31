import styled from "styled-components";

export const ContainerMenu = styled.nav`
    margin-left: ${({ theme }) => theme.SPACING(10)};

    ul {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.SPACING(5)};
        
        li {
            a {
                display: flex;
                padding: ${({ theme }) => theme.SPACING(1)};
            }
        }
    }
`;