"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./GiftsMenu.module.css";

export default function GiftsMenu() {
  return (
    <div className={styles.menu}>

      <div className={styles.container}>

        {/* COLUMN 1 */}
        <div className={styles.column}>
          <h4 className={styles.heading}>OCCASIONS</h4>

          <ul className={styles.list}>
            <li><Link href="/gifts/anniversary" className={styles.link}>ANNIVERSARY</Link></li>
            <li><Link href="/gifts/birthday" className={styles.link}>BIRTHDAY</Link></li>
            <li><Link href="/gifts/engagement" className={styles.link}>ENGAGEMENT GIFTS</Link></li>
            <li><Link href="/gifts/wedding" className={styles.link}>WEDDING GIFTS</Link></li>
            <li><Link href="/gifts/just-because" className={styles.link}>JUST BECAUSE</Link></li>
          </ul>
        </div>


        {/* COLUMN 2 */}
        <div className={styles.column}>
          <h4 className={styles.heading}>GIFT GUIDES</h4>

          <ul className={styles.list}>
            <li><Link href="/gifts/for-her" className={styles.link}>GIFTS FOR HER</Link></li>
            <li><Link href="/gifts/for-him" className={styles.link}>GIFTS FOR HIM</Link></li>
            <li><Link href="/gifts/couples" className={styles.link}>COUPLE GIFTS</Link></li>
            <li><Link href="/gifts/best-sellers" className={styles.link}>BEST SELLERS</Link></li>
          </ul>
        </div>


        {/* IMAGE COLUMN */}
        <div className={styles.imageBox}>

          <Image
            src="/images/gift-menu.jpg"
            alt="gift jewellery"
            width={420}
            height={420}
            className={styles.image}
          />

          <p className={styles.caption}>
            "A GIFT BEYOND TIME"
          </p>

        </div>

      </div>

    </div>
  );
}