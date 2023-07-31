import styled from "styled-components";

export const ContainerModal = styled.div<{
    open: boolean;
}>`
    background-color: ${({ theme }) => theme.COLORS.FILTER_BG};

    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 2000;

    height: 100vh;
    min-height: 700px;
    width: 100vw;

    display: ${({ open }) => open ? "flex" : "none"};
    align-items: center;
    justify-content: center;

    div.container_modal {
        width: 90%;
        max-width: 448px;
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 8px;
        box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.10);
        padding: ${({ theme }) => theme.SPACING(8)};
        position: relative;
        
        header {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: ${({ theme }) => theme.SPACING(6)};
            button.closed {
                position: absolute;
                top: ${({ theme }) => theme.SPACING(3)};
                right: ${({ theme }) => theme.SPACING(3)};
            }
        }
        div.content_modal {
            width: 100%;
        }
    }
`;