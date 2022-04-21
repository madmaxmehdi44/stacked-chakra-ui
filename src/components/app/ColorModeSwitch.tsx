import { IconButton, useColorMode } from "@chakra-ui/react";
import { Sun, Moon } from "phosphor-react";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      size="md"
      variant="ghost"
      colorScheme={colorMode === "dark" ? "yellow" : "black"}
      aria-label={`Change to ${colorMode === "dark" ? "light" : "dark"}mode`}
      icon={colorMode === "dark" ? <Sun weight="fill" /> : <Moon weight="fill" />}
      onClick={toggleColorMode}
    />
  );
};
