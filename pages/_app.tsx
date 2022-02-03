import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/pacifico";
import { AppProps } from "next/app";
import { BurgerMenu } from "../components/menu/BurgerMenu";
import theme from "../lib/theme";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <BurgerMenu />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
