"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiGithub, FiCopy, FiCheck, FiAlertCircle } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";

const ease = [0.22, 1, 0.36, 1];

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

/* ── single clean field, label sits above, one border only ── */
function Field({ label, children }) {
  return (
    <div className="group/field">
      <label className="block text-[10px] tracking-[0.18em] text-neutral-400 uppercase mb-2">
        {label}
      </label>
      <div className="relative border-b border-neutral-200 transition-colors duration-300 group-focus-within/field:border-neutral-800">
        {children}
      </div>
    </div>
  );
}



export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("jubaid20062@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  useEffect(() => {
  const section = document.getElementById("contact");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        window.history.replaceState(null, "", "#contact");
      } else {
        window.history.replaceState(null, "", "/");
      }
    },
    {
      threshold: 0.4,
    }
  );

  if (section) observer.observe(section);

  return () => observer.disconnect();
}, []);

  const inputCls =
    "w-full bg-transparent border-none outline-none py-2.5 text-[14px] text-neutral-800 placeholder:text-neutral-300";

  return (
    <section 
      id="contact"
    className= "scroll-mt-32 bg-neutral-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="w-10 h-px bg-neutral-300" />
          <span className="text-[11px] tracking-[0.2em] text-neutral-400 uppercase">
            Contact · Get In Touch
          </span>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="flex flex-col gap-12"
          >
            <h2
              className="tracking-tight text-neutral-800 leading-[1.1]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 2.5rem)",
                fontWeight: 500,
              }}
            >
              Start with a<br />conversation.
            </h2>

            <div className="flex flex-col gap-7">
              {/* Email */}
              <div>
                <p className="text-[10px] tracking-[0.15em] text-neutral-400 uppercase mb-3">
                  Direct email
                </p>
                <button
                  onClick={copyEmail}
                  className="group flex items-center gap-2.5 text-neutral-700 hover:text-neutral-900 transition-colors duration-300"
                >
                  <MdOutlineMail className="text-[15px] text-neutral-400 group-hover:text-neutral-600 transition-colors duration-300" />
                  <span className="text-[14px] tracking-[0.01em] border-b border-transparent group-hover:border-neutral-300 transition-colors duration-300">
                    jubaid20062@gmail.com
                  </span>
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="copied"
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -4 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-1 text-[11px] text-neutral-600"
                      >
                        <FiCheck className="text-[12px]" /> Copied
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <FiCopy className="text-[12px] text-neutral-300 group-hover:text-neutral-500 transition-colors duration-300" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {/* Socials */}
              <div>
                <p className="text-[10px] tracking-[0.15em] text-neutral-400 uppercase mb-3">
                  Find me on
                </p>
                <div className="flex gap-6">
                  <a
                    href="https://github.com/Jubaid-Islam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-[14px] text-neutral-700 hover:text-neutral-900 transition-colors duration-300"
                  >
                    <FiGithub className="text-[15px] text-neutral-400 group-hover:text-neutral-600 transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-neutral-300 transition-colors duration-300">
                      GitHub
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jubaid-islam-522b61283/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-[14px] text-neutral-700 hover:text-neutral-900 transition-colors duration-300"
                  >
                    <SlSocialLinkedin className="text-[15px] text-neutral-400 group-hover:text-neutral-600 transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-neutral-300 transition-colors duration-300">
                      LinkedIn
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Status pill — kept from earlier versions for consistency */}
            <div className="inline-flex items-center gap-2.5 border border-neutral-200 px-4 py-2 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-pulse" />
              <span className="text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
                Open To Freelance · Open To Full-Time
              </span>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="flex flex-col gap-7"
          >
            <Field label="Your name">
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jubaid Islam"
                className={inputCls}
              />
            </Field>

            <Field label="Email address">
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputCls}
              />
            </Field>

            <Field label="Message">
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about what you're building..."
                className={`${inputCls} resize-none leading-relaxed`}
              />
            </Field>

            {/* Submit row */}
            <div className="flex items-center justify-between mt-3 gap-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={status}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`text-[11px] tracking-[0.03em] ${
                    status === "sent"
                      ? "text-neutral-600"
                      : status === "error"
                      ? "text-red-500"
                      : "text-neutral-400"
                  }`}
                >
                  {status === "idle" && "Usually reply within 24h"}
                  {status === "sending" && "Sending…"}
                  {status === "sent" && "I'll be in touch soon"}
                  {status === "error" && "Something went wrong"}
                </motion.span>
              </AnimatePresence>

           <button
  type="submit"
  disabled={status === "sending"}
  className="relative overflow-hidden flex items-center gap-2 px-5 py-2.5 border border-neutral-200 text-[11px] tracking-[0.1em] uppercase text-neutral-900 group disabled:opacity-50"
>
  <span
    className="absolute inset-0 bg-neutral-900/96 -translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
  />

  <AnimatePresence mode="wait">
    <motion.span
      key={status}
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.15 }}
      className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-neutral-50"
    >
      {status === "sending" && (
        <span className="w-3 h-3 border-[1.5px] border-neutral-300 border-t-neutral-50 rounded-full animate-spin" />
      )}

      {status === "sent" && (
        <FiCheck className="text-neutral-500 group-hover:text-neutral-300" />
      )}

      {status === "error" && (
        <FiAlertCircle className="text-red-500 group-hover:text-red-300" />
      )}

      {status === "idle" && "Send Message"}
      {status === "sending" && "Sending"}
      {status === "sent" && "Message Sent"}
      {status === "error" && "Failed — Retry"}
    </motion.span>
  </AnimatePresence>
</button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}