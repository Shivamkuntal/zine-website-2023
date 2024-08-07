import type { NextPage } from "next";
import Head from "next/head";
import {
  Wheels,
} from "../../../components/Blogs/bme";
import { Footer, SecFooter } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zine | Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Wheels />
      <SecFooter />
    </>
  );
};

export default Home;
