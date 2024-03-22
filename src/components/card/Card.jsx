import React from 'react';
import styles from "./card.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/greenveg.jpg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>22.03.2024 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Echoes of Tradition: Celebrating Indian Culture</h1>
                </Link>
                <p className={styles.desc}>
                    Indian culture, a vibrant tapestry of traditions, celebrates unity amidst diversity, weaving spirituality into the fabric of daily life. Its rich heritage echoes through art,
                    music, and a profound reverence for familial bonds.
                </p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card