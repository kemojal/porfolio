import '../styles/globals.css'
import '../styles/variables.css'

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './../styles/theme';
import { GlobalStyles } from './../styles/global';

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    <Component {...pageProps} /></ThemeProvider>
}

export default MyApp
