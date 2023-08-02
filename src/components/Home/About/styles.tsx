import styled from "styled-components";

export const ContainerAbout = styled.section`
    padding: ${({ theme }) => theme.SPACING(30)} 0px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F7F7F7 100%);
    overflow-x: hidden;

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
        padding: ${({ theme }) => theme.SPACING(20)} 0px;
    }

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
        padding: ${({ theme }) => theme.SPACING(14)} 0px;
    }

    div.container {
        display: flex;
        align-items: center;

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
            flex-direction: column;
        }

        div.right {
            display: flex;
            flex-direction: column;
            flex: 1;

            @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                width: 494px
            }

            @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                width: 100%;
            }

            h5.header {
                margin-bottom: ${({ theme }) => theme.SPACING(1)};
            }

            h2.header {
                margin-bottom: ${({ theme }) => theme.SPACING(4)};
            }
        
            p.text {
                max-width: 406px;

                @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                    max-width: 100%;
                }

                @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
                    line-height: 170%;
                }
            }
            
            button {
                max-width: 176px;
                margin-top: ${({ theme }) => theme.SPACING(10)};

                @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP})  {
                    display: none;
                }
            }
        }

        div.left {
            width: 60%;

            @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                order: 1;
                width: 100%;
                margin-top: ${({ theme }) => theme.SPACING(10)};
            }

            @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
                display: none;
            }

            ul {
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.SPACING(8)};
                margin-bottom: ${({ theme }) => theme.SPACING(8)};

                @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
                    gap: ${({ theme }) => theme.SPACING(6)};
                    margin-bottom: ${({ theme }) => theme.SPACING(6)};
                }

                &.spacing_left {
                    padding-left: 104px;
                }
            }
        }
    }
    div.cards_carousel {
        display: none;

        @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
            display: flex;
        }

        div.cards {
            margin-top: ${({ theme }) => theme.SPACING(6)};
            div.swiper-slide {
                display: flex;
                justify-content: center;
            }
        }
    }
`;