"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaAws, FaFireFlameCurved } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import {
  SiClaude,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { SlSettings } from "react-icons/sl";

const stack = [
  {
    index: "01",
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    index: "02",
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: FaFireFlameCurved },
    ],
  },
  {
    index: "03",
    category: "Learning",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Docker", icon: SiDocker },
      { name: "AWS Basics", icon: FaAws },
      { name: "System Design", icon: SlSettings },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    index: "04",
    category: "Workflow",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
      { name: "Claude", icon: SiClaude },
    ],
  },
];

const marqueeIcons = [
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiHtml5,
  SiCss,
  SiJsonwebtokens,
];

const ease = [0.22, 1, 0.36, 1];

function Row({ data, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border-b border-neutral-200 overflow-hidden cursor-default group"
    >
      <motion.div
        className="absolute inset-0 bg-white origin-bottom rounded-xs"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease }}
      />

      <motion.div
        className="relative z-10 flex flex-col md:grid md:grid-cols-[48px_1fr_auto] items-start md:items-center gap-4 md:gap-8 px-6 py-8 md:py-7"
        animate={{ paddingLeft: hovered ? "2rem" : "1.5rem" }}
        transition={{ duration: 0.35, ease }}
      >
        <span className="text-[10px] tracking-[0.15em] font-mono text-neutral-800 transition-colors duration-300 group-hover:text-black">
          {data.index}
        </span>
        <div className="flex items-center gap-3">
          <h3
            className="text-neutral-800 group-hover:text-black transition-colors duration-300"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 400,
            }}
          >
            {data.category}
          </h3>
          <span className="text-[14px] text-neutral-900 opacity-0 -translate-x-1.5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-x-0">
            <GoArrowRight />
          </span>
        </div>

        <div className="flex flex-wrap gap-2 justify-start md:justify-end mt-2 md:mt-0">
          {data.items.map((item) => (
            <motion.span
              key={item.name}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease }}
              className="flex items-center gap-1.5 rounded-xs px-2.5 py-1.5 text-[10px] md:text-[11px] font-medium tracking-[0.03em] cursor-default border border-neutral-200 text-neutral-800 bg-transparent transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-neutral-300 group-hover:bg-neutral-50 group-hover:text-black"
            >
              <motion.span
                whileHover={{ rotate: -8, scale: 1.15 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                <item.icon className="text-[12px]" />
              </motion.span>
              {item.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const [isMounted, setIsMounted] = useState(false);
  const [marqueePaused, setMarqueePaused] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(frameId);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="bg-neutral-50 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="w-10 h-px bg-neutral-300" />
          <span className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase">
            Skills · Tech Stack
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="tracking-tight text-neutral-800 mb-14"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 2.5rem)",
            fontWeight: 500,
          }}
        >
          Tools I Build With
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div
          className="relative w-full mb-20 overflow-hidden select-none"
          onMouseEnter={() => setMarqueePaused(true)}
          onMouseLeave={() => setMarqueePaused(false)}
        >
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent z-10" />
          <motion.div
            className="flex gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: marqueePaused ? 0 : 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...marqueeIcons, ...marqueeIcons].map((Icon, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.2, rotate: -6 }}
                transition={{ duration: 0.25, ease }}
                className="text-[34px] text-neutral-300 hover:text-neutral-500 transition-colors duration-300"
              >
                <Icon />
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-neutral-200">
          {stack.map((group, i) => (
            <Row key={group.category} data={group} delay={0.1 * i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="inline-flex items-center gap-2.5 border border-neutral-200 px-4 py-2 mt-14"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-pulse" />
          <span className="text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
            Building quietly · Improving constantly
          </span>
        </motion.div>
      </div>
    </section>
  );
}