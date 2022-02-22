import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ForecastsProvider } from '../hooks/forecasts';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ForecastsProvider>
          <Component {...pageProps} />
        </ForecastsProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
