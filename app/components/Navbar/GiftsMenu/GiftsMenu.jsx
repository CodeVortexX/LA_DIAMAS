"use client";

import Link from "next/link";
import styles from "./GiftsMenu.module.css";
import OptimizedImage from "../../common/OptimizedImage";

export default function GiftsMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>

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

        <div className={styles.column}>
          <h4 className={styles.heading}>GIFT GUIDES</h4>

          <ul className={styles.list}>
            <li><Link href="/gifts/for-her" className={styles.link}>GIFTS FOR HER</Link></li>
            <li><Link href="/gifts/for-him" className={styles.link}>GIFTS FOR HIM</Link></li>
            <li><Link href="/gifts/couples" className={styles.link}>COUPLE GIFTS</Link></li>
            <li><Link href="/gifts/best-sellers" className={styles.link}>BEST SELLERS</Link></li>
          </ul>
        </div>

        <div className={styles.imageBox}>
          <div className={styles.imageWrapper}>
            <OptimizedImage
              src="/images/NAVBAR/gift-menu.jpg"
              alt="gift jewellery"
              width={585}
              height={390}
              className={styles.image}
            />
          </div>

          <p className={styles.caption}>
            "A GIFT BEYOND TIME"
          </p>
        </div>

      </div>
    </div>
  );
}