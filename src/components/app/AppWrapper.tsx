import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const AppWrapper = ({ children }: PropsWithChildren<{}>) => {
  const pixelDot = useColorModeValue("#CECECE", "#2E2E2E");

  return (
    <Flex
      w="full"
      minHeight="100vh"
      flexDirection="column"
      sx={{
        backgroundImage: `radial-gradient(${pixelDot} 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
        backgroundAttachment: "fixed",
      }}
    >
      <Container maxW="container.lg">
        <Flex w="full" flexDirection="column" paddingBottom={6} marginTop={20} borderRadius="md">
          {children}
        </Flex>
      </Container>
    </Flex>
  );
};
