import styled from "styled-components";

export const ContainerCardAbout = styled.li`
    padding: ${({ theme }) => theme.SPACING(6)};
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: fit-content;
    width: calc(50% - 16px);
    max-width: 280px;

    background-color:  ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.05);

    border-radius: 6px;

    div.icon {
        margin-bottom: ${({ theme }) => theme.SPACING(4)};
    }

    h4.header {
        margin-top: ${({ theme }) => theme.SPACING(1)};
        margin-bottom: ${({ theme }) => theme.SPACING(2)};
    }
`;