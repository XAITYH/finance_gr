import React from "react";
import styles from './page.module.css'
import LandingHeader from "@/components/landing/landing-header/landing-header";
import LandingStartPage from "@/components/landing/start-page/landing-start-page";
import Image from "next/image";
import circles from "@/components/landing/images/Circles.png"

export default function Landing () {
    return (
        <div className={styles.wrapper}>
            <div className={styles.objects}>
                <LandingHeader />
                <LandingStartPage />
            </div>
        </div>
    )
}