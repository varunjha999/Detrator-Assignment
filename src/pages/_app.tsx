import * as React from 'react';
import { CartProvider } from "@/CartContext";
import ResponsiveAppBar from "@/components/Navbar";
import Container from '@mui/material/Container';
import type { AppProps } from "next/app";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';



export default function App({ Component, pageProps }: AppProps) {

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const theme = React.useMemo(
    () =>
      // create custom theme
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#303f9f',
          },
          secondary: {
            main: '#f50057',
          },
        },
      }),
    [mode],
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <ResponsiveAppBar />
          <Container style={{
            marginTop: "100px",
          }}>
            <Component {...pageProps} />
          </Container>
        </CartProvider>
      </ThemeProvider>
    </>
  );
}
