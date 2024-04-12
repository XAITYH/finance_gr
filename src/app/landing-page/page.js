import React from "react";
import styles from './page.module.css'
import LandingHeader from "@/components/landing/landing-header/landing-header";
import LandingStartPage from "@/components/landing/start-page/landing-start-page";
import LandingKnowledge from "@/components/landing/landing-knowledge/landing-knowledge";

export default function Landing () {
    return (
        <div className={styles.wrapper}>
            <div className={styles.objects}>
                <LandingHeader />
                <LandingStartPage />
            </div>
            <LandingKnowledge />
        </div>
    )
}