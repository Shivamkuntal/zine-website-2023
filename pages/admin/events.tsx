import type { NextPage } from "next";
import Head from "next/head";
import {
  Events,
} from "../../components/Members/Admin";
import { AuthContextProvider } from "../../context/authContext";

const Home: NextPage = () => {
  return (
    <AuthContextProvider>
      <Head>
        <title>Zine | Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Events />
    </AuthContextProvider>
  );
};

export default Home;
