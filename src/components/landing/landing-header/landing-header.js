import React from "react";
import styles from "./landing-header.module.css"
import Image from "next/image";
import logo from "../icons/logo.svg"
import arrow from "../icons/arrow.svg"
import Link from 'next/link';

export default function LandingHeader() {
    return (
        <header className={styles.header}>
            <Image src={logo} className={styles.logo} alt="logotype"/>
            <ul className={styles.linksUl}>
                <li className={styles.linksLi}><a className={styles.links}>Чему вы научитесь</a></li>
                <li className={styles.linksLi}><a className={styles.links}>Процесс обучения</a></li>
                <li className={styles.linksLi}><a className={styles.links}>Стоимость</a></li>
                <li className={styles.linksLi}><a className={styles.links}>Контакты</a></li>
            </ul>
            <div className={styles.buttons}>
                <Link href='/registrationPage' className={styles.registrationLink}>
                    <button className={styles.registrationButton}>Регистрация</button>
                </Link>
                <Link href='/loginPage'>
                    <button className={styles.loginButton}><Image src={arrow} className={styles.arrow}/> Войти</button>
                </Link>
            </div>
        </header>
    );
}