import React from 'react';
import styles from "./navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authlinks/AuthLinks';
import ThemeToggle from '../themetoggle/ThemeToggle';

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook" width={24} height={24} />
                <Image src="/instagram.png" alt="facebook" width={24} height={24} />
                <Image src="/youtube.png" alt="facebook" width={24} height={24} />
                <Image src="/twitter.png" alt="facebook" width={24} height={24} />
            </div>
            <div className={styles.logo}>Blog Hub</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/" className={styles.link}>Homepage</Link>
                <Link href="/" className={styles.link}>Contact</Link>
                <Link href="/" className={styles.link}>About</Link>
                <AuthLinks />
            </div>
        </div>
    )
}
