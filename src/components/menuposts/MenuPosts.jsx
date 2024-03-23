import React from 'react';
import styles from "./menuPosts.module.css";
import Link from 'next/link';
import Image from 'next/image';

const MenuPosts = ({ withImage }) => {
    return (

        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src="/greenveg.jpg" alt="" fill className={styles.image} />
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>
                        Travel
                    </span>
                    <h3 className={styles.postTitle}>Exploring the world offers a journey of self-discovery,
                        where every destination becomes a chapter in the story of our lives.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>AK</span>
                        <span className={styles.date}> - 22.03.2024</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src="/greenveg.jpg" alt="" fill className={styles.image} />
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.culture}`}>
                        Culture
                    </span>
                    <h3 className={styles.postTitle}>Exploring the world offers a journey of self-discovery,
                        where every destination becomes a chapter in the story of our lives.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>AK</span>
                        <span className={styles.date}> - 22.03.2024</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src="/greenveg.jpg" alt="" fill className={styles.image} />
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`}>
                        Food
                    </span>
                    <h3 className={styles.postTitle}>Exploring the world offers a journey of self-discovery,
                        where every destination becomes a chapter in the story of our lives.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>AK</span>
                        <span className={styles.date}> - 22.03.2024</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src="/greenveg.jpg" alt="" fill className={styles.image} />
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.fashion}`}>
                        Fashion
                    </span>
                    <h3 className={styles.postTitle}>Exploring the world offers a journey of self-discovery,
                        where every destination becomes a chapter in the story of our lives.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>AK</span>
                        <span className={styles.date}> - 22.03.2024</span>
                    </div>
                </div>
            </Link>
        </div>


    )
}

export default MenuPosts