import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

export const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<h1 className={styles.title}>Финансовая грамотность</h1>
				<div className={styles.links}>
					<Link href='/loginPage'>Вход</Link>
					<Link href='/registrationPage'>Регистрация</Link>
				</div>
			</header>
		</>
	);
};
