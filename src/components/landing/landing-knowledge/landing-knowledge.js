import React from "react";
import styles from "./landing-knowledge.module.css"
import Image from "next/image";
import programmer from "../icons/programmer.svg"
import codeTerminal from "../icons/codeTerminal.svg"
import sphere from "../icons/sphere.svg"
import monitorLines from "../icons/monitorLines.svg"
import calendar from "../icons/calendar.svg"
import chat from "../icons/chat.svg"
import coin from "../icons/coin.svg"
import phoneCard from "../icons/phoneCard.svg"

export default function LandingKnowledge() {
    return (
        <div className={styles.knowledgeWrapper}>
            <div className={styles.objects}>
            <h2 className={styles.whatKnowledge}>Какими знаниями вы овладеете:</h2>
            <div className={styles.baseKnowledge}>
                <Image src={programmer} className={styles.programmerImage} alt="programmer-image"/>
                <div className={styles.bKText}>
                    <div className={styles.Row}>  
                            <div className={styles.progLanguage}>Язык программирования Python</div>
                            <div className={styles.networks}>Сети</div> 
                    </div>
                    <div className={styles.Row}>
                        <div className={styles.bd}>Базы данных</div>
                        <div className={styles.frameworks}>Фреймворки Flask и Django</div>
                    </div>
                    <div className={styles.Row}>
                        <div className={styles.testing}>Отладка и тестирование</div>
                        <div className={styles.docker}>Docker</div>
                        <div className={styles.git}>Git</div>
                    </div>
                    <p className={styles.minKnowledge}>Это необходимый минимум для современного backend-разработчика</p>
                </div>
            </div>
            <h2 className={styles.ourEducation}>Обучение у нас – это удобно и результативно</h2>
                <div className={styles.advantagesTop}>
                    <div className={styles.advantages}>
                        <Image className={styles.icons} src={codeTerminal} alt="terminal-image"/>
                        <h3 className={styles.title}>Огромное количество практики</h3>
                        <p className={styles.descriptionFirst}>Более 500 самостоятельных заданий и 20 полноценных больших проектов</p>
                    </div>
                    <div className={styles.advantages}>
                        <Image className={styles.icons} src={sphere} alt="sphere-image"/>
                        <h3 className={styles.title}>Современные методики обучения</h3>
                        <p className={styles.descriptionSecond}>Спиральное обучение:
                        погружаемся в материал постепенно, виток за витком</p>
                    </div>
                    <div className={styles.advantages}>
                        <Image className={styles.icons} src={monitorLines} alt="monitor-lines-image"/>
                        <h3 className={styles.title}>Простое и понятное изложение</h3>
                        <p className={styles.descriptionThird}>Вместо заумных терминов – примеры из реального мира</p>
                    </div>
                    <div className={styles.advantages}>
                        <Image className={styles.iconsCalendar} src={calendar} alt="calendar-image"/>
                        <h3 className={styles.title}>Гибкий график занятий</h3>
                        <p className={styles.descriptionFourth}>Учитесь в любое время в удобном для вас темпе</p>
                    </div>
                </div>
                <div className={styles.advantagesBottom}>
                    <div className={styles.advantages}>
                        <Image className={styles.icons} src={chat} alt="chat-image"/>
                        <h3 className={styles.title}>Прямая связь с опытными программистами</h3>
                        <p className={styles.descriptionFifth}>Задавайте вопросы и отправляйте свой код на проверку</p>
                    </div>
                    <div className={styles.advantages}>
                        <Image className={styles.icons} src={coin} alt="coin-image"/>
                        <h3 className={styles.title}>Оплата небольшими частями</h3>
                        <p className={styles.descriptionSixth}>Платите только за тот материал, который сейчас изучаете, а не за весь курс сразу</p>
                    </div>
                    <div className={styles.advantages}>
                        <Image className={styles.icons} src={phoneCard} alt="phone-card-image"/>
                        <h3 className={styles.title}>Быстрый и легкий возврат</h3>
                        <p className={styles.descriptionSeventh}>Если передумаете учиться – вернем деньги за 3 рабочих дня</p>
                    </div>
                </div>
            </div>
        </div>
    );
}