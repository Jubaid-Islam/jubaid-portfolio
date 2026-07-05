"use client";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1];

const journey = [
  {
    year: "2023",
    title: "Foundation & Computational Logic",
    text: "Initiated my programming career with Python, focusing on algorithmic problem-solving. Leveraged AI-assisted development tools to build interactive software, which was crucial for understanding software logic, event-handling, and the architecture of interactive systems.",
  },
  {
    year: "2024",
    title: "Web Foundations & Frontend Excellence",
    text: "Pivoted to web technologies (HTML, CSS, JS), focusing on DOM manipulation, semantic structure, and responsive design. Prioritized pixel-perfect implementation and cross-browser compatibility, strengthening my ability to translate UI designs into clean, maintainable code.",
  },
  {
    year: "2025",
    title: "Full-Stack Engineering & Data Persistence",
    text: "Deep-dived into the MERN ecosystem (React, Node.js, Express, MongoDB). Engineered a functional E-commerce platform, gaining experience in secure authentication flows, RESTful API design, and handling transactional integrity between frontend and backend.",
  },
  {
    year: "2026",
    title: "Production-Scale Architecture & System Design",
    text: "Led the development of a complex Real Estate platform. Implemented Role-Based Access Control (RBAC), TanStack Query for efficient state management, and decoupled service layers. Focused on reducing technical debt and optimizing the pipeline to meet professional production standards.",
  },
];

const education = [
  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Government College of Commerece, Chattogram",
    period: "2023 — 2025",
    note: "Business Studies",
  },
  {
    degree: "BBA in Finance & Banking",
    institute: "Government College of Commerece, Chattogram",
    period: "2026 — Present",
    note: "Undergraduate",
  },
];

export default function AboutJourneySection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="max-w-5xl mx-auto px-6">


<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  className="mb-16"
>
  <Link href="/">
    <motion.div
      whileHover={{ x: -2 }}
      whileTap={{ scale: 0.97 }}
      className="group inline-flex items-center gap-3 cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:border-neutral-400 group-hover:text-neutral-900">
        <FiArrowLeft className="text-[14px]" />
        
      </div>

    </motion.div>
  </Link>
</motion.div>
                {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="w-10 h-px bg-neutral-300" />
          <span className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase">
            About · Education
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease }}
              whileHover={{ y: -3 }}
              className="border border-neutral-200 bg-white rounded-md p-5 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-neutral-200"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="w-8 h-8 rounded-md bg-neutral-50 flex items-center justify-center text-neutral-500">
                  <HiOutlineAcademicCap className="text-[16px]" />
                </span>
                <div>
                  <h3 className="text-[14px] font-medium text-neutral-800 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-[12.5px] text-neutral-500 mt-0.5">
                    {edu.institute}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-neutral-400 border-t border-neutral-100 pt-3">
                <span>{edu.period}</span>
                <span className="px-2 py-0.5 border border-neutral-200 rounded-full text-neutral-500">
                  {edu.note}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

                {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 mb-12 mt-25"
        >
          <span className="w-10 h-px bg-neutral-300" />
          <span className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase">
            My Journey
          </span>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line */}
          <span className="absolute left-[5px] top-2 bottom-2 w-px bg-neutral-200" />

          <div className="flex flex-col gap-12">
            {journey.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 * i, ease }}
                className="relative grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-10 pl-8"
              >
                {/* dot */}
                <span className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 border-neutral-500 bg-neutral-50" />

                <span
                  className="text-neutral-800 tracking-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.75rem",
                    fontWeight: 500,
                  }}
                >
                  {item.year}
                </span>

                <div>
                  <h3 className="text-[15px] font-medium text-neutral-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-neutral-500 leading-relaxed max-w-lg">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
}