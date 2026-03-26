"use client";

import Link from "next/link";
import styles from "./SpecialEditionsMenu.module.css";
import OptimizedImage from "../../common/OptimizedImage";

export default function SpecialEditionsMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>

        <div className={styles.column}>
          <h4 className={styles.heading}>COLLECTIONS</h4>

          <ul className={styles.list}>
            <li><Link href="/special-editions/limited" className={styles.link}>LIMITED EDITIONS</Link></li>
            <li><Link href="/special-editions/seasonal" className={styles.link}>SEASONAL COLLECTION</Link></li>
            <li><Link href="/special-editions/exclusive" className={styles.link}>EXCLUSIVE DESIGNS</Link></li>
          </ul>
        </div>

        <div className={styles.imageBox}>
          <OptimizedImage
            src="/images/NAVBAR/special-editions.jpg"
            alt="special collections"
            width={323}
            height={485}
            className={styles.image}
          />

          <p className={styles.caption}>
            "EXCLUSIVE BY AL DIAMAS"
          </p>
        </div>

      </div>
    </div>
  );
}