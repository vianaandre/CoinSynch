import styled from "styled-components";

export const ContainerCryptos = styled.div`
    width: 360px;
    margin-left: auto;

    .cryptos {
        .swiper-wrapper {
            transition-timing-function: linear;
        }
        .swiper-slide {
            p {
                display: flex;
                gap: ${({ theme }) => theme.SPACING(1)};
                
                strong {
                    color: ${({ theme }) => theme.COLORS.SECONDARY[800]};
                    &.indicator {
                        color: ${({ theme }) => theme.COLORS.TERTIARY[700]};
                        &.negative {
                            color: ${({ theme }) => theme.COLORS.QUARTENARY[700]};
                        }
                    }
                }
            }
        }
    }
`;