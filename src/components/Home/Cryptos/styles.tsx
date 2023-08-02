import styled from "styled-components";

export const ContainerCryptos = styled.section`
    padding: ${({ theme }) => theme.SPACING(30)} 0px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
        padding: ${({ theme }) => theme.SPACING(20)} 0px;
    }

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
        padding: ${({ theme }) => theme.SPACING(14)} 0px;
    }

    div.container {
        display: flex;
        flex-direction: column;
        align-items: center;

        div.list_cryptos {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top: ${({ theme }) => theme.SPACING(10)};

            @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
                display: none;
            } 
            
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

        div.list_cryptos_mobile {
            display: none;

            @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
                display: flex;
            } 
            
            margin-top: ${({ theme }) => theme.SPACING(4)};
            width: 100%;
            flex-direction: column;

            div.header {
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: ${({ theme }) => theme.SPACING(2)} ${({ theme }) => theme.SPACING(4)};
            }

            div.accordion_crypto {
                width: 100%;

                div.item {
                    overflow: hidden;
                    margin-top: 1px;

                    &:nth-child(even) {
                        background-color: ${({ theme }) => theme.COLORS.FILTER_BG_CRYPTOS};
                    }
                }

                button.trigger {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: ${({ theme }) => theme.SPACING(4)};

                    &[data-state='open'] {
                        svg {
                            transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};
                            transform: rotate(180deg);
                        }
                    }
                    &[data-state='closed'] {
                        svg {
                            transition: ${({ theme }) => theme.TRANSITIONS.MEDIUM};
                            transform: rotate(0deg);
                        }
                    }

                    div.left {
                        display: flex;
                        align-items: center;
                        gap: ${({ theme }) => theme.SPACING(2)};
                    }
                }

                div.container_content {
                    &[data-state='open'] {
                        animation: slideDown ${({ theme }) => theme.TRANSITIONS.MEDIUM} cubic-bezier(0.87, 0, 0.13, 1);
                    }
                    &[data-state='closed'] {
                        animation: slideUp ${({ theme }) => theme.TRANSITIONS.MEDIUM} cubic-bezier(0.87, 0, 0.13, 1);
                    }
                }

                div.content {
                    display: flex;
                    flex-direction: column;
                    gap: ${({ theme }) => theme.SPACING(4)};
                    padding: ${({ theme }) => theme.SPACING(4)};

                    overflow: hidden;
                    
                    border-top: 1px solid ${({ theme }) => theme.COLORS.SECONDARY[200]};

                    div {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        p.positive {
                            color: ${({ theme }) => theme.COLORS.TERTIARY[700]};
                        }

                        p.negative {
                            color: ${({ theme }) => theme.COLORS.QUARTENARY[700]};
                        }
                    }
                }
            }
        }
    }
`;