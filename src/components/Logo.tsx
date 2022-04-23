import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

interface LogoProps {
  small?: boolean;
}

export const Logo = (props: LogoProps) => {
  const size = !props.small ? "150px" : "40px";
  const fontSize = !props.small ? "32pt" : "6pt";
  const bgColor = useColorModeValue("black", "white");
  const color = useColorModeValue("white", "black");
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w={size}
      h={size}
      bgColor={bgColor}
      borderRadius="full"
      color={color}
      fontSize={fontSize}
      fontWeight="bold"
    >
      Logo
    </Flex>
  );
};
