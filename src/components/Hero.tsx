import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDownload, FaEnvelope } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { personal } from "../data/portfolio";

const socialIcons = [
  { icon: FaGithub, href: personal.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: personal.social.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: personal.social.twitter, label: "Twitter" },
  { icon: FaInstagram, href: personal.social.instagram, label: "Instagram" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 theme-blob-1 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 theme-blob-2 rounded-full blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgb(var(--theme-bg-card) / 0.5), rgb(var(--theme-bg)), rgb(var(--theme-bg)))",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--theme-grid-color),1) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--theme-grid-color),1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: "rgb(var(--theme-bg-card) / 0.8)",
              border: "1px solid rgb(var(--theme-border-subtle))",
              color: "rgb(var(--theme-primary-400))",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "rgb(var(--theme-primary-400))" }}
            />
            Available for work
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4"
            style={{ color: "rgb(var(--theme-text))" }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.h2
            {...fadeUp(0.3)}
            className="text-xl sm:text-2xl font-semibold font-mono mb-4"
            style={{ color: "rgb(var(--theme-text-muted))" }}
          >
            <span className="text-pink-400">&lt;</span>
            <span className="text-cyan-400">WorkRole="</span>
            <span className="text-white">{personal.title}</span>
            <span className="text-cyan-400">"</span>
            <span className="text-pink-400">/&gt;</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.4)}
            className="text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            style={{ color: "rgb(var(--theme-text-muted))" }}
          >
            {personal.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <a href="#contact" className="btn-primary flex items-center gap-2">
              <FaEnvelope className="w-4 h-4" />
              Contact Me
            </a>
            <a href={personal.resumeUrl} className="btn-outline flex items-center gap-2">
              <FaDownload className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            <span
              className="text-sm font-medium"
              style={{ color: "rgb(var(--theme-text-subtle))" }}
            >
              Follow me
            </span>
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "rgb(var(--theme-border-subtle))" }}
            />
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "rgb(var(--theme-bg-card))",
                  border: "1px solid rgb(var(--theme-border-subtle))",
                  color: "rgb(var(--theme-text-muted))",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgb(var(--theme-primary-400))";
                  e.currentTarget.style.borderColor = "rgb(var(--theme-primary))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgb(var(--theme-text-muted))";
                  e.currentTarget.style.borderColor = "rgb(var(--theme-border-subtle))";
                }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Rotating ring */}
            <div
              className="absolute inset-0 rounded-full p-1 animate-spin"
              style={{
                animationDuration: "8s",
                background: "linear-gradient(to right, rgb(var(--theme-primary)), rgb(var(--theme-primary-end)), rgb(var(--theme-primary)))",
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{ backgroundColor: "rgb(var(--theme-bg))" }}
              />
            </div>
            {/* Avatar */}
            <div
              className="absolute inset-2 rounded-full overflow-hidden"
              style={{ boxShadow: "0 0 0 2px rgb(var(--theme-border))" }}
            >
              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-2 rounded-2xl px-3 py-2 shadow-xl"
              style={{
                backgroundColor: "rgb(var(--theme-bg-card))",
                border: "1px solid rgb(var(--theme-border-subtle))",
              }}
            >
              <p className="text-xs font-medium" style={{ color: "rgb(var(--theme-text-subtle))" }}>Experience</p>
              <p className="font-bold text-sm" style={{ color: "rgb(var(--theme-text))" }}>1+ Years</p>
            </motion.div>
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -left-2 rounded-2xl px-3 py-2 shadow-xl"
              style={{
                backgroundColor: "rgb(var(--theme-bg-card))",
                border: "1px solid rgb(var(--theme-border-subtle))",
              }}
            >
              <p className="text-xs font-medium" style={{ color: "rgb(var(--theme-text-subtle))" }}>Projects</p>
              <p className="font-bold text-sm" style={{ color: "rgb(var(--theme-text))" }}>20+ Done</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors"
        style={{ color: "rgb(var(--theme-text-subtle))" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(var(--theme-primary-400))")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(var(--theme-text-subtle))")}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <IoIosArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
