import styled from "styled-components";

export const ContainerAbout = styled.section`
    padding: ${({ theme }) => theme.SPACING(30)} 0px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F7F7F7 100%);

    div.container {
        display: flex;
        align-items: center;

        div.right {
            display: flex;
            flex-direction: column;
            flex: 1;

            h5.header {
                margin-bottom: ${({ theme }) => theme.SPACING(1)};
            }

            h2.header {
                margin-bottom: ${({ theme }) => theme.SPACING(4)};
            }
        
            p.text {
                max-width: 406px;
            }
            
            button {
                max-width: 176px;
                margin-top: ${({ theme }) => theme.SPACING(10)};
            }
        }

        div.left {
            width: 60%;

            ul {
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.SPACING(8)};
                margin-bottom: ${({ theme }) => theme.SPACING(8)};

                &.spacing_left {
                    padding-left: 104px;
                }
            }
        }
    }
`;