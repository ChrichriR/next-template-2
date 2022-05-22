import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/Layout";

export default function Home() {
  useEffect(() => {
    console.log("index page did mount");
  }, []);

  return (
    <Layout indexPage pageTitle="Home">
      <h1 style={{color: "red"}}>Welcome !</h1>
    </Layout>
  );
}