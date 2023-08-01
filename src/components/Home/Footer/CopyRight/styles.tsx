import styled from "styled-components";

export const ContainerCopyRight = styled.div`
    padding: ${({ theme }) => theme.SPACING(6)} 0px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    div.container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;