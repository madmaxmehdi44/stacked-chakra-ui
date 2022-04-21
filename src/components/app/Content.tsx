import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const Content = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Flex w="full" flexDirection="column" paddingBottom={6} marginTop={20} borderRadius="md">
      {children}
    </Flex>
  );
};
