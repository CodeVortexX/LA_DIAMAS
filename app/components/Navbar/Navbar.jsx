"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Header from "./Header/Header";
import EngagementMenu from "./EngagementMenu/EngagementMenu";
import WeddingMenu from "./WeddingMenu/WeddingMenu";
import FineJewelleryMenu from "./FineJewelleryMenu/FineJewelleryMenu";
import GiftsMenu from "./GiftsMenu/GiftsMenu";
import DiamondWorldMenu from "./DiamondWorldMenu/DiamondWorldMenu";
import SpecialEditionsMenu from "./SpecialEditionsMenu/SpecialEditionsMenu";

const navItems = [
  { label: "ENGAGEMENT", key: "engagement" },
  { label: "WEDDING", key: "wedding" },
  { label: "FINE JEWELLERY", key: "fine_jewellery" },
  { label: "GIFTS & MOMENTS", key: "gifts" },
  { label: "THE DIAMOND WORLD", key: "diamond_world" },
  { label: "SPECIAL EDITIONS", key: "special_editions" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const menuRef = useRef(null);
  const itemRefs = useRef([]);

  const handleHover = (index, key) => {
    const el = itemRefs.current[index];
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = menuRef.current.getBoundingClientRect();

      setUnderlineStyle({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
    setActiveMenu(key);
  };

  return (
    <div className={styles.wrapper} onMouseLeave={() => setActiveMenu(null)}>
      <Header />

      <nav className={styles.navbar}>

        {/* LOGO */}
        <div className={styles.logo}>
          <Image src="/logos/LOGO.svg" alt="Al Diamas logo" width={61} height={30} />
          <Image src="/logos/LOGO_NAME.svg" alt="Al Diamas" width={129} height={26} />
        </div>

        {/* NAV LINKS */}
        <ul className={styles.menu} ref={menuRef}>
          {navItems.map((item, index) => (
            <li
              key={item.key}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`${styles.menuItem} ${activeMenu === item.key ? styles.active : ""}`}
              onMouseEnter={() => handleHover(index, item.key)}
            >
              <Link href={`/${item.key}`} className={styles.menuLink}>
                {item.label}
              </Link>
            </li>
          ))}

          {/* 🔥 UNDERLINE ELEMENT */}
          <span
            className={styles.underline}
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </ul>

        {/* ICONS */}
        <div className={styles.icons}>
          <button className={styles.iconBtn}>
            <Image src="/icons/user_profile_icon.svg" alt="Account" width={22} height={22} />
          </button>
          <button className={styles.iconBtn}>
            <Image src="/icons/search_icon.svg" alt="Search" width={20} height={20} />
          </button>
        </div>

      </nav>

      {/* DROPDOWNS */}
      {activeMenu === "engagement" && <EngagementMenu />}
      {activeMenu === "wedding" && <WeddingMenu />}
      {activeMenu === "fine_jewellery" && <FineJewelleryMenu />}
      {activeMenu === "gifts" && <GiftsMenu />}
      {activeMenu === "diamond_world" && <DiamondWorldMenu />}
      {activeMenu === "special_editions" && <SpecialEditionsMenu />}
    </div>
  );
}