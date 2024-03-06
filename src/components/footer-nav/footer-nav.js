import React from "react";
import styles from "./footer-nav.module.css"

export const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <h2 className={styles.checkAnswer}>Проверить</h2>
            <h3 className={styles.prevQuestion}>-Предыдущий вопрос</h3>
            <h3 className={styles.nextQuestion}>Следующий вопрос-</h3>
        </div>
    );
};