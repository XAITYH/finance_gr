import React from "react";
import styles from "./landing-footer.module.css"
import Image from "next/image";
import LandingButton from "../landing-button/landing-button";
import loudspeaker from "../icons/loudspeaker.svg"
import logo from "../icons/logo.svg"
import instagram from "../icons/instagram.svg"
import vk from "../icons/vk.svg"
import facebook from "../icons/facebook.svg"
import youtube from "../icons/youtube.svg"
import Link from "next/link";

export default function LandingFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerObjects}>
                <div className={styles.warningContainer}>
                    <Image src={loudspeaker} alt="loudspeaker-image"/>
                    <p className={styles.warning}>
                    Все блоки проходятся строго по порядку. Пропустить какой-то блок или начать обучение с середины нельзя, даже если вы считаете, 
                    что уже знаете какую-то часть материала. Только так мы можем гарантировать, что вы получите все знания, 
                    предусмотренные учебной программой.
                    </p>
                    <LandingButton width={311} height={70} fontSize={20}>Начать обучение</LandingButton>
                </div>
                <div className={styles.information}>
                    <div className={styles.links_school}>
                        <div className={styles.school_container}>
                            <Image className={styles.logo} src={logo} alt="logotype-image"/>
                            <p className={styles.school}>Школа финансовой грамоты</p>
                        </div>
                        <div className={styles.soical_media_links}>
                            <Image className={styles.social_media} src={instagram} alt="instagram-image"/>
                            <Image className={styles.social_media} src={vk} alt="vk-image"/>
                            <Image className={styles.social_media} src={facebook} alt="facebook-image"/>
                            <Image className={styles.social_media} src={youtube} alt="youtube-image"/>
                        </div>
                    </div>
                    <ul className={styles.linksUl}>
                        <li className={styles.linksLi}><a className={styles.links}>Чему вы научитесь</a></li>
                        <li className={styles.linksLi}><a className={styles.links}>Процесс обучения</a></li>
                        <li className={styles.linksLi}><a className={styles.links}>Стоимость</a></li>
                        <li className={styles.linksLi}><a className={styles.links}>Контакты</a></li>
                        <li className={styles.linksLi}><a className={styles.links}>Регистрация</a></li>
                    </ul>
                    <div className={styles.contact_info}>
                        <Link href='/' className={styles.e_mail}>info@ytyt.by</Link>
                        <p className={styles.tel_number}>+375 99 999 99 99</p>
                        <p className={styles.organization}>Независимая организация</p>
                    </div>
                </div>
                <div className={styles.last_info}>
                    <p className={styles.copyright}>© 2024 ytyt — Все права защищены</p>
                    <a className={styles.user_agreement}>Пользовательское соглашение</a>
                    <a className={styles.privacy_policy}>Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
}