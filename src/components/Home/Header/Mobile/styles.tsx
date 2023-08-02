import styled from "styled-components";

export const ContainerMobile = styled.div`
    display: none;
    flex-direction: column;

    box-shadow: 0px 4px 8px 0px rgba(77, 77, 77, 0.10);

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
        display: flex;
    }

    div.container:first-child {
        padding: ${({ theme }) => theme.SPACING(3.5)} 0px;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    div.container_cryptos {
        width: 100%;
        
        border-top: 1px solid ${({ theme }) => theme.COLORS.SECONDARY[200]};

        padding: ${({ theme }) => theme.SPACING(2)} 0px;
    }

    div.menu_mobile {
        position: fixed;
        transform: translateX(200vw);
        z-index: 1000;
        transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};

        &.open {
            transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};
            transform: translateX(0px);
        }

        width: 100vw;
        height: 100vh;
        min-height: 500px;
        
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        div.logo {
            position: absolute;
            top: ${({ theme }) => theme.SPACING(4)};
            right: ${({ theme }) => theme.SPACING(4)};
        }

        button.back {
            position: absolute;
            top: ${({ theme }) => theme.SPACING(4)};
            left: ${({ theme }) => theme.SPACING(4)};

            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.SPACING(2)};

            svg {
                transform: rotate(180deg);
            }
        }
    }
`;