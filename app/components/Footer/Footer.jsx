"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import OptimizedImage from "../common/OptimizedImage";

import {
  customerCare,
  aboutLinks,
  serviceLinks,
  socialIcons,
} from "./footer";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* CUSTOMER CARE */}
        <FooterColumn title="CUSTOMER CARE" links={customerCare} />

        {/* ABOUT */}
        <FooterColumn title="ABOUT AL DIAMAS" links={aboutLinks} />

        {/* SERVICES */}
        <FooterColumn title="SERVICES & POLICIES" links={serviceLinks} />

        {/* NEWSLETTER */}
        <div className={`${styles.column} ${styles.newsletter}`}>
          <h4 className={styles.heading}>FROM AL DIAMAS</h4>

          <p className={styles.newsletterText}>
            BE THE FIRST TO DISCOVER NEW DESIGNS AND EXCLUSIVE RELEASES.
          </p>

          <input
            type="email"
            placeholder="EMAIL"
            className={styles.input}
          />

          <button className={styles.signupBtn}>
            SIGN UP
          </button>

          <div className={styles.checkRow}>
            <input type="checkbox" />
            <span>
              BY SIGNING UP, YOU AGREE TO RECEIVE UPDATES FROM AL DIAMAS.
              VIEW OUR PRIVACY POLICY.
            </span>
          </div>

          <div className={styles.socialIcons}>
            {socialIcons.map((icon) => (
              <a key={icon.alt} href={icon.href} target="_blank" rel="noopener noreferrer">
                <OptimizedImage
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className={styles.bottomBar}>
        <p>© 2025 AL DIAMAS. ALL RIGHTS RESERVED. AUSTRALIAN OWNED & OPERATED.</p>
        <span>AUSTRALIA | AUD $</span>
      </div>
    </footer>
  );
}

/* 🔥 REUSABLE COLUMN COMPONENT */
function FooterColumn({ title, links }) {
  return (
    <div className={styles.column}>
      <h4 className={styles.heading}>{title}</h4>
      <ul className={styles.list}>
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={styles.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}