"use client";

import styles from "./SearchMenu.module.css";
import OptimizedImage from "../../common/OptimizedImage";

export default function SearchMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.column}>
          <div className={styles.searchBox}>
            <OptimizedImage
              src="/icons/search_icon.svg"
              alt="search"
              width={20}
              height={20}
            />
            <input type="text" placeholder="SEARCH LA DIAMAS" />
          </div>

          <h4 className={styles.heading}>POPULAR SEARCHES</h4>

          <ul className={styles.list}>
            <li className={styles.link}>ENGAGEMENT RING</li>
            <li className={styles.link}>WEDDING RINGS</li>
            <li className={styles.link}>SOLITAIRE</li>
            <li className={styles.link}>GEMSTONE</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.columnWide}>
          <h4 className={styles.heading}>DISCOVER MORE</h4>

          <div className={styles.cards}>

            <div className={styles.card}>
              <OptimizedImage
                src="/images/NAVBAR/search1.jpg"
                alt="New Arrivals"
                width={300}
                height={200}
                priority
              />
              <p className={styles.cardText}>NEW ARRIVALS</p>
            </div>

            <div className={styles.card}>
              <OptimizedImage
                src="/images/NAVBAR/search2.jpg"
                alt="Best Sellers"
                width={300}
                height={200}
              />
              <p className={styles.cardText}>BEST SELLERS</p>
            </div>

            <div className={styles.card}>
              <OptimizedImage
                src="/images/NAVBAR/search3.png"
                alt="Gift Collection"
                width={300}
                height={200}
              />
              <p className={styles.cardText}>GIFT COLLECTION</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}