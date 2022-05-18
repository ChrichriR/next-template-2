import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/Layout";

export default function AboutUs() {
  return (
    <Layout link>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Image
        priority
        src="/images/profile.jpg"
        height={50}
        width={50}
        alt="Christelle"
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