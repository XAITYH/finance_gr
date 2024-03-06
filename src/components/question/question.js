import React from 'react';
import Link from 'next/link';
import styles from './question.module.css';

export const Question = () => {
    return (
        <div className={styles.container}>
            <h4 className={styles.numOfQuestion}>Вопрос №1</h4>
            <h3 className={styles.questionUnderNum}>1. Сколько нужно купить акций, чтобы жить на дивиденды?</h3>
            <button className={styles.exit}>X</button>
        </div>
    )
}