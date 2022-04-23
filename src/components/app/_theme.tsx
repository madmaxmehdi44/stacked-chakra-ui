import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import { components, styles } from "../styles";

export const theme = extendTheme({
  components,
  fonts: {
    heading: "Inter",
    menu: "Inter",
    input: "Inter",
    body: "Inter",
  },
  styles: styles,
  colors: {
    brand: baseTheme.colors.blue,
  },
  config: { initialColorMode: "dark", useSystemColorMode: true },
});
