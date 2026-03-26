"use client";

import Link from "next/link";
import styles from "./EngagementMenu.module.css";
import {
  engagementMenu,
  engagementShapes,
  engagementMetals,
  engagementGuide,
} from "./engagementMenuData";

export default function EngagementMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>

        <div className={styles.column}>
          <h4 className={styles.heading}>SHOP BY STYLE</h4>
          <ul className={styles.list}>
            {engagementMenu.map((item) => (
              <li key={item.link}>
                <Link href={item.link} className={styles.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>SHOP BY SHAPE</h4>
          <ul className={styles.list}>
            {engagementShapes.map((item) => (
              <li key={item.link}>
                <Link href={item.link} className={styles.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>SHOP BY METAL</h4>
          <ul className={styles.list}>
            {engagementMetals.map((item) => (
              <li key={item.link}>
                <Link href={item.link} className={styles.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          {engagementGuide.map((group) => (
            <div key={group.title} className={styles.group}>
              <h4 className={styles.heading}>{group.title}</h4>

              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item.link}>
                    <Link href={item.link} className={styles.link}>
                      {item.title}
                    </Link>

                    {item.title === "SIGNATURE ENGAGEMENT RINGS" && (
                      <div className={styles.divider}></div>
                    )}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}