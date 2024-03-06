import React from 'react';
import styles from './question-tab.module.css'


export const QuestionTab = () => {
	return (
		<div className={styles.questionTab}>
            <div className={styles.answers}>
                <div className={styles.answer}><ul><li>Сто</li></ul></div>
                <div className={styles.answer}><ul><li>Тысячу</li></ul></div>
                <div className={styles.answer}><ul><li>Миллион</li></ul></div>
                <div className={styles.answer}><ul><li>Зависит от начисляемых дивидендов.</li></ul></div>
            </div>
        </div>
	);
};