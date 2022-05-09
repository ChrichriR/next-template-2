import Head from "next/head";
import { useEffect } from "react";
import Layout, { siteTitle } from "../components/Layout";

export default function IndexPage() {
  useEffect(() => {
    console.log("index page did mount");
  }, []);

  return (
    <Layout indexPage>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 style={{color: "red"}}>Welcome !</h1>
    </Layout>
  );
}