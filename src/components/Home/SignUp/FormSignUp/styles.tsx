import styled from "styled-components";

export const ContainerFormSignUp = styled.form`
    display: flex;
    flex-direction: column;

    div.form_inputs {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.SPACING(6)};
    }

    div.terms {
        margin-top: ${({ theme }) => theme.SPACING(6)};
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

            @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[12]};
            }

            button {
                display: flex;
                gap: 2px;
                p {
                    color: ${({ theme }) => theme.COLORS.SECONDARY[500]};

                    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                        font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[12]};
                    }

                    strong {
                        color: ${({ theme }) => theme.COLORS.PRIMARY[500]};

                        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                            font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[12]};
                        }
                    }
                }

                @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                    strong {
                        font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[12]};
                    }
                }

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;