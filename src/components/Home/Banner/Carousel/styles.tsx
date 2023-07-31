import styled from "styled-components";

export const ContainerCarousel = styled.div`
    right: 0px;
    left: 60%;
    position: absolute;
    top: 0px;

    div.carousel_image {
        div.swiper-slide {
            display: flex;
            width: 424px;
            position: relative;
            padding-left: 32px;
            opacity: 0.4;
            transition: 400ms;

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
            }

            div.bg_2 {
                position: absolute;
                height: 100%;
                width: 240px;
                bottom: 6px;
                left: calc(50% - 240px / 2 + 24px);
                background-color: ${({ theme }) => theme.COLORS.PRIMARY[500]};
            }

            div.bg_3 {
                position: absolute;
                height: 94%;
                width: 179px;
                right: -20px;
                bottom: 6px;
                background-color: ${({ theme }) => theme.COLORS.PRIMARY[500]};
            }
            
            img.image {
                position: relative;
                z-index: 1;
                margin-left: 24px;
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
                
                &.currency {
                    left: 10px;
                    top: 82px;
                }
                &.chart {
                    right: -52px;
                    bottom: 102px;
                }
                &.computer {
                    left: 10px;
                    top: 124px;
                }
                &.crypto {
                    right: -48px;
                    top: 64px;
                }
                &.currency_2 {
                    bottom: 68px;
                    left: 24px;
                }
                &.chart_2 {
                    right: -64px;
                    bottom: 182px;
                }
            }
        }
    }
`;