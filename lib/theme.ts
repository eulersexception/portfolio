import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
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
        color: mode("#FFA6DB", "#200039")(props),
        lineHeight: "tall",
        bg: mode("#200039", "#FFA6DB")(props),
      },
      a: {
        color: mode("black", "white")(props),
      },
      nav: {
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        width: "300px",
      },
      ".background": {
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        width: "300px",
        background: "#70FFE5",
      },
      button: {
        outline: "none",
        border: "none",
        cursor: "pointer",
        position: "absolute",
        top: "18px",
        left: "15px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "transparent",
      },
      ".iconPlaceholder": {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        flex: "40px 0",
        marginRight: "20px",
      },
      ".textPlaceholder": {
        borderRadius: "5px",
        width: "200px",
        height: "20px",
        flex: "1",
      },
      "ul, li": {
        margin: "0",
        padding: "0",
      },
      ul: {
        padding: "25px",
        position: "absolute",
        top: "100px",
        width: "230px",
      },
      li: {
        listStyle: "none",
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer,",
      },
    }),
  },
});

export default theme;
