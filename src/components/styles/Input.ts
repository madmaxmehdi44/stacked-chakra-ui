import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Input: ComponentStyleConfig = {
  baseStyle: {
    paddingY: 2.5,
    borderRadius: 6,
    lineHeight: 1,
    fontSize: "16px",
  },
  defaultProps: {
    variant: "filled",
    size: "lg",
  },
  variants: {
    filled: ({ colorMode }) => ({
      field: {
        bg: colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100",
        _hover: { bg: colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.200" },
      },
    }),
  },
};
