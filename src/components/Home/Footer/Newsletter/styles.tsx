import styled from "styled-components";

export const ContainerNewsletter = styled.div`
    width: 100vw;
    padding: ${({ theme }) => theme.SPACING(30)} 0px;

    background: linear-gradient(138deg, #FBAB34 0%, #AD721A 100%);
    
    position: relative;
    overflow: hidden;

    img.image_effect {
        width: 100%;
        position: absolute;
        top: 0px;
    }

    div.container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: relative;
        z-index: 1;
        
        div.left {
            width: 50%;

            h4.header {
                color: ${({ theme }) => theme.COLORS.PRIMARY[200]};
            }
            h2.header {
                color: ${({ theme }) => theme.COLORS.WHITE};
                margin-top: ${({ theme }) => theme.SPACING(1)};
            }
            p.text {
                color: ${({ theme }) => theme.COLORS.WHITE};
                margin-top: ${({ theme }) => theme.SPACING(4)};
                max-width: 385px;
            }
        }

        div.right {
            width: 50%;
            display: flex;
            justify-content: center;

            form {
                width: 100%;
                max-width: 384px;
                display: flex;
                flex-direction: column;
                gap: ${({ theme }) => theme.SPACING(5)};

                div.input_email {
                    display: flex;
                    flex-direction: column;
                    gap: ${({ theme }) => theme.SPACING(2)};

                    label {
                        color: ${({ theme }) => theme.COLORS.WHITE};
                    }

                    > div {
                        box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.10);
                        background-color: ${({ theme }) => theme.COLORS.WHITE};
                        border: none;

                        input {
                            &::placeholder {
                                color: ${({ theme }) => theme.COLORS.SECONDARY[400]};
                            }
                        }
                    }
                }
            }
        }
    }
`;