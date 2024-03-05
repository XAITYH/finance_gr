import React from 'react';
import styles from './button.module.css';

export const CustomButton = ({ children }) => {
	return (
		<div className={styles.button_wrapper}>
			<button className={styles.button_body}>{children}</button>
		</div>
	);
};
