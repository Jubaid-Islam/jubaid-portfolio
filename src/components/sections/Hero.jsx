"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);


  if (!isMounted) return null;

  return (
    <section className="bg-neutral-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="w-10 h-px bg-neutral-300" />
          <span className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase">
            Profile · Mind Behind
          </span>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT — Details Section */}
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="text-[11px] italic tracking-[0.08em] text-neutral-500 leading-relaxed max-w-sm">
                “ The best ideas arrive in silence, I just give them a way to exist ”
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="tracking-tight text-neutral-800 mb-8"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 8vw, 4rem)", fontWeight: 500 }}
            >
              Jubaid Islam
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-8 mb-10"
            >
              {[
                { title: "Role", val: "MERN-Stack Developer" },
                { title: "Status", val: "Available" },
                { title: "Work Base", val: "Global Remote" },
              ].map((item) => (
                <div key={item.title}>
                  <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase mb-1.5">{item.title}</p>
                  <p className="text-[15px] font-medium text-neutral-800">{item.val}</p>
                </div>
              ))}
            </motion.div>

            {/* Icons and Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center flex-wrap gap-2.5 mb-7"
            >
              {[
           
                { href: "https://github.com/Jubaid-Islam", icon: <FiGithub />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/jubaid-islam-522b61283/", icon: <SlSocialLinkedin />, label: "LinkedIn" },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="relative overflow-hidden w-10 h-10 flex items-center justify-center border border-neutral-300 text-neutral-500 group">
                  <span className="absolute inset-0 bg-neutral-900/96 -translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-neutral-50">{icon}</span>
                </a>
              ))}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden h-10 flex items-center gap-2 px-4 border border-neutral-300 text-[11px] tracking-[0.1em] uppercase text-neutral-600 group">
                <span className="absolute inset-0 bg-neutral-900/96 -translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-neutral-50">
                  <span>↓</span> Download Resume
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 border border-neutral-200 px-4 py-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] tracking-[0.14em] text-neutral-500 uppercase">Architecting · Optimizing · Scaling</span>
            </motion.div>
          </div>

          {/* RIGHT — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2"
          >
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-neutral-200 group">
              <Image src="/images/profile.jpeg" alt="Jubaid Islam" fill sizes="(max-width: 768px) 100vw, 50vw" 
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]" priority />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}