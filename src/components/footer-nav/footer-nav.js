import React from "react";
import styles from "./footer-nav.module.css"

export const FooterNav = ({ onNextQuestion }) => {
    return (
        <div className={styles.footerContainer}>
            <a className={styles.checkAnswer}>Проверить</a>
            <a className={styles.prevQuestion}>← Предыдущий вопрос</a>
            <a onClick={onNextQuestion} className={styles.nextQuestion}>Следующий вопрос →</a>
        </div>
    );
};