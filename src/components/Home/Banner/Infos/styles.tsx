import styled from "styled-components";

export const ContainerInfos = styled.div`
    max-width: 580px;

    h1.header {
        color: ${({ theme }) => theme.COLORS.PRIMARY[500]};
        max-width: 520px;
    }

    h5.header {
        margin-top: ${({ theme }) => theme.SPACING(6)};
        margin-bottom: ${({ theme }) => theme.SPACING(8)};
    }

    button.signup {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.SPACING(2.5)};
        margin-bottom: ${({ theme }) => theme.SPACING(20)};
        max-width: 278px;

        font-weight: ${({ theme }) => theme.TYPOGRAPHY.WEIGHT.BOLD};
    }

    div.badges {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.SPACING(8)};

        p {
            padding: ${({ theme }) => theme.SPACING(1)} ${({ theme }) => theme.SPACING(4)};
            border-radius: 4px;

            font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[20]};
            font-family: ${({ theme }) => theme.TYPOGRAPHY.FONT};
            font-style: normal;
            line-height: ${({ theme }) => theme.TYPOGRAPHY.HEIGHT[20]};
            
            background-color: ${({ theme }) => theme.COLORS.PRIMARY[100]};
            color: ${({ theme }) => theme.COLORS.PRIMARY[500]};

            text-align: center;
        }
    }
`;