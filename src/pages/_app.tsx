import React from "react";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { theme } from "common/styles/theme";
import { GlobalStyles } from "common/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
