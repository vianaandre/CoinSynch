import styled from "styled-components";

export const ContainerDesktop = styled.div`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    
    div.container {
        padding: ${({ theme }) => theme.SPACING(4)} 0px;
        
        display: flex;
        align-items: center;
    }
`;