import styles from "./page.module.css";
import Image from "next/image";
import Navbar from "../components/molecules/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className={styles.section1}></section>
      <section className={styles.section2}></section>
      <section className={styles.section3}>
        <h2 className={styles.subheading}>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Sponsors post IT projects</h3>
            </div>
            <Image
              src="/how_it_works_left.svg" // Replace with your actual image path
              alt="Left Image"
              width={280}
              height={240}
              className={styles.stepImage}
            />
          </div>
          <div className={styles.step}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>IT Talent apply for projects</h3>
            </div>
            <Image
              src="/how_it_works_right.svg" // Replace with your actual image path
              alt="Right Image"
              width={304}
              height={240}
              className={styles.stepImage}
            />
          </div>
        </div>
      </section>
      <section className={styles.section4}></section>
    </main>
  );
}
