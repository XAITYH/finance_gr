import React from 'react';
import styles from './question-tab.module.css'
import questions from '@/app/questions/answers';
import { Question } from '@/components/question/question';
import { ProgressBar } from '../progress-bar/progress-bar';
import { FooterNav } from '../footer-nav/footer-nav';


export const QuestionTab = () => {
	return (
		<div className={styles.questionTab}>
            <header className={styles.header}><Question /></header>
                <main className={styles.main}><ProgressBar /></main>
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
                <footer className={styles.footer}><FooterNav /></footer>
        </div>
	);
};