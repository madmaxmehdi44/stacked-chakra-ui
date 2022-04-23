import { Container, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Header } from "./Header";

export const AppShell = ({ children, full = false }: PropsWithChildren<{ full: boolean }>) => {
  const margin = full ? "" : "-20px";
  return (
    <>
      <Header />
      <Flex w="full" flexDirection="column">
        <Container maxW={`calc(100vw${margin})`} paddingX={4} minH="100vh">
          <Flex w="full" flexDirection="column" paddingBottom={6} marginTop={20} borderRadius="md">
            {children}
          </Flex>
        </Container>
      </Flex>
    </>
  );
};
