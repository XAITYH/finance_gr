import React from 'react';
import Link from 'next/link';
import styles from './question.module.css';
import questions from '@/app/questions/questions';

export const Question = () => {
    return (
        <div className={styles.container}>
            <a href='/' className={styles.exit}>X</a>
            <h4 className={styles.numOfQuestion}>Вопрос №1</h4>
            <h3 className={styles.questionUnderNum}>1. Сколько нужно купить акций, чтобы жить на дивиденды?</h3>
        </div>
    )
}