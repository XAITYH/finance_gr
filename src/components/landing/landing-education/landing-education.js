import React from 'react';
import styles from './landing-education.module.css';
import Image from 'next/image';
import macbook from '../icons/macbook.svg';
import shadow from '../images/macbookShadow.svg';
import playButton from '../icons/playButton.svg';
import arrowUp from '../icons/arrowUp.svg';
import LandingButton from '../landing-button/landing-button';

export default function LandingEducation() {
	return (
		<div className={styles.educationWrapper}>
			<div className={styles.edObjects}>
				<h2 className={styles.howWeTeach}>Как у нас происходит обучение?</h2>
				<p className={styles.ourProgram}>
					Обучение должно быть комфортным. Поэтому мы разработали собственную
					платформу для обучения финансовой грамоте. На ней вы можете не только
					изучать теорию, но и выполнять интерактивные практические задания.
				</p>
				{/* <div className={styles.video}>
                <Image className={styles.macbook} src={macbook} alt="macbook-image"/>
                <Image className={styles.macbookShadow} src={shadow} alt="macbook-shadow-image"/>
                <button className={styles.playButton}>
                    <Image className={styles.playButtonImage} src={playButton} alt="macbook-play-button"/>
                </button>
                <h3 className={styles.lookVideo}>Посмотреть видео</h3>
            </div> */}
				<div className={styles.top3}>
					<div className={styles.top}>
						<h1 className={styles.num}>01</h1>
						<h2 className={styles.title}>
							Весь материал разбит на небольшие уроки
						</h2>
						<p className={styles.description1}>
							Теория и практика подаются маленькими порциями. Так вам будет
							легче усваивать новые знания.
						</p>
					</div>
					<div className={styles.top}>
						<h1 className={styles.num}>02</h1>
						<h2 className={styles.title}>Обучение через практику</h2>
						<p className={styles.description2}>
							Всё, что вы узнали, вы тут же начинаете применять на практике. Вы
							сразу видите результаты своего труда.
						</p>
					</div>
					<div className={styles.top}>
						<h1 className={styles.num}>03</h1>
						<h2 className={styles.title}>Нет ограничений по времени</h2>
						<p className={styles.description3}>
							Можно совмещать учёбу с другими дeлами. Не нужно выпрашивать
							отпуск, если пришлось сделать перерыв.
						</p>
					</div>
				</div>
				<div className={styles.startEducation}>
					<LandingButton width={249} height={70}>
						Начать обучение
					</LandingButton>
					<p className={styles.testStartText}>
						Попробуйте сами первые уроки, но нужно пройти тестирование
					</p>
				</div>
			</div>
		</div>
	);
}
