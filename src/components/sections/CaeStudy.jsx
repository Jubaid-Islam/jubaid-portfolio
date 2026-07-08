"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { SlSettings } from "react-icons/sl";
import { TbLayersLinked } from "react-icons/tb";
import { LuLayers } from "react-icons/lu";

const ease = [0.22, 1, 0.36, 1];

const projects = [
  {
    id: "estaura",
    name: "Estaura",
    challenges: [
      {
        index: "01",
        icon: HiOutlineLightBulb,
        label: "Real-time Synchronization",
        challenge:
          "Maintaining <strong>data consistency</strong> in a multi-user environment was a complex engineering hurdle. Synchronizing conversations, notifications, and deal updates across all users in <strong>real-time</strong> without page reloads, while preventing <strong>data race conditions</strong> and keeping the application state consistent, was a significant challenge.",
        implement:
          "I engineered an <strong>event-driven messaging workflow</strong> designed to minimize latency and ensure <strong>efficient data broadcasting</strong>. By implementing optimized logic for unread tracking and live state updates, I ensured that every participant's interface remains perfectly synchronized and up-to-date without imposing unnecessary load on the server.",
      },
      {
        index: "02",
        icon: SlSettings,
        label: "Role-based System Design",
        challenge:
          "Supporting three distinct user roles (Buyers, Agents, and Sellers) within a single platform required sophisticated <strong>permission handling</strong> and <strong>authorization logic</strong>. Avoiding redundant business logic while providing unique, role-specific dashboard experiences was a key architectural challenge.",
        implement:
          "I designed a centralized <strong>Role-Based Access Control (RBAC)</strong> architecture. This allowed for <strong>shared business logic</strong> across the platform while providing isolated, role-specific user experiences. This <strong>scalable design</strong> ensures that the platform remains maintainable and flexible as new user roles or business requirements evolve.",
      },
      {
        index: "03",
        icon: LuLayers,
        label: "Application Architecture",
        challenge:
          "As the codebase expanded, I faced the classic engineering challenge of <strong>tight coupling</strong> and accumulating <strong>technical debt</strong>. Implementing new features without creating complex dependencies or compromising code quality was becoming increasingly difficult.",
        implement:
          "I restructured the application using a <strong>modular architecture</strong>. By decoupling components, implementing <strong>reusable UI elements</strong>, and separating service layers with organized <strong>state management</strong>, I significantly reduced code dependency. This architectural shift ensures long-term scalability and professional maintainability for the platform.",
      },
    ],
  },
  {
    id: "caffeetino",
    name: "Caffeetino",
    challenges: [
      {
        index: "01",
        icon: HiOutlineLightBulb,
        label: "Secure Authentication Flow",
        challenge:
          "Coordinating Firebase Authentication with <strong>JWT-based API authorization</strong> presented a complex challenge. Ensuring robust protection for <strong>private routes</strong>, maintaining <strong>token persistence</strong>, and handling session validation across the entire application lifecycle required a meticulous approach to security.",
        implement:
          "I integrated Firebase Auth with JWT authorization to establish a seamless and <strong>secure authentication layer</strong>. I implemented a secure <strong>token lifecycle management</strong> strategy, ensuring that authenticated API access is strictly validated and protected against unauthorized session persistence or data leaks.",
      },
      {
        index: "02",
        icon: SlSettings,
        label: "Payment Processing",
        challenge:
          "Ensuring <strong>data integrity</strong> during online payment transactions was critical. Maintaining synchronization between successful payments and order creation while handling potential <strong>transaction failures</strong> without compromising the user experience was a significant engineering hurdle.",
        implement:
          "I integrated <strong>Stripe Checkout</strong> with server-side <strong>payment verification</strong>. By enforcing strict transaction validation on the backend before order confirmation, I ensured that every purchase is verified, providing a consistent and secure transaction flow from the shopping cart to final completion.",
      },
      {
        index: "03",
        icon: LuLayers,
        label: "State and Cart Management",
        challenge:
          "As the application scaled, keeping the shopping cart, authentication state, and checkout flow synchronized across different pages became increasingly difficult. <strong>State inconsistency</strong> was leading to unpredictable UI behavior and <strong>data discrepancies</strong>.",
        implement:
          "I designed a centralized and scalable state management architecture, establishing a <strong>Single Source of Truth</strong> for the application. By consolidating authentication states, cart data, and checkout processes, I ensured that the UI remains predictable and robust, effectively eliminating <strong>data synchronization bugs</strong>.",
      },
    ],
  },
];

function ChallengeList({ challenges }) {
  return (
    <div className="relative flex flex-col">
      {/* Vertical line */}
      <span className="hidden sm:block absolute left-[19px] top-3 bottom-3 w-px bg-neutral-200" />

      {challenges.map((c, i) => {
        const Icon = c.icon;
        const isLast = i === challenges.length - 1;
        return (
          <motion.div
            key={c.index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 * i, ease }}
            className={`relative grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-12 ${!isLast ? "pb-10" : ""
              }`}
          >
            {/* Left — dot + icon + title */}
            <div className="flex items-start mt-1 gap-4">
              {/* dot */}
              <span className="relative z-10 mt-1 w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center shrink-0">
                <Icon className="text-[16px] text-neutral-500" />
              </span>

              <div className="pt-1">
                <p className="text-[10px] tracking-[0.15em] font-mono text-neutral-400 mb-1">
                  {c.index}
                </p>
                <h3
                  className="text-neutral-800 tracking-tight leading-snug"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    fontWeight: 500,
                  }}
                >
                  {c.label}
                </h3>
              </div>
            </div>

            {/* Right — PROBLEM + IMPLEMENT */}

            <div className="flex flex-col gap-4 pt-1 pl-0 md:pl-0">
              <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] gap-1 sm:gap-4">
                <span className="text-[10px] tracking-[0.18em] flex items-start mt-0.5 uppercase text-neutral-500 pt-0.5 shrink-0">
                  Challenge :
                </span>

                <p
                  className="text-[13.5px] text-neutral-800 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: c.challenge }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] gap-1 sm:gap-4">
                <span className="text-[10px] tracking-[0.18em] flex items-start mt-0.5 uppercase text-neutral-500 pt-0.5 shrink-0">
                  Implement :
                </span>

                <p
                  className="text-[13.5px] text-neutral-800 leading-relaxed font-[450]"
                  dangerouslySetInnerHTML={{ __html: c.implement }}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function CaseStudySection() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const project = projects[projectIndex];

  const goNext = () => {
    setDirection(1);
    setProjectIndex((prev) => (prev + 1) % projects.length);
  };
  const goPrev = () => {
    setDirection(-1);
    setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="bg-neutral-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="w-10 h-px bg-neutral-300" />
          <span className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase">
            Case Study
          </span>
        </motion.div>

        {/* Project title + nav */}
        <div className="flex items-start justify-between gap-6 mb-12">
          <div>
            <AnimatePresence mode="wait">
              <motion.h2
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease }}
                className="tracking-tight text-neutral-800"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 500,
                }}
              >
                {project.name}
              </motion.h2>
            </AnimatePresence>
            <p className="text-[12px] text-neutral-400 mt-2">
              Top {project.challenges.length} challenge
              {project.challenges.length !== 1 ? "s" : ""} documented
            </p>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[11px] text-neutral-400 tabular-nums mr-2">
              {String(projectIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={goPrev}
              aria-label="Previous project"
              className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 transition-colors duration-300"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={goNext}
              aria-label="Next project"
              className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-600 hover:border-neutral-400 transition-colors duration-300"
            >
              →
            </motion.button>
          </div>
        </div>

        {/* Challenge list */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 32 }}
              transition={{ duration: 0.4, ease }}
            >
              <ChallengeList challenges={project.challenges} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project dots */}
        <div className="flex items-center gap-2 mt-14">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => {
                setDirection(i > projectIndex ? 1 : -1);
                setProjectIndex(i);
              }}
              aria-label={`Go to ${p.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === projectIndex
                ? "w-6 bg-neutral-900"
                : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}