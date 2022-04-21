import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import { components, styles } from "../components/styles";

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
    brand: baseTheme.colors.teal,
  },
  config: { initialColorMode: "dark", useSystemColorMode: true },
});
