import { Flex, Spinner } from "@chakra-ui/react";

export const FlexSpinner = ({ full }: { full?: boolean }) => {
  return (
    <Flex width={full ? "100vw" : "100%"} height={full ? "100vh" : "100%"} alignItems="center" justifyContent="center">
      <Spinner />
    </Flex>
  );
};
