import React from "react";
import styles from './page.module.css'
import LandingHeader from "@/components/landing/landing-header/landing-header";
import LandingStartPage from "@/components/landing/start-page/landing-start-page";
import LandingKnowledge from "@/components/landing/landing-knowledge/landing-knowledge";
import LandingEducation from "@/components/landing/landing-education/landing-education";
import LandingMethodic from "@/components/landing/landing-methodic/landing-methodic";
import LandingFooter from "@/components/landing/landing-footer/landing-footer";

export default function Landing () {
    return (
        <div className={styles.wrapper}>
            <div className={styles.objects}>
                <LandingHeader />
                <LandingStartPage />
            </div>
            <LandingKnowledge />
            <LandingEducation />
            <LandingMethodic/>
            <LandingFooter />
        </div>
    )
}