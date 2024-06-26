import styles from "./page.module.scss";
import Image from "next/image";
import Navbar from "@/components/molecules/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className={styles.section1}>
        <div className={styles.summary}>
          <h2 className={styles.heading}>What we do</h2>
          <div className={`${styles.description} ${styles.summary}`}>
            <p>Urban Tech Hero is all about creating a community of
              Tech Heroes to transform the underserved community.
              To do this, we recognize that connecting
              students–ours as well as those of other nonprofits–to
              jobs in the community is the key to success.</p>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.summary}>
          <h2 className={styles.heading}>What we do</h2>
          <div className={styles.description}>
            <p>Urban Tech Hero is all about creating a community of
              Tech Heroes to transform the underserved community.
              To do this, we recognize that connecting
              students–ours as well as those of other nonprofits–to
              jobs in the community is the key to success.</p>
          </div>
        </div>
        <div className={styles.imageList}>
          <div className={styles.imageItem}>
            <Image
              src="/medal.svg"
              alt="Icon 1"
              width={100}
              height={100}
              className={styles.images}
            />
            <span className={styles.imageText}>Quality Jobs</span>
          </div>
          <div className={styles.imageItem}>
            <Image
              src="/trophy.svg"
              alt="Icon 2"
              width={100}
              height={100}
              className={styles.images} />
            <span className={styles.imageText}>Top Companies</span>
          </div>
          <div className={styles.imageItem}>
            <Image
              src="/star.svg"
              alt="Icon 3"
              width={100}
              height={100}
              className={styles.images} />
            <span className={styles.imageText}>Qualified People</span>
          </div>
          <div className={styles.imageItem}>
            <Image
              src="/check.svg"
              alt="Icon 4"
              width={100}
              height={100}
              className={styles.images} />
            <span className={styles.imageText}>100% Trusted</span>
          </div>
        </div>
      </section>
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
