import React from 'react';
import styles from "./landing-button.module.css"
import Image from "next/image";
import arrowUp from "../icons/arrowUp.svg"

export default function LandingButton ({ width, height, fontSize=16, color='white', children }) {
    const buttonStyle = {
        height: height,
        width: width,
        fontSize: fontSize,
        color: color
    };
	return (
			<button
                style={buttonStyle}
                className={styles.button}
            >
                {children} <Image className={styles.arrowUp} src={arrowUp} alt='arrow-up-image'/>
            </button>
	);
};
