"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const customerCare = [
  { label: "CONTACT US",                    href: "/contact" },
  { label: "SHIPPING & DELIVERY",           href: "/shipping" },
  { label: "RETURNS & EXCHANGES",           href: "/returns" },
  { label: "RING SIZE GUIDE",               href: "/guides/ring-size" },
  { label: "JEWELLERY CARE",                href: "/jewellery-care" },
  { label: "FAQS",                          href: "/faqs" },
];

const aboutLinks = [
  { label: "OUR STORY",       href: "/about" },
  { label: "CRAFTSMANSHIP",   href: "/craftsmanship" },
  { label: "DESIGN",          href: "/design" },
  { label: "PHILOSOPHY",      href: "/philosophy" },
  { label: "SUSTAINABILITY",  href: "/sustainability" },
  { label: "ETHICAL SOURCING",href: "/ethical-sourcing" },
];

const serviceLinks = [
  { label: "WARRANTY & LIFETIME CARE",        href: "/warranty" },
  { label: "DIAMOND CERTIFICATION (GIA/IGI)", href: "/certification" },
  { label: "PAYMENT METHODS",                 href: "/payment" },
  { label: "PRIVACY POLICY",                  href: "/privacy" },
  { label: "TERMS & CONDITIONS",              href: "/terms" },
];

const socialIcons = [
  { src: "/icons/Instagram.svg", alt: "Instagram", href: "https://instagram.com" },
  { src: "/icons/Twitter.svg",   alt: "Twitter",   href: "https://twitter.com" },
  { src: "/icons/Facebook.svg",  alt: "Facebook",  href: "https://facebook.com" },
  { src: "/icons/Youtube.svg",   alt: "YouTube",   href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* CUSTOMER CARE */}
        <div className={styles.column}>
          <h4 className={styles.heading}>CUSTOMER CARE</h4>
          <ul className={styles.list}>
            {customerCare.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ABOUT */}
        <div className={styles.column}>
          <h4 className={styles.heading}>ABOUT AL DIAMAS</h4>
          <ul className={styles.list}>
            {aboutLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div className={styles.column}>
          <h4 className={styles.heading}>SERVICES & POLICIES</h4>
          <ul className={styles.list}>
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

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
            autoComplete="off"
            name="newsletter-email"
            data-lpignore="true"
            suppressHydrationWarning
          />
          <button className={styles.signupBtn} suppressHydrationWarning>
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
                <Image src={icon.src} alt={icon.alt} width={26} height={26} />
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
