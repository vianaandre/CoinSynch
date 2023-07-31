import styled from "styled-components";

export const ContainerFormSignIn = styled.form`
    display: flex;
    flex-direction: column;

    div.form_inputs {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.SPACING(6)};
    }

    button.forgot_password {
        color: ${({ theme }) => theme.COLORS.SECONDARY[500]};
        align-self: flex-end;
        margin-top: ${({ theme }) => theme.SPACING(2)};

        &:hover {
            text-decoration: underline;
        }
    }
    
    footer {
        margin-top: ${({ theme }) => theme.SPACING(6)};
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({ theme }) => theme.SPACING(6)};

        > p {
            display: flex;
            gap: 2px;
            button {
                display: flex;
                gap: 2px;
                p {
                    color: ${({ theme }) => theme.COLORS.SECONDARY[500]};
                    strong {
                        color: ${({ theme }) => theme.COLORS.PRIMARY[500]};
                    }
                }

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;