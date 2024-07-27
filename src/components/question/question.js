import React from 'react';
import styles from './question.module.css';

export const Question = ({ currentQuestion, currentQuestionIndex }) => {
    return (
        <div className={styles.container}>
            <a href='/' className={styles.exit}>X</a>
            <h4 className={styles.numOfQuestion}>Вопрос № {currentQuestionIndex+1}</h4>
            <h3 className={styles.questionUnderNum}>{currentQuestionIndex+1}. {currentQuestion.content}</h3>
        </div>
    )
}