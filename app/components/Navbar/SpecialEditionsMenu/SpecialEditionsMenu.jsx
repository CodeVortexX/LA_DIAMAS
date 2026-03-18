"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./SpecialEditionsMenu.module.css";

export default function SpecialEditionsMenu() {
  return (
    <div className={styles.menu}>

      <div className={styles.container}>

        {/* COLLECTION COLUMN */}
        <div className={styles.column}>
          <h4 className={styles.heading}>COLLECTIONS</h4>

          <ul className={styles.list}>
            <li><Link href="/special-editions/limited" className={styles.link}>LIMITED EDITIONS</Link></li>
            <li><Link href="/special-editions/seasonal" className={styles.link}>SEASONAL COLLECTION</Link></li>
            <li><Link href="/special-editions/exclusive" className={styles.link}>EXCLUSIVE DESIGNS</Link></li>
          </ul>
        </div>


        {/* IMAGE COLUMN */}
        <div className={styles.imageBox}>

          <Image
            src="/images/special-editions.jpg"
            alt="special collections"
            width={420}
            height={420}
            className={styles.image}
            unoptimized
          />

          <p className={styles.caption}>
            "EXCLUSIVE BY AL DIAMAS"
          </p>

        </div>

      </div>

    </div>
  );
}