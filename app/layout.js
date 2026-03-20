"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import "./globals.css";

export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust timing

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>

        {loading && <Loader />}

        <Navbar />

        <main className="pageContent">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}