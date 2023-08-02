import styled from "styled-components";

export const ContainerTablet = styled.div`
    display: none;
    flex-direction: column;

    box-shadow: 0px 4px 8px 0px rgba(77, 77, 77, 0.10);

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
        display: flex;
    }

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
        display: none;
    }

    div.container:first-child {
        padding: ${({ theme }) => theme.SPACING(3.5)} 0px;
        
        display: flex;
        align-items: center;
    }

    div.container_cryptos {
        width: 100%;
        
        border-top: 1px solid ${({ theme }) => theme.COLORS.SECONDARY[200]};
    }
`;