import styles from "./page.module.css";
import Image from "next/image";
import Navbar from "@/components/molecules/Navbar/Navbar";
import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <main>
      <Navbar />
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
        <div className={styles.subheader}>
          <h2 className={styles.subheading}>How It Works</h2>
        </div>
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
      {/* display trick to get ordering right on mobile/table+*/}
      <section className={styles.section4}>
        <div className={styles.mobile_order}>
          <div className={styles.subheader}>
            <h2 className={styles.subheading}>Let’s find the job of your dreams</h2>
          </div>
          <div className={styles.prompt_image}>
            <img src="/lets_find.png" />
          </div>

          <div className={styles.prompt_description}>
            <p>Discover exciting opportunities tailored to your skills and certification. Browse through a curated list of jobs that match your expertise, and take the next step in your career.</p>
          </div>

          <div className={styles.prompt_button}>
            <Button>Find Work</Button>
          </div>
        </div>

        <div className={styles.desktop_order}>

          <div className={styles.prompt_left}>
            <div className={styles.subheader}>
              <h2 className={styles.subheading}>Let’s find the job of your dreams</h2>
            </div>

            <div className={styles.prompt_description}>
              <p>Discover exciting opportunities tailored to your skills and certification. Browse through a curated list of jobs that match your expertise, and take the next step in your career.</p>
            </div>

            <div className={styles.prompt_button}>
              <Button>Find Work</Button>
            </div>
          </div>


          <div className={styles.prompt_image}>
            <img src="/lets_find.png" />
          </div>
        </div>
      </section>

      <section className={styles.section4}>
        <div className={styles.mobile_order}>
          <div className={styles.subheader}>
            <h2 className={styles.subheading}>Let’s find the job of your dreams</h2>
          </div>
          <div className={styles.prompt_image}>
            <img src="/hire_with_us.png" />
          </div>

          <div className={styles.prompt_description}>
            <p>Explore a pool of certified technicians ready to contribute to your company’s success. Post your job openings and discover the perfect match.</p>
          </div>

          <div className={styles.prompt_button}>
            <Button>Find Talent</Button>
          </div>
        </div>

        <div className={styles.desktop_order}>

        <div className={styles.prompt_image}>
            <img src="/hire_with_us.png" />
          </div>

          <div className={styles.prompt_left}>
            <div className={styles.subheader}>
              <h2 className={styles.subheading}>Hire with us</h2>
            </div>

            <div className={styles.prompt_description}>
              <p>Explore a pool of certified technicians ready to contribute to your company’s success. Post your job openings and discover the perfect match.</p>
            </div>

            <div className={styles.prompt_button}>
              <Button>Find Talent</Button>
            </div>
          </div>



        </div>
      </section>
    </main >
  );
}
