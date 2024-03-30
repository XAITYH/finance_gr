import React from 'react';
import styles from './question-tab.module.css'
import questions from '@/app/questions/answers';

export const QuestionTab = () => {
	return (
		<div className={styles.questionTab}>
            <div className={styles.answers}>
                {questions.map(answer => {
                    return (
                        <>
                    <div className={styles.answer}>
                        <ul><li>{answer.text}</li></ul>
                    </div>
                        </>
                    );
                })}
            </div>
        </div>
	);
};