import React from "react";
import styles from "./login.module.css"
import Link from 'next/link';
import LandingButton from "../landing/landing-button/landing-button";


export default function Login() {
    return (
        <div className={styles.loginWindow}>
            <a href='/' className={styles.exit}>X</a>
            <h1 className={styles.enter}>Вход</h1>
            <form className={styles.form}>
                <label for="nickname" className={styles.NameItem}>Имя пользователя</label>
                    <input className={styles.fillItem} style={{fontSize: 15}} type="text" name="nickname" placeholder="Ваше имя пользователя"/>
                <label for="email" className={styles.NameItem}>E-mail</label>
                    <input className={styles.fillItem} style={{fontSize: 15}} type="email" name="email" placeholder="Ваш E-mail"/>
                <label for="password" className={styles.NameItem}>Пароль</label>
                    <input className={styles.fillItem} style={{fontSize: 15}} type="password" name="password" placeholder="Ваш пароль"/>
                <h2 className={styles.welcome}>Снова здравствуй!</h2>
                <Link className={styles.confirm} href='/profilePage'>
                <LandingButton width={200} height={80} fontSize={20}>Подтвердить</LandingButton>
                </Link>
            </form>
        </div>
    );
}