import styled from "styled-components";

export const Container = styled.div`
    width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP};
    margin: 0 auto;

    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.DESKTOP}) {
        width: ${({ theme }) => theme.BREAKPOINTS.TABLET};
    }
    @media(max-width: ${({ theme }) => theme.BREAKPOINTS.TABLET}) {
        width: ${({ theme }) => theme.BREAKPOINTS.MOBILE};
    }
`;