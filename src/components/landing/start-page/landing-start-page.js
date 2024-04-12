import React from "react";
import styles from "./landing-start-page.module.css"
import Image from "next/image";
import programming from "../icons/programming.svg"
import arrowUp from "../icons/arrowUp.svg"

export default function LandingStartPage() {
    return (
        <div className={styles.startPage}>
            <Image src={programming} className={styles.programming} alt="programming-png"/>
            <div className={styles.texts}>
                <h1 className={styles.schoolPhraze}>
                Школа финансовой грамоты <q>Филин</q> - для тех, кому важен результат
                </h1>
                <p className={styles.testParagraph}>Пройдите тестирование, чтобы получить доступ к бесплатным вводным урокам</p>
                <button className={styles.testButton}>
                   <span className={styles.testButtonText}> Пройти тестирование </span>
                    <Image src={arrowUp} className={styles.arrowUp} alt="arrow-up-png"/>
                </button>
            </div>
        </div>
    );
}