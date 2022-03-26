import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Godprogrammer</title>
        <meta name="description" content="Godprogrammer Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Godprogrammer website!</h1>
        <p className={styles.description}>Content coming soon.</p>
      </main>

      <footer className={styles.footer}>Developed by Godprogrammer</footer>
    </div>
  );
}
