"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./FineJewelleryMenu.module.css";

export default function FineJewelleryMenu() {
  return (
    <div className={styles.menu}>

      <div className={styles.container}>

        {/* COLUMN 1 */}
        <div className={styles.column}>
          <h4 className={styles.heading}>SHOP BY CATEGORIES</h4>

          <ul className={styles.list}>
            <li><Link href="/fine-jewellery/womens-bands" className={styles.link}>WOMEN'S WEDDING BANDS</Link></li>
            <li><Link href="/fine-jewellery/mens-bands" className={styles.link}>MEN'S WEDDING BANDS</Link></li>
            <li><Link href="/fine-jewellery/matching" className={styles.link}>MATCHING HIS & HERS</Link></li>
            <li><Link href="/fine-jewellery/diamond-bands" className={styles.link}>DIAMOND WEDDING BANDS</Link></li>
            <li><Link href="/fine-jewellery/plain-bands" className={styles.link}>CLASSIC PLAIN BANDS</Link></li>
          </ul>
        </div>


        {/* COLUMN 2 */}
        <div className={styles.column}>

          <h4 className={styles.heading}>STYLE & FOR</h4>

          <p className={styles.subTitle}>STYLES</p>

          <ul className={styles.list}>
            <li><Link href="/fine-jewellery/style/everyday" className={styles.link}>EVERYDAY</Link></li>
            <li><Link href="/fine-jewellery/style/essentials" className={styles.link}>ESSENTIALS</Link></li>
            <li><Link href="/fine-jewellery/style/statement" className={styles.link}>STATEMENT PIECE</Link></li>
            <li><Link href="/fine-jewellery/style/minimal-gold" className={styles.link}>MINIMAL GOLD</Link></li>
            <li><Link href="/fine-jewellery/style/diamond" className={styles.link}>DIAMOND</Link></li>
            <li><Link href="/fine-jewellery/style/accents" className={styles.link}>ACCENTS</Link></li>
          </ul>

          <p className={styles.subTitle}>FOR</p>

          <ul className={styles.list}>
            <li><Link href="/fine-jewellery/for-her" className={styles.link}>FOR HER</Link></li>
            <li><Link href="/fine-jewellery/for-him" className={styles.link}>FOR HIM</Link></li>
            <li><Link href="/fine-jewellery/unisex" className={styles.link}>UNISEX</Link></li>
          </ul>

        </div>


        {/* COLUMN 3 IMAGE */}
        <div className={styles.imageBox}>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/fine-jewellery.jpg"
              alt="fine jewellery"
              fill
              className={styles.image}
            />
          </div>

          <p className={styles.caption}>
            "EVERYDAY ELEGANCE"
          </p>

        </div>

      </div>

    </div>
  );
}