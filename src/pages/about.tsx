import { Button, ButtonProps, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import type { GetServerSidePropsContext, NextPage } from "next";
import Link from "next/link";
import { FlexSpinner } from "../components/app/FlexSpinner";
import { Logo } from "../components/app/Logo";
import { inferSSRProps } from "../utils/inferSSRProps";
import { trpc } from "../utils/trpc";

const Index: NextPage = (props: inferSSRProps<typeof getServerSideProps>) => {
  const { data, isLoading, error } = trpc.useQuery(["aboutmessage"]);
  return (
    <>
      <Flex w="full" h="600px" alignItems="center" justifyContent="center">
        <VStack spacing="8">
          <Logo />
          <VStack spacing="6">
            <Heading size="4xl">Stacked.</Heading>
            {isLoading && <FlexSpinner />}
            {!isLoading && !error && <Heading size="md">{data}</Heading>}
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
