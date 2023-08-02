import styled from "styled-components";

export const ContainerCarousel = styled.div`
    right: 0px;
    left: 52.5%;
    position: absolute;
    top: 12px;

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
        left: 50%;
        top: 0px;
    }

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
        display: none;
    }

    div.carousel_image {
        cursor: grab;

        div.swiper-slide {
            display: flex;
            width: 424px !important;
            position: relative;
            padding-left: 32px;
            opacity: 0.4;
            transition: 400ms;

            @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                width: 280px !important;
                margin-right: 18px !important;
            }

            &.swiper-slide-active {
                transition: 400ms;
                opacity: 1;
            }

            div.bg {
                height: 80%;
                width: 269px;
                background-color: ${({ theme }) => theme.COLORS.PRIMARY[500]};
                position: absolute;
                bottom: 6px;
                right: -22px;

                @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                    width: 150.94px;
                    right: 4px;
                }
            }

            div.bg_2 {
                position: absolute;
                height: 100%;
                width: 240px;
                bottom: 6px;
                left: calc(50% - 240px / 2 + 24px);
                background-color: ${({ theme }) => theme.COLORS.PRIMARY[500]};

                @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                    width: 134.669px;
                    left: calc(50% - 134.669px / 2 + 28px);
                }
            }

            div.bg_3 {
                position: absolute;
                height: 94%;
                width: 179px;
                right: -20px;
                bottom: 6px;
                background-color: ${({ theme }) => theme.COLORS.PRIMARY[500]};

                @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                    width: 100.441px;
                    right: 0px;
                }
            }
            
            img.image {
                position: relative;
                z-index: 1;
                margin-left: 24px;

                @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                    max-width: 215.47px;
                    height: 280px;
                }
            }

            div.icon {
                position: absolute;
                padding: ${({ theme }) => theme.SPACING(2)};
                border-radius: 8px;
                background-color: ${({ theme }) => theme.COLORS.PRIMARY[100]};
                z-index: 2;
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
                display: flex;
                align-items: center;

                @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                    svg {
                        width: 35.9px;
                        height: 35.9px;
                    }
                }
                
                &.currency {
                    left: 10px;
                    top: 82px;

                    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                        top: 48px;
                        left: 32px;
                    }
                }
                &.chart {
                    right: -52px;
                    bottom: 102px;

                    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                        right: -22px;
                        bottom: 58px;
                    }
                }
                &.computer {
                    left: 10px;
                    top: 124px;

                    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                        left: 24px;
                        top: 82px;
                    }
                }
                &.crypto {
                    right: -48px;
                    top: 64px;

                    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                        right: -18px;
                        top: 18px;
                    }
                }
                &.currency_2 {
                    bottom: 68px;
                    left: 24px;

                    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                        bottom: 54px;
                    }
                }
                &.chart_2 {
                    right: -64px;
                    bottom: 182px;
                    
                    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                        bottom: 102px;
                        right: -22px;
                    }
                }
            }
        }
    }
`;