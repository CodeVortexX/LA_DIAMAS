"use client";

import Link from "next/link";
import styles from "./WeddingMenu.module.css";
import OptimizedImage from "../../common/OptimizedImage";

export default function WeddingMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>

        <div className={styles.column}>
          <h4 className={styles.heading}>WEDDING BANDS</h4>
          <ul className={styles.list}>
            <li><Link href="/wedding/womens-bands" className={styles.link}>WOMEN'S WEDDING BANDS</Link></li>
            <li><Link href="/wedding/mens-bands" className={styles.link}>MEN'S WEDDING BANDS</Link></li>
            <li><Link href="/wedding/matching" className={styles.link}>MATCHING HIS & HERS</Link></li>
            <li><Link href="/wedding/diamond-bands" className={styles.link}>DIAMOND WEDDING BANDS</Link></li>
            <li><Link href="/wedding/plain-bands" className={styles.link}>CLASSIC PLAIN BANDS</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>STYLE</h4>
          <ul className={styles.list}>
            <li><Link href="/wedding/style/classic" className={styles.link}>CLASSIC</Link></li>
            <li><Link href="/wedding/style/minimal" className={styles.link}>MINIMAL</Link></li>
            <li><Link href="/wedding/style/modern" className={styles.link}>MODERN</Link></li>
            <li><Link href="/wedding/style/vintage" className={styles.link}>VINTAGE</Link></li>
            <li><Link href="/wedding/style/eternity" className={styles.link}>ETERNITY</Link></li>
            <li><Link href="/wedding/style/half-eternity" className={styles.link}>HALF ETERNITY</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>SHOP BY METAL</h4>
          <ul className={styles.list}>
            <li><Link href="/wedding/metal/platinum" className={styles.link}>PLATINUM</Link></li>
            <li><Link href="/wedding/metal/yellow-gold" className={styles.link}>YELLOW GOLD</Link></li>
            <li><Link href="/wedding/metal/white-gold" className={styles.link}>WHITE GOLD</Link></li>
            <li><Link href="/wedding/metal/rose-gold" className={styles.link}>ROSE GOLD</Link></li>
          </ul>
        </div>

        <div className={styles.imageBox}>
          <OptimizedImage
            src="/images/NAVBAR/wedding-menu.jpg"
            alt="wedding rings"
            width={320}
            height={420}
            className={styles.image}
          />

          <p className={styles.caption}>
            "DESIGNED FOR A LIFETIME"
          </p>
        </div>

      </div>
    </div>
  );
}