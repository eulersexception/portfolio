import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/pacifico";
import { AppProps } from "next/app";
import { BurgerMenu } from "../components/menu/BurgerMenu";
import theme from "../lib/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <BurgerMenu />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
