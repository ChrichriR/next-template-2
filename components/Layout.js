import Link from "next/link";
import Head from "next/head";
import styles from './Layout.module.css';


export default function Layout({ children, indexPage, link, pageTitle }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{pageTitle ? `${pageTitle} = ` : ""} Our Website</title>
      </Head>
      <header>
        {!link && (
        <>
        <Link href="/aboutUs">
          <p>About us</p>
          </Link>
          <Link href="/termsOfUse">
            <p>Terms of use</p>
            </Link>
            </>
            )}
      </header>
      <main>{children}</main>
      <footer>
        {!indexPage && (
          <Link href="/">
            <p>← Back to home</p>
          </Link>
        )}
      </footer>
    </div>
  );
}
