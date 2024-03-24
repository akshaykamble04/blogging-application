import React from 'react';
import styles from "./singlePage.module.css";
import Menu from '@/components/menu/Menu';
import Image from 'next/image';

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Indian culture, a tapestry of traditions, embraces diversity with vibrant colors of rituals
                        and spirituality.
                    </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/culture.jpg" alt="" fill className={styles.image} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>AK</span>
                            <span className={styles.date}>23.03.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/culture.jpg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Indian culture, a mosaic of myriad customs,
                            dances to the rhythms of timeless traditions, celebrating unity in diversity. From the majestic temples to the bustling bazaars, every corner exudes the fragrance of spirituality and hospitality, nurturing ancient wisdom amidst modern strides. Vibrant festivals illuminate the cultural landscape, weaving stories of love, faith, and resilience,
                            shaping a rich tapestry of heritage cherished
                            across generations.
                        </p>
                        <p>
                            Indian culture, a mosaic of myriad customs,
                            dances to the rhythms of timeless traditions, celebrating unity in diversity. From the majestic temples to the bustling bazaars, every corner exudes the fragrance of spirituality and hospitality, nurturing ancient wisdom amidst modern strides. Vibrant festivals illuminate the cultural landscape, weaving stories of love, faith, and resilience,
                            shaping a rich tapestry of heritage cherished
                            across generations.
                        </p>
                        <h2>Indian Heritage And Diversity</h2>
                        <p>
                            Indian culture, a mosaic of myriad customs,
                            dances to the rhythms of timeless traditions, celebrating unity in diversity. From the majestic temples to the bustling bazaars, every corner exudes the fragrance of spirituality and hospitality, nurturing ancient wisdom amidst modern strides. Vibrant festivals illuminate the cultural landscape, weaving stories of love, faith, and resilience,
                            shaping a rich tapestry of heritage cherished
                            across generations.
                        </p>
                    </div>

                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage