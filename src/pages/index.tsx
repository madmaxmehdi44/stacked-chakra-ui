import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { inferSSRProps } from "../utils/inferSSRProps";

const Index: NextPage = (props: inferSSRProps<typeof getServerSideProps>) => {
  return <></>;
};
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return { props: {} };
};

export default Index;
