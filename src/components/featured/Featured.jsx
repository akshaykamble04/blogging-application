import React from 'react';
import styles from "./featured.module.css";
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}><b>Hey, AK here...</b>
                Discover new stories and creative ideas</h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/greenveg.jpg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Verdant Bounty: Embracing Green Vegetables</h1>
                    <p className={styles.postDesc}>
                        Green vegetables, nature's emerald jewels, offer a plethora of nutrients vital for our well-being.
                        From crisp spinach leaves to tender asparagus spears, each green vegetable brings its own unique flavor and nutritional profile to the table.
                        Rich in vitamins, minerals, and antioxidants, these verdant wonders promote vitality and bolster our immune systems.
                        Incorporating an array of green vegetables into our diets not only nourishes our bodies but also supports environmental sustainability.
                        Let us celebrate the vibrant hues and wholesome goodness of green vegetables as we savor their freshness and vitality on our plates.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured