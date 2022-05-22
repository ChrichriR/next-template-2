import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function AboutUs() {
  return (
    <Layout link pageTitle="About us">
      <Image
        priority
        src="/images/profile.jpg"
        height={150}
        width={150}
        alt="Dragon Eye"
      />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia est enim
        et saepe assumenda accusamus minima consectetur, exercitationem expedita
        rerum dolorum soluta debitis nobis quaerat officiis laboriosam
        dignissimos iure?
      </div>
    </Layout>
  );
}