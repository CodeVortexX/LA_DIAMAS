"use client";

import Link from "next/link";
import { Fragment } from "react";
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

        {/* COLUMN 1 — SHOP BY STYLE */}
        <div className={styles.column}>
          <h4 className={styles.heading}>SHOP BY STYLE</h4>
          <ul className={styles.list}>
            {engagementMenu.map((item) => (
              <li key={item.link}>
                <Link href={item.link} className={styles.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 2 — SHOP BY SHAPE */}
        <div className={styles.column}>
          <h4 className={styles.heading}>SHOP BY SHAPE</h4>
          <ul className={styles.list}>
            {engagementShapes.map((item) => (
              <li key={item.link}>
                <Link href={item.link} className={styles.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3 — SHOP BY METAL */}
        <div className={styles.column}>
          <h4 className={styles.heading}>SHOP BY METAL</h4>
          <ul className={styles.list}>
            {engagementMetals.map((item) => (
              <li key={item.link}>
                <Link href={item.link} className={styles.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 4 — GUIDE */}
        <div className={styles.column}>
          <h4 className={styles.heading}>DESIGN & DIAMOND GUIDE</h4>
          <ul className={styles.list}>
            {engagementGuide.map((item) => (
              <Fragment key={item.link}>
                {item.highlight && <div className={styles.divider} />}
                <li>
                  <Link
                    href={item.link}
                    className={`${styles.link} ${item.highlight ? styles.highlight : ""}`}
                  >
                    {item.title}
                  </Link>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
