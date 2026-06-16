
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { personal } from "../data/portfolio";

const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "20+" },
  { label: "Open Source Contributions", value: "50+" },
];

const highlights = [
  { icon: FaBriefcase, label: "Software Developer & Graphic Designer" },
  { icon: FaGraduationCap, label: "BS Computer Science, Palawan State University" },
  { icon: FaCode, label: "Creative Technologist" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      {/* Top border line */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgb(var(--theme-border-subtle)), transparent)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="theme-text font-mono text-sm font-medium mb-2 tracking-widest uppercase">
            Get to know me
          </p>
          <h2 className="section-heading">About Me</h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4 theme-gradient-bar" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* IMAGE */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Coding workspace"
                className="w-full h-full object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgb(var(--theme-overlay) / 0.8), transparent, transparent)",
                }}
              />

              {/* 🔥 IMPROVED HIGHLIGHTS MARQUEE */}
              <div className="absolute bottom-4 left-0 right-0 overflow-hidden">
                <div className="flex w-max animate-scroll gap-3 px-4">
                  {[...highlights, ...highlights].map(({ icon: Icon, label }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 backdrop-blur-sm rounded-lg px-3 py-1.5 whitespace-nowrap"
                      style={{
                        backgroundColor: "rgb(var(--theme-overlay) / 0.8)",
                        border: "1px solid rgb(var(--theme-border-subtle) / 0.6)",
                      }}
                    >
                      <Icon className="w-3 h-3 theme-text flex-shrink-0" />
                      <span
                        className="text-xs"
                        style={{ color: "rgb(var(--theme-text-muted))" }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-base p-5 hover:theme-border-glow transition-all duration-300"
                >
                  <p className="text-3xl font-extrabold gradient-text mb-1">
                    {stat.value}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "rgb(var(--theme-text-muted))" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3
                className="text-2xl font-bold mb-1"
                style={{ color: "rgb(var(--theme-text))" }}
              >
                Full Stack Developer & Creative Problem Solver
              </h3>
              <p className="theme-text font-mono text-sm">
                {personal.title}
              </p>
            </div>

            {/* ✨ IMPROVED DESCRIPTION */}
            <p
              className="leading-relaxed text-justify tracking-normal hyphens-auto"
              style={{ color: "rgb(var(--theme-text-muted))" }}
            >
              I am a multidisciplinary developer and graphic designer specializing in
              building modern web applications and producing high-quality visual designs.
              My work spans the full development lifecycle—from designing databases and
              developing scalable APIs to crafting responsive, user-focused interfaces.
            </p>

            <p
              className="leading-relaxed text-justify tracking-normal hyphens-auto"
              style={{ color: "rgb(var(--theme-text-muted))" }}
            >
              Alongside software development, I create print-ready designs such as
              tarpaulins, stickers, labels, and promotional materials for events and
              businesses. I focus on combining functionality and aesthetics to deliver
              clean, practical, and visually impactful solutions. I continuously improve
              my skills in both development and design, with a strong emphasis on
              maintainability, usability, and creative excellence.
            </p>

            {/* CONTACT */}
            <div className="space-y-3 pt-2">
              {[
                { icon: FaEnvelope, label: "Email", value: personal.email },
                { icon: FaPhone, label: "Phone", value: personal.phone },
                { icon: FaMapMarkerAlt, label: "Location", value: personal.location },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "rgb(var(--theme-bg-card))",
                      border: "1px solid rgb(var(--theme-border-subtle))",
                    }}
                  >
                    <Icon className="w-4 h-4 theme-text" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium"
                      style={{ color: "rgb(var(--theme-text-subtle))" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "rgb(var(--theme-text-muted))" }}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-2">
              <a href="#contact" className="btn-primary">
                <FaUser className="w-4 h-4 inline mr-2" />
                Hire Me
              </a>
              <a href={personal.resumeUrl} className="btn-outline">
                View Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔥 MARQUEE ANIMATION STYLE */}
      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
      `}</style>
    </section>
  );
}