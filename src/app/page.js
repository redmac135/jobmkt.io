import styles from "./page.module.css";
import Image from "next/image";
import Navbar from "../components/molecules/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className={styles.section1}></section>
      <section className={styles.section2}></section>
      <section className={styles.section3}></section>
      <section className={styles.section4}></section>
    </main>
  );
}
