"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // 🔥 safety reset after navigation
  useEffect(() => {
    document.body.style.pointerEvents = "auto";
    document.body.style.overflow = "auto";
  }, [pathname]);

  const isAuthPage = pathname.startsWith("/auth");

  return (
    <html lang="en">
      <body>

        {!isAuthPage && <Navbar />}

        <main className="pageContent">
          {children}
        </main>

        {!isAuthPage && <Footer />}

      </body>
    </html>
  );
}