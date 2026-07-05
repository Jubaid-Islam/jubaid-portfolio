"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { GoArrowLeft, GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1];

const projects = [
  {
    id: "Estaura",
    name: "Estaura",
    title: "Real Estate Platform",
    liveUrl: "https://estaura-83c26.web.app",
    githubUrl: "https://github.com/Jubaid-Islam/estaura_client",
    image: "/images/estaura.png",
    tools: [
      "react.js",
      "tailwind css",
      "tanstack query",
      "node.js",
      "express.js",
      "jwt auth",
      "mongodb",
      "firebase",
      "stripe",
    ],
    whyCreate: `In the current real estate industry, communication between buyers, sellers, and agents, as well as property management and deal tracking processes, are often manual and disconnected. Estaura was created to solve these problems. The platform is designed to provide a centralized system for property discovery, agent communication, deal management, and an improved user experience, making the entire process simpler and more efficient.`,
    benefits: [
      "Buyers can easily find their preferred properties and communicate directly with agents.",
      "Agents can manage their listings, client conversations, and deal statuses from a single platform.",
      "The real-time messaging and notification system ensures faster communication.",
      "Deal tracking and status management make the entire process more transparent and organized.",
      "A user-friendly dashboard provides tailored experiences for different types of users.",
    ],
  },
  {
    id: "caffeetino",
    name: "Caffeetino",
    title: "Coffee Commerce",
    liveUrl: "https://caffeetino.web.app",
    githubUrl: "https://github.com/Jubaid-Islam/caffeetino-client",
    image: "/images/coffee.png",
    tools: [
      "react.js",
      "tailwind css",
      "node.js",
      "express.js",
      "jwt auth",
      "stripe",
      "firebase",
      "mongodb",
    ],
    whyCreate: `Caffetino was created to simplify and streamline the online coffee ordering process. Through this platform, users can browse coffee products, make online payments, and track orders from a single place. Additionally, users can share and manage their own coffee recipes, creating a community-driven coffee experience.`,
    benefits: [
      "Implemented secure sign-in and protected routes using Firebase Authentication and JWT.",
      "Secure online payments are processed through the Stripe Payment Gateway.",
      "Users can manage their added coffees, order history, and related information from a dedicated dashboard.",
      "Users can like coffee products and discover popular coffee selections.",
      "After successful payment, order data is instantly processed and reflected in the system.",
    ],
  },
  {
    id: "Curovar",
    name: "Curova",
    title: "Healthcare Platform",
    liveUrl: "https://curova-health.web.app",
    githubUrl: "https://github.com/Jubaid-Islam/curova",
    image: "/images/curova.png",
    tools: ["react.js", "tailwind css"],
    whyCreate: `Curova is a clean, frontend-focused health-tech platform designed to simplify the process of finding doctors and booking appointments. Built using React and Tailwind CSS, this project aims to provide a seamless, responsive, and intuitive user experience.`,
    benefits: [
      "Crafted with Tailwind CSS utility classes, ensuring a consistent and professional look across all devices",
      "The project is built with reusable and maintainable components, making the codebase clean and easy to scale.",
      "Features smooth animations and interactive elements (like SweetAlert2) to provide an engaging and user-friendly experience.",
      "Focuses on clean code practices for faster loading times and high accessibility.",
      "Easy to customize and extend.",
    ],
  },
];

function MonitorPreview({ image, active }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{
        opacity: active ? 1 : 0,
        y: active ? 0 : 16,
        scale: active ? 1 : 0.97,
      }}
      transition={{ duration: 0.55, ease }}
      className="relative w-full select-none max-w-xl"
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.45, ease }}
        className="relative rounded-2xl bg-gradient-to-b from-neutral-200/60 to-neutral-300/40 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.05),0_0_0_1px_rgba(255,255,255,0.6)_inset] cursor-default"
      >
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
          aria-hidden
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(130deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 70%)",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: active ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease }}
          />
        </div>
        <div className="flex justify-center items-center gap-2 pt-2.5 pb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400/60 shadow-inner" />
        </div>
        <div className="mx-3 h-px bg-neutral-300/60" />
        <div className="relative m-3 mt-2 rounded-md overflow-hidden aspect-[16/9] bg-neutral-100 shadow-[inset_0_1px_4px_rgba(0,0,0,0.08)]">
          <AnimatePresence mode="wait">
            {image ? (
              <motion.img
                key={image}
                src={image}
                alt="Project preview"
                className="w-full h-full object-cover object-top"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease }}
              />
            ) : (
              <motion.div
                key="empty"
                className="w-full h-full flex flex-col items-center justify-center gap-2 bg-neutral-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-[28px] text-neutral-300">⊡</span>
                <span className="text-[10px] tracking-[0.12em] text-neutral-400 uppercase font-medium">
                  Preview
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex justify-center pb-2">
          <span className="text-[9px] tracking-[0.15em] text-neutral-400/70 uppercase font-medium">
            Studio
          </span>
        </div>
      </motion.div>
      <div
        className="mx-auto w-14 h-10 bg-gradient-to-b from-neutral-300/40 to-neutral-200/30 border-l border-r border-neutral-200/70"
        style={{ clipPath: "polygon(18% 0%, 82% 0%, 100% 100%, 0% 100%)" }}
      />
      <div className="mx-auto w-32 h-2 rounded-full bg-gradient-to-r from-neutral-200/60 via-neutral-300/60 to-neutral-200/60 border border-neutral-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.06)]" />
    </motion.div>
  );
}

function ProjectDetail({ project, onBack }) {
  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease }}
    >
      <div>
        <button
          onClick={onBack}
          aria-label="Back to projects"
          className="w-9 h-9 mb-3 lg:mb-0 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-800 hover:border-neutral-400 transition-all duration-250 hover:shadow-sm"
        >
          <span className="text-[15px]">
            <GoArrowLeft />
          </span>
        </button>
      </div>
      <div className="rounded-xl max-w-3xl lg:max-w-3xl mx-auto">
        <div className="mb-8">
          <h3
            className="text-neutral-800 tracking-[0.04em] leading-tight"
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 500,
            }}
          >
            {project.name}
          </h3>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="text-[11px] tracking-[0.06em] text-neutral-400 uppercase">
              {project.title}
            </span>
          </div>
        </div>
        <div className="border border-neutral-200/80 bg-neutral-100 overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              width={1200}
              height={675}
              className="w-full object-cover"
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center text-neutral-400 text-sm">
              No preview available
            </div>
          )}
        </div>
        <div className="flex items-center justify-end gap-2.5 mt-5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden h-10 flex items-center gap-2 px-4 border border-neutral-300 text-[11px] tracking-[0.1em] uppercase text-neutral-600 group"
            >
              <span className="absolute inset-0 bg-neutral-900/96 -translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-neutral-50">
                <FiGithub className="text-[14px]" />
                GitHub
              </span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden h-10 flex items-center gap-2 px-4 border border-neutral-300 text-[11px] tracking-[0.1em] uppercase text-neutral-600 group"
            >
              <span className="absolute inset-0 bg-neutral-900/96 -translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-neutral-50">
                Live Demo
                <FiExternalLink className="text-[14px]" />
              </span>
            </a>
          )}
        </div>
        <div className="flex items-center gap-2 flex-wrap mt-8">
          {project.tools?.map((tool, index) => (
            <span
              key={index}
              className="relative overflow-hidden px-2.5 py-1 border border-neutral-200 text-[10px] uppercase tracking-[0.08em] text-neutral-500 rounded group cursor-default"
            >
              <span className="absolute inset-0 bg-neutral-900/96 -translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-neutral-50">
                {tool}
              </span>
            </span>
          ))}
        </div>
        {project.whyCreate && (
          <div className="mt-8 flex flex-col gap-6 max-w-2xl">
            <div>
              <h4 className="text-[11px] tracking-[0.18em] text-neutral-900 font-semibold uppercase mb-3">
                Why this was built
              </h4>
              <p className="text-[13.5px] text-neutral-500 leading-relaxed">
                {project.whyCreate}
              </p>
            </div>
            {project.benefits?.length > 0 && (
              <div>
                <h4 className="text-[11px] tracking-[0.18em] text-neutral-900 font-semibold uppercase mb-3">
                  Key benefits
                </h4>
                <div className="flex flex-col gap-2">
                  {project.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-[5px] w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
                      <p className="text-[13.5px] text-neutral-500 leading-relaxed">
                        {b}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(frameId);
  }, []);

  if (!isMounted) return null;

  const openProject = projects.find((p) => p.id === activeId);
  const previewProject = projects.find((p) => p.id === hoveredId) ?? projects[0];

  return (
    <section className="bg-neutral-50 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-16">
            <span className="w-8 h-px bg-neutral-300" />
            <span className="text-[10px] tracking-[0.22em] text-neutral-400 uppercase font-medium">
              Work · Projects
            </span>
          </div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease }}
              className="tracking-tight text-neutral-800 mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                fontWeight: 500,
              }}
            >
              Ideas that became products
            </motion.h2>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {openProject ? (
            <ProjectDetail
              key="detail-view"
              project={openProject}
              onBack={() => setActiveId(null)}
            />
          ) : (
            <motion.div
              key="list-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease }}
              className="flex flex-col md:flex-row gap-16 items-center"
            >
              <div className="flex-shrink-0 w-full md:w-auto md:min-w-[260px]">
                <div className="flex flex-col gap-0.5">
                  {projects.map((project, i) => (
                    <motion.button
                      key={project.id}
                      onClick={() => setActiveId(project.id)}
                      onMouseEnter={() => setHoveredId(project.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.06 * i, ease }}
                      className={`group relative flex items-center justify-between text-left px-3.5 py-3 rounded-lg transition-all duration-200 ${
                        hoveredId === project.id
                          ? "bg-white border border-neutral-200/90 shadow-sm"
                          : "border border-transparent"
                      }`}
                    >
                      <div className="flex flex-col pl-1">
                        <span
                          className={`text-[18px] font-medium tracking-[-0.01em] transition-colors duration-200 ${
                            hoveredId === project.id
                              ? "text-neutral-900"
                              : "text-neutral-600"
                          }`}
                        >
                          {project.name}
                        </span>
                        <span
                          className={`text-[11px] tracking-[0.04em] transition-colors duration-200 ${
                            hoveredId === project.id
                              ? "text-neutral-400"
                              : "text-neutral-400"
                          }`}
                        >
                          {project.title}
                        </span>
                      </div>
                      <motion.span
                        animate={{
                          opacity: hoveredId === project.id ? 1 : 0,
                          x: hoveredId === project.id ? 0 : -4,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-neutral-400 text-[15px] pr-1"
                      >
                        <GoArrowUpRight />
                      </motion.span>
                    </motion.button>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex flex-1 justify-end items-start pt-2 sticky top-24">
                <MonitorPreview image={previewProject?.image} active={true} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}