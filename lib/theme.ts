import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "Fira Code",
    body: "Fira Code",
    mono: "Fira Code",
  },
  styles: {
    global: (props) => ({
      "html, body": {
        color: mode("#3B423E", "#9FB3A8")(props),
        lineHeight: "tall",
        bg: mode("#9FB3A8", "#3B423E")(props),
      },
      a: {
        color: mode("black", "white")(props),
      },
    }),
  },
});

export default theme;
