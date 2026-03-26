"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Header from "./Header/Header";
import SearchMenu from "./SearchMenu/SearchMenu";
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
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const itemRefs = useRef([]);
  const lastScrollY = useRef(0);
  const closeTimeout = useRef(null);

  // 🔥 HANDLE HOVER
const handleHover = (index, key) => {
  if (index !== -1) {
    const el = itemRefs.current[index];

    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement.getBoundingClientRect();

      setUnderlineStyle({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  } else {
    // 🔥 for search icon (no underline)
    setUnderlineStyle({ left: 0, width: 0 });
  }

  setActiveMenu(key);
  setIsOpen(true);
};

const handleSearchClick = () => {
  if (activeMenu === "search") {
    // close if already open
    setIsOpen(false);
    setActiveMenu(null);
  } else {
    // open search
    setUnderlineStyle({ left: 0, width: 0 }); // remove underline
    setActiveMenu("search");
    setIsOpen(true);
  }
};

  // 🔥 HANDLE LEAVE
  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
      setActiveMenu(null);
      setUnderlineStyle({ left: 0, width: 0 });
    }, 300);
  };

  // 🔥 SCROLL CONTROL
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 80) {
        setShowNavbar(false);

        // reset everything on hide
        setIsOpen(false);
        setActiveMenu(null);
        setUnderlineStyle({ left: 0, width: 0 });
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.wrapper} ${showNavbar ? styles.show : styles.hide}`}
      onMouseLeave={handleLeave}
    >
      <Header />

      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/logos/LOGO.svg" alt="logo" width={61} height={30} />
          <Image src="/logos/LOGO_NAME.svg" alt="name" width={129} height={26} />
        </div>

        <ul className={styles.menu}>
          {navItems.map((item, index) => (
            <li
              key={item.key}
              ref={(el) => (itemRefs.current[index] = el)}
              className={styles.menuItem}
              onMouseEnter={() => handleHover(index, item.key)}
            >
              <Link href={`/${item.key}`} className={styles.menuLink}>
                {item.label}
              </Link>
            </li>
          ))}

          {/* UNDERLINE */}
          <span
            className={styles.underline}
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
              opacity: underlineStyle.width ? 1 : 0,
            }}
          />
        </ul>

<div className={styles.icons}>

  {/* SEARCH FIRST */}
  <button
    className={styles.iconBtn}
    onClick={handleSearchClick}
  >
    <Image src="/icons/search_icon.svg" alt="search" width={24} height={24} />
  </button>

  {/* PROFILE */}
  <button className={styles.iconBtn}>
    <Image src="/icons/user_profile_icon.svg" alt="user" width={22} height={22} />
  </button>

  {/* CART */}
  <button className={styles.iconBtn}>
    <Image src="/icons/cart.svg" alt="cart" width={22} height={22} />
  </button>

</div>

        {/* DROPDOWN */}
        <div className={`${styles.dropdownWrapper} ${isOpen ? styles.open : styles.close}`}>
          {activeMenu === "engagement" && <EngagementMenu />}
          {activeMenu === "wedding" && <WeddingMenu />}
          {activeMenu === "fine_jewellery" && <FineJewelleryMenu />}
          {activeMenu === "gifts" && <GiftsMenu />}
          {activeMenu === "diamond_world" && <DiamondWorldMenu />}
          {activeMenu === "special_editions" && <SpecialEditionsMenu />}
          {activeMenu === "search" && <SearchMenu />}
        </div>
      </nav>
    </div>
  );
}