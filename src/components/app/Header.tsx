import { Container, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const Header = ({ children }: PropsWithChildren<{}>) => {
  const bgState = useColorModeValue("whiteAlpha.100", "#080808");
  const borderState = useColorModeValue("#00000022", "#FFFFFF22");
  return (
    <Flex position="fixed" w="full" top={0} zIndex={99} border="none">
      <Container
        maxW={{ base: "container.lg", md: "full" }}
        paddingX={0}
        borderBottom={{ base: "1px solid", md: "0px solid" }}
        borderColor={borderState}
        backgroundColor={{ base: bgState, md: "transparent" }}
        backdropFilter={{ base: "blur(10px)", md: "blur(4px)" }}
      >
        <Container maxW="container.lg" paddingX={0} border="none">
          <HStack
            border="none"
            paddingX={{ base: "10px", md: "0px" }}
            maxW="full"
            h="55px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex w="full" flexDirection="row"></Flex>
            <HStack spacing={3}>
              <ColorModeSwitch />
            </HStack>
          </HStack>
        </Container>
      </Container>
    </Flex>
  );
};
