import { Button } from "./Button";
import { Input } from "./Input";
import { Switch } from "./Switch";

export const components = {
  Button,
  Input,
  Switch,
};

export const styles = {
  global: ({ colorMode }: any) => {
    const isDarkMode = !!(colorMode === "dark");
    return {
      body: {
        backgroundColor: isDarkMode ? "#080808" : "#FFFFFF",
      },
    };
  },
};
