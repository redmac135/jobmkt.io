import styles from "./page.module.css";
import Image from "next/image";
import Navbar from "../components/molecules/Navbar";

export default function Home() {
  return (
      <main>
          <Navbar/>
          <section className={styles.section1}></section>
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
                          width = {100}
                          height = {100}
                          className={styles.images}
                      />
                      <span className={styles.imageText}>Quality Jobs</span>
                  </div>
                  <div className={styles.imageItem}>
                      <Image
                          src="/trophy.svg"
                          alt="Icon 2"
                          width = {100}
                          height = {100}
                          className={styles.images}/>
                      <span className={styles.imageText}>Top Companies</span>
                  </div>
                  <div className={styles.imageItem}>
                      <Image
                          src="/star.svg"
                          alt="Icon 3"
                          width = {100}
                          height = {100}
                          className={styles.images}/>
                      <span className={styles.imageText}>Qualified People</span>
                  </div>
                  <div className={styles.imageItem}>
                      <Image
                          src="/check.svg"
                          alt="Icon 4"
                          width = {100}
                          height = {100}
                          className={styles.images}/>
                      <span className={styles.imageText}>100% Trusted</span>
                  </div>
              </div>
          </section>
          <section className={styles.section3}></section>
          <section className={styles.section4}></section>
      </main>
  )
    ;
}
