import { Button, ButtonProps, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import type { GetServerSidePropsContext, NextPage } from "next";
import Link from "next/link";
import { Logo } from "../components/Logo";
import { inferSSRProps } from "../utils/inferSSRProps";

const Index: NextPage = (props: inferSSRProps<typeof getServerSideProps>) => {
  return (
    <>
      <Flex w="full" h="600px" alignItems="center" justifyContent="center">
        <VStack spacing="8">
          <Logo width="150px" height="150px" />
          <VStack spacing="6">
            <Heading size="4xl">Stacked.</Heading>
            <Heading size="md">simple and easy to set up!</Heading>
          </VStack>
          <Link passHref href="/">
            <Button as="a" size="lg" borderRadius="12px">
              Index Page
            </Button>
          </Link>
        </VStack>
      </Flex>
    </>
  );
};
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return { props: {} };
};

export default Index;
