"use client";

import Link from "next/link";
import styles from "./DiamondWorldMenu.module.css";
import OptimizedImage from "../../common/OptimizedImage";

export default function DiamondWorldMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>

        <div className={styles.column}>
          <h4 className={styles.heading}>OUR WORLD</h4>

          <ul className={styles.list}>
            <li><Link href="/diamond-world/about" className={styles.link}>ABOUT AL DIAMAS</Link></li>
            <li><Link href="/diamond-world/craftsmanship" className={styles.link}>OUR CRAFTSMANSHIP</Link></li>
            <li><Link href="/diamond-world/design-philosophy" className={styles.link}>DESIGN PHILOSOPHY</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>DIAMONDS & TRUST</h4>

          <ul className={styles.list}>
            <li><Link href="/diamond-world/journey" className={styles.link}>THE DIAMOND JOURNEY</Link></li>
            <li><Link href="/guides/4cs" className={styles.link}>THE 4CS EXPLAINED</Link></li>
            <li><Link href="/diamond-world/lab-grown" className={styles.link}>LAB-GROWN DIAMONDS</Link></li>
            <li><Link href="/diamond-world/natural" className={styles.link}>NATURAL DIAMONDS</Link></li>
            <li><Link href="/diamond-world/ethical-sourcing" className={styles.link}>ETHICAL SOURCING</Link></li>
            <li><Link href="/diamond-world/sustainability" className={styles.link}>SUSTAINABILITY</Link></li>
          </ul>
        </div>

        <div className={styles.imageBox}>
          <OptimizedImage
            src="/images/NAVBAR/diamond-world.jpg"
            alt="diamond craftsmanship"
            width={320}
            height={420}
            className={styles.image}
          />

          <p className={styles.caption}>
            "CRAFTED WITH PURPOSE"
          </p>
        </div>

      </div>
    </div>
  );
}