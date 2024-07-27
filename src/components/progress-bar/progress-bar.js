import React from 'react';
import styles from './progress-bar.module.css';

export const ProgressBar = ({ currentQuestionIndex }) => {
	return (
		<div className={styles.barContainer}>
			<div className={styles.progress_bar}>
				<div className={styles.progress}></div>
					<div className={styles.progress_number}>{currentQuestionIndex+1} из 20</div>
			</div>
		</div>
	);
};
