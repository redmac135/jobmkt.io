import React from 'react'
import styles from "./page.module.scss"
import Image from 'next/image'


export default function page() {
    return (
        <div>
            <div className={styles.section1}>
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
                    height={645}
                    width={0}
                >
                </Image>
            </div>
        </div>
    )
}
