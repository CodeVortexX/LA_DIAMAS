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
  const [isOpen, setIsOpen] = useState(false);
  const [renderDropdown, setRenderDropdown] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const menuRef = useRef(null);
  const itemRefs = useRef([]);
  const lastScrollY = useRef(0);
  const hoverTimeout = useRef(null);
  const scrollTimeout = useRef(null);

  // ================= HOVER =================
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

    clearTimeout(hoverTimeout.current);

    hoverTimeout.current = setTimeout(() => {
      if (!isOpen) {
        setRenderDropdown(true); // mount first
        setIsOpen(true);
      }
      setActiveMenu(key);
    }, 100);
  };

  // ================= CLOSE =================
  const handleLeave = () => {
    setIsOpen(false);

    setTimeout(() => {
      setActiveMenu(null);
      setRenderDropdown(false);
      setUnderlineStyle({ left: 0, width: 0 });
    }, 550); // match CSS
  };

  // ================= SCROLL =================
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 80) {
        setShowNavbar(false);

        clearTimeout(scrollTimeout.current);

        setIsOpen(false);

        scrollTimeout.current = setTimeout(() => {
          setActiveMenu(null);
          setRenderDropdown(false);
        }, 550);

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
      className={`${styles.wrapper} ${
        showNavbar ? styles.show : styles.hide
      }`}
      onMouseLeave={handleLeave}
    >
      <Header />

      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/logos/LOGO.svg" alt="logo" width={61} height={30} />
          <Image src="/logos/LOGO_NAME.svg" alt="name" width={129} height={26} />
        </div>

        <ul className={styles.menu} ref={menuRef}>
          {navItems.map((item, index) => (
            <li
              key={item.key}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`${styles.menuItem} ${
                activeMenu === item.key ? styles.active : ""
              }`}
              onMouseEnter={() => handleHover(index, item.key)}
            >
              <Link href={`/${item.key}`} className={styles.menuLink}>
                {item.label}
              </Link>
            </li>
          ))}

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
          <button className={styles.iconBtn}>
            <Image src="/icons/user_profile_icon.svg" alt="user" width={22} height={22} />
          </button>
          <button className={styles.iconBtn}>
            <Image src="/icons/search_icon.svg" alt="search" width={20} height={20} />
          </button>
        </div>

        {/* ===== DROPDOWN ===== */}
        <div
          className={`${styles.dropdownWrapper} ${
            isOpen ? styles.open : styles.close
          }`}
        >
          {renderDropdown && (
            <>
              {activeMenu === "engagement" && <EngagementMenu />}
              {activeMenu === "wedding" && <WeddingMenu />}
              {activeMenu === "fine_jewellery" && <FineJewelleryMenu />}
              {activeMenu === "gifts" && <GiftsMenu />}
              {activeMenu === "diamond_world" && <DiamondWorldMenu />}
              {activeMenu === "special_editions" && <SpecialEditionsMenu />}
            </>
          )}
        </div>
      </nav>
    </div>
  );
}