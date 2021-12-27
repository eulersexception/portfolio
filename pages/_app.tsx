import "@fontsource/fira-code";

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import theme from "../lib/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;