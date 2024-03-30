import React from 'react';
import { ProgressBar } from '@/components/progress-bar/progress-bar';
import { QuestionTab } from '@/components/question-tab/question-tab';
import { Question } from '@/components/question/question';
import { FooterNav } from '@/components/footer-nav/footer-nav';

export default function FullQuestion() {
	return (
		<>
			<header><Question /></header>
			<main>
				<QuestionTab />
				<ProgressBar />
			</main>
			<FooterNav />
		</>
	);
}
