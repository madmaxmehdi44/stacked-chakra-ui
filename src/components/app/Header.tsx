import { Box, Container, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { Logo } from "../Logo";
import { PageFlow } from "../PageFlow";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const Header = ({ children }: PropsWithChildren<{}>) => {
  const bgState = useColorModeValue("whiteAlpha.100", "#080808");
  const borderState = useColorModeValue("#00000022", "#FFFFFF22");
  return (
    <>
      <PageFlow />
      <Flex position="fixed" w="100vw" top={0} zIndex={99} border="none">
        <Container
          maxW={{ base: "100vw", md: "full" }}
          paddingX={4}
          borderBottom={{ base: "1px solid", md: "0px solid" }}
          borderColor={borderState}
          backgroundColor={{ base: bgState, md: "transparent" }}
          backdropFilter={{ base: "blur(10px)", md: "blur(4px)" }}
        >
          <HStack border="none" maxW="full" h="55px" alignItems="center" justifyContent="space-between">
            <Flex w="full" flexDirection="row">
              <Link href="/" passHref>
                <Box as="a" w="40px" h="full" padding="10px" borderRadius="full">
                  <Logo small />
                </Box>
              </Link>
            </Flex>
            <HStack spacing={3}>
              <ColorModeSwitch />
            </HStack>
          </HStack>
        </Container>
      </Flex>
    </>
  );
};
