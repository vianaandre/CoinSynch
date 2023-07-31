import styled from "styled-components";

export const ContainerBanner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 499px;
    margin-top: 100px;

    div.container {
        display: flex;
        align-items: center;
        height: 505px;
    }
    img.image_effect {
        width: 100vw;
        margin-top: ${({ theme }) => theme.SPACING(16)};
    }
`;