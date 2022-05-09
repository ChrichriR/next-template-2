import Link from "next/link";
import Head from "next/head";
import styles from './layout.module.css';

export const siteTitle = "next-template-2";

export default function Layout({ children, IndexPage, link }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} key="title" />
      </Head>
      <header>
        {!link && (
        <>
        <Link href="/AboutUs">
          <p>About us</p>
          </Link>
          <Link href="/TermsOfUse">
            <p>Terms of use</p>
            </Link>
            </>
            )}
      </header>
      <main>{children}</main>
      <footer>
        {!IndexPage && (
          <Link href="/">
            <p>← Back to home</p>
          </Link>
        )}
      </footer>
    </div>
  );
}
