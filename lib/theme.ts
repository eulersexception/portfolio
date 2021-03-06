import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components: {},
  colors: {
    mossgreen: {
      50: "#E3FCEA",
      100: "#A1E3B4",
      200: "#75BD89",
      300: "#8ABF98",
      400: "#7BB48B",
      500: "#6A9486",
      600: "#5D916C",
      700: "#547D5F",
      800: "#2F4936",
      900: "#304035",
    },
    metal: {
      50: "#E2DDC7",
      100: "#C7C1A1",
      200: "#BFBAA1",
      300: "#EDE1A6",
      400: "#D1C686",
      500: "#A6A5A4",
      600: "#969692",
      700: "#828076",
      800: "#8A8158",
      900: "#574E1C",
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
    mono: "Montserrat",
  },
  styles: {
    global: (props) => ({
      "html, body": {
        lineHeight: "tall",
        bg: mode("#FFA6DB", "#200039")(props),
      },
    }),
  },
});

export default theme;
