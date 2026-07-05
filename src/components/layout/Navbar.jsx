"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Using requestAnimationFrame to defer the state update
    const frameId = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    // Cleanup to prevent memory leaks
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Hydration error এড়ানোর জন্য প্রাথমিক রেন্ডার
  if (!isMounted) return null;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-6 lg:px-20 backdrop-blur-md bg-neutral-50/80"
    >
      {/* Left - Logo */}
      <Link href="/" className="cursor-pointer">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[15px] font-normal tracking-[0.30em] text-neutral-900 uppercase"
          style={{ fontFamily: "'Playfair Display', serif" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Jubaid
        </motion.span>
      </Link>

      {/* Right - Links */}
      <div className="flex items-center gap-8">
        {/* About Link */}
        <Link href="/about" className="block cursor-pointer">
          <motion.span
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative text-[10px] font-normal tracking-[0.2em] text-neutral-900 uppercase py-1 group"
            onMouseEnter={() => setHoveredLink("about")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            about me
            <motion.span
              className="absolute bottom-0 left-0 h-[1px] bg-neutral-900"
              initial={{ width: "0%" }}
              animate={{ width: hoveredLink === "about" ? "100%" : "0%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.span>
        </Link>

        {/* Contact Button */}
        <motion.a
          href="/#contact"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileTap={{ scale: 0.97 }}
          className="relative overflow-hidden border border-neutral-200 px-4 py-2 text-[10px] tracking-[0.1em] uppercase text-neutral-900 group"
        >
          <span className="absolute inset-0 transition-transform duration-300 -translate-x-full bg-neutral-900/96 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
          <span className="relative z-10 transition-colors group-hover:text-neutral-50">
            Get in Touch
          </span>
        </motion.a>
      </div>
    </motion.nav>
  );
}