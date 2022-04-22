/* eslint-disable @next/next/no-img-element */
import {
  ChakraProvider,
  Container,
  cookieStorageManager,
  Flex,
  HStack,
  localStorageManager,
  useColorMode,
} from "@chakra-ui/react";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import { withTRPC } from "@trpc/next";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { getSession, SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Link from "next/link";
import { IconContext } from "phosphor-react";
import { PropsWithChildren, StrictMode } from "react";
import superjson from "superjson";
import { ColorModeSwitch } from "../components/app/ColorModeSwitch";
import { Content } from "../components/app/Content";
import { Header } from "../components/app/Header";
import { PageFlow } from "../components/PageFlow";
import type { AppRouter } from "../server/routers/_app";
import "../styles/globals.css";
import { theme } from "./_theme";

const Wrapper = ({ children }: PropsWithChildren<{}>) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w="full"
      minHeight="100vh"
      flexDirection="column"
      sx={{
        backgroundImage: `radial-gradient(${colorMode === "dark" ? "#2E2E2E" : "#CECECE"} 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
        backgroundAttachment: "fixed",
      }}
    >
      {children}
    </Flex>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const colorModeManager =
    typeof pageProps.cookies === "string" ? cookieStorageManager(pageProps.cookies) : localStorageManager;
  return (
    <StrictMode>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo />
      <SessionProvider session={pageProps.session}>
        <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
          <IconContext.Provider
            value={{
              size: 20,
            }}
          >
            <PageFlow />
            <Header>
              <Flex w="full" flexDirection="row">
                {/* <Link href="/" passHref>
                  <a></a>
                </Link> */}
              </Flex>
              <HStack spacing={3}>
                <ColorModeSwitch />
              </HStack>
            </Header>
            <Wrapper>
              <Container maxW="container.lg">
                <Content>
                  <Component {...pageProps} />
                </Content>
              </Container>
            </Wrapper>
          </IconContext.Provider>
        </ChakraProvider>
      </SessionProvider>
    </StrictMode>
  );
};
// also export a reusable function getServerSideProps
export function getServerSideProps({ req }: GetServerSidePropsContext) {
  const session = getSession({ req });
  return {
    props: {
      cookies: req.headers.cookie ?? "",
      session,
    },
  };
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    if (typeof window !== "undefined") {
      // during client requests
      return {
        url: "/api/trpc",
        transformer: superjson,
      };
    }
    const ONE_DAY_SECONDS = 60 * 60 * 24;
    ctx?.res?.setHeader("Cache-Control", `s-maxage=1, stale-while-revalidate=${ONE_DAY_SECONDS}`);

    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";

    return {
      url,
      headers: {
        "x-ssr": "1",
      },
      transformer: superjson,
    };
  },
  ssr: true,
})(MyApp);
