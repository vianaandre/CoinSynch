import styled from "styled-components";

export const ContainerIconButton = styled.button`
    background-color: transparent;
    padding: ${({ theme }) => theme.SPACING(1)};
    border-radius: 8px;
    transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.SECONDARY[200]};
        transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};
    }
`;