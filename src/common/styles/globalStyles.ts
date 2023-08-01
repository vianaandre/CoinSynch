import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    // RESET CSS
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.TYPOGRAPHY.FONT};
    }
    body {
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        overflow-x: hidden;
    }
    html, body { 
      scroll-behavior: smooth !important
    }
    body, input, textarea, button {
        font-weight: normal;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: normal;
        margin: 0;
    }
    p {
      margin: 0;
    }
    button {
        cursor: pointer;
        box-shadow: none;
        border: none;
        background-color: transparent;
        position: relative;
        overflow: hidden;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.PRIMARY[500]}
    }
    ol, ul, li {
        list-style: none;
        list-style-type: none;
    }
    ul {
        padding-left: 0;
        margin-bottom: 0;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    // AUXILIARY CLASS
    h1, h2, h3, h4, h5, p, label {
        font-family: ${({ theme }) => theme.TYPOGRAPHY.FONT};
        font-style: normal;
    }
    .regular {
        font-weight: ${({ theme }) => theme.TYPOGRAPHY.WEIGHT.REGULAR};
    } 
    .bold {
        font-weight: ${({ theme }) => theme.TYPOGRAPHY.WEIGHT.BOLD};
    }
    h1.header {
        font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[48]};

        line-height: ${({ theme }) => theme.TYPOGRAPHY.HEIGHT[48]};
        letter-spacing: -1px;
    }
    h2.header {
        font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[40]};

        line-height: ${({ theme }) => theme.TYPOGRAPHY.HEIGHT[40]};
        letter-spacing: -1px;
    }
    h3.header {
        font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[32]};

        line-height: ${({ theme }) => theme.TYPOGRAPHY.HEIGHT[32]};
        letter-spacing: 0px;
    }
    h4.header {
        font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[24]};

        line-height: ${({ theme }) => theme.TYPOGRAPHY.HEIGHT[24]};
        letter-spacing: 0px;
    }
    h5.header {
        font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[20]};

        line-height: ${({ theme }) => theme.TYPOGRAPHY.HEIGHT[20]};
        letter-spacing: 0px;
    }
    .text {
        font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[16]};

        line-height: ${({ theme }) => theme.TYPOGRAPHY.HEIGHT[16]};
        letter-spacing: 0px;
    }
    .label {
        font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[14]};

        line-height: ${({ theme }) => theme.TYPOGRAPHY.HEIGHT[14]};
        letter-spacing: 0px;
    }
    .label_small {
        font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE[12]};

        line-height: ${({ theme }) => theme.TYPOGRAPHY.HEIGHT[12]};
        letter-spacing: 0px;
    }
    .text_base {
        color: ${({ theme }) => theme.COLORS.TEXT_BASE};
    }
    .text_primary {
        color: ${({ theme }) => theme.COLORS.PRIMARY[500]};
    }
    .text_secondary {
        color: ${({ theme }) => theme.COLORS.SECONDARY[500]};
    }
`; 