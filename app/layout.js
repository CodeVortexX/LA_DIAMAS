"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import "./globals.css";

export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(true);
  const pageReady = useRef(false);

  useEffect(() => {
    const onLoad = () => { pageReady.current = true; };
    if (document.readyState === "complete") {
      pageReady.current = true;
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  const handleLoopComplete = () => {
    if (pageReady.current) setLoading(false);
  };

  return (
    <html lang="en">
      <body>

        {loading && <Loader onLoopComplete={handleLoopComplete} />}

        <Navbar />

        <main className="pageContent">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}