"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* 🎥 BACKGROUND VIDEO */}
      <video
        className={styles.video}
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🖤 DARK OVERLAY (for luxury feel) */}
      <div className={styles.overlay}></div>

      {/* ✨ CONTENT */}
      <div className={styles.content}>
        <h1 className={styles.title}>Timeless Elegance</h1>
        <p className={styles.subtitle}>
          DISCOVER  HANCRAFTED DIAMOND JEWELLERY
        </p>
      </div>

    </section>
  );
}