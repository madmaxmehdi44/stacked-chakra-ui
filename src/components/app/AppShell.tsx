import { Container, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { PageFlow } from "../PageFlow";

export const AppShell = ({ children }: PropsWithChildren<{}>) => (
  <>
    <PageFlow />
    <Flex w="full" flexDirection="column">
      <Flex w="full" flexDirection="column" paddingBottom={6} marginTop={20} borderRadius="md">
        {children}
      </Flex>
    </Flex>
  </>
);
