import React from 'react'
import styles from "./page.module.scss"
import Image from 'next/image'

export default function Page() {
    return (
        <main>
            <section className={styles.section1}>
                <div className={styles.titleLeft}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.titleText}>Looking for IT talent?</h1>
                        <h2 className={styles.subtext}>Here we connect you to available Technicians with the right skills for your IT project.</h2>
                    </div>
                </div>
                <Image
                    src={require("../../../public/looking_for_it.png")}
                    alt='Looking for IT'
                    className={styles.titleRightImage}
                    height={0}
                    width={0}
                />
            </section>
            <section className={styles.section2}>
                <div className={styles.projectsContainer}>
                    <h2>Top Projects</h2>
                    <p></p>
                </div>
                <div>
                    <h2>Featured talent</h2>
                </div>
            </section>
        </main>
    )
}

