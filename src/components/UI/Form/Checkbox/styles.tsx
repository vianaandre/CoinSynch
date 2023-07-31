import styled from "styled-components";

export const ContainerCheckbox = styled.div`
    display: flex;
    align-items: flex-start;

    width: 100%;

    .checkbox_root {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        
        width: ${({ theme }) => theme.SPACING(4)};
        height: ${({ theme }) => theme.SPACING(4)};

        border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY[500]};
        border-radius: 4px;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .checkbox_indicator {
        background-color: ${({ theme }) => theme.COLORS.PRIMARY[500]};
        
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    label {
        margin-left: ${({ theme }) => theme.SPACING(4)};
        flex: 1;
    }
`;