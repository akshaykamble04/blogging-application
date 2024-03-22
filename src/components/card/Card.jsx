import React from 'react';
import styles from "./card.module.css";
import Image from 'next/image';

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/greenveg.jpg" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Card