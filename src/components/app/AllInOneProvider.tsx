import { ChakraProvider, cookieStorageManager, localStorageManager, theme } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { IconContext } from "phosphor-react";
import { PropsWithChildren } from "react";

export const AllInOnProvider = ({ pageProps, children }: PropsWithChildren<{ pageProps: AppProps["pageProps"] }>) => {
  const colorModeManager =
    typeof pageProps.cookies === "string" ? cookieStorageManager(pageProps.cookies) : localStorageManager;
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
        <IconContext.Provider
          value={{
            size: 20,
          }}
        >
          {children}
        </IconContext.Provider>
      </ChakraProvider>
    </SessionProvider>
  );
};
