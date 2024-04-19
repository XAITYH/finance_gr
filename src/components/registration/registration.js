import React from "react";
import styles from "./registration.module.css"
import Link from 'next/link';
import { CustomButton } from '../button/button';
import LandingButton from "../landing/landing-button/landing-button";

export default function Registration() {
    return (
        <div className={styles.registrationWindow}>
            <a href='/' className={styles.exit}>X</a>
            <h1 className={styles.registration}>Регистрация</h1>
            <form className={styles.form}>
                <label for="nickname" className={styles.NameItem}>Имя пользователя</label>
                    <input className={styles.fillItem} style={{fontSize: 15}} type="text" name="nickname" placeholder="Введите имя пользователя"/>
                <label for="email" className={styles.NameItem}>E-mail</label>
                    <input className={styles.fillItem} style={{fontSize: 15}} type="email" name="email" placeholder="Введите E-mail"/>
                <label for="password" className={styles.NameItem}>Пароль</label>
                    <input className={styles.fillItem} style={{fontSize: 15}} type="password" name="password" placeholder="Введите пароль"/>
                    <label for="repeatPassword" className={styles.NameItem}>Повторите пароль</label>
                    <input className={styles.fillItem} style={{fontSize: 15}} type="password" name="repeatPassword" placeholder="Повторите пароль"/>
                <h2 className={styles.welcome}>Добро пожаловать!</h2>
                <Link className={styles.confirm} href='/profilePage'>
                <LandingButton width={200} height={80} fontSize={20}>Подтвердить</LandingButton>
                </Link>
            </form>
        </div>
    );
}