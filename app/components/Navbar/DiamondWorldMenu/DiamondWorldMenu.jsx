"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./DiamondWorldMenu.module.css";

export default function DiamondWorldMenu() {
  return (
    <div className={styles.menu}>

      <div className={styles.container}>

        {/* COLUMN 1 */}
        <div className={styles.column}>
          <h4 className={styles.heading}>OUR WORLD</h4>

          <ul className={styles.list}>
            <li><Link href="/diamond-world/about" className={styles.link}>ABOUT AL DIAMAS</Link></li>
            <li><Link href="/diamond-world/craftsmanship" className={styles.link}>OUR CRAFTSMANSHIP</Link></li>
            <li><Link href="/diamond-world/design-philosophy" className={styles.link}>DESIGN PHILOSOPHY</Link></li>
          </ul>
        </div>


        {/* COLUMN 2 */}
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


        {/* IMAGE */}
        <div className={styles.imageBox}>

          <Image
            src="/images/diamond-world.jpg"
            alt="diamond craftsmanship"
            width={420}
            height={420}
            className={styles.image}
            unoptimized
          />

          <p className={styles.caption}>
            "CRAFTED WITH PURPOSE"
          </p>

        </div>

      </div>

    </div>
  );
}