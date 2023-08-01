import styled from "styled-components";

export const ContainerCryptos = styled.section`
    padding: ${({ theme }) => theme.SPACING(30)} 0px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    div.container {
        display: flex;
        flex-direction: column;
        align-items: center;

        div.list_cryptos {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top: ${({ theme }) => theme.SPACING(10)};
            
            ol {
                padding: ${({ theme }) => theme.SPACING(2)} ${({ theme }) => theme.SPACING(6)};
            }

            ul {
                padding: ${({ theme }) => theme.SPACING(4)} ${({ theme }) => theme.SPACING(6)};

                &:nth-child(even) {
                    background-color: ${({ theme }) => theme.COLORS.SECONDARY[100]};
                }
            }

            ol, ul {
                width: 100%;
                display: flex;
                align-items: center;

                li {
                    &.code {
                        width: 15%;
                    }
                    &.name {
                        width: 30%;
                        display: flex;
                        align-items: center;
                        gap: ${({ theme }) => theme.SPACING(4)};
                    }
                    &.price {
                        width: 30%;
                    }
                    &.change {
                        width: 23%;

                        &.positive {
                            color: ${({ theme }) => theme.COLORS.TERTIARY[700]};
                        }
                        &.negative {
                            color: ${({ theme }) => theme.COLORS.QUARTENARY[700]};
                        }
                    }
                    &.trade {
                        width: 7%;

                        button {
                            padding: ${({ theme }) => theme.SPACING(2)} 0px;
                            width: 80px;
                            
                            text-align: center;
                            
                            color: ${({ theme }) => theme.COLORS.WHITE};
                            background-color: ${({ theme }) => theme.COLORS.TERTIARY[700]};
                            
                            border-radius: 32px;
                            transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};

                            &:hover {
                                filter: brightness(0.9);
                                transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};
                            }
                            &:active {
                                filter: brightness(0.8);
                                transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};
                            }
                        }
                    }
                }
            }

            button.view {
                margin: 0 auto;
                margin-top: ${({ theme }) => theme.SPACING(5)};
                width: 200px;
            }
        }
    }
`;