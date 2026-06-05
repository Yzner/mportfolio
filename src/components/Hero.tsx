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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-gray-950 to-gray-950" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-full text-sm text-cyan-400 font-medium mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Available for work
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.h2
            {...fadeUp(0.3)}
            className="text-xl sm:text-2xl font-semibold text-gray-400 mb-4 font-mono"
          >
            &lt;{personal.title} /&gt;
          </motion.h2>

          <motion.p
            {...fadeUp(0.4)}
            className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
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
            <span className="text-gray-500 text-sm font-medium">Follow me</span>
            <div className="w-8 h-px bg-gray-700" />
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-800 border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-500 hover:bg-gray-700 transition-all duration-200 hover:-translate-y-0.5"
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
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 p-1 animate-spin"
              style={{ animationDuration: "8s" }}
            >
              <div className="w-full h-full rounded-full bg-gray-950" />
            </div>
            {/* Avatar */}
            <div className="absolute inset-2 rounded-full overflow-hidden ring-2 ring-gray-800">
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
              className="absolute -bottom-2 -right-2 bg-gray-900 border border-gray-700 rounded-2xl px-3 py-2 shadow-xl"
            >
              <p className="text-xs text-gray-400 font-medium">Experience</p>
              <p className="text-white font-bold text-sm">1+ Years</p>
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -left-2 bg-gray-900 border border-gray-700 rounded-2xl px-3 py-2 shadow-xl"
            >
              <p className="text-xs text-gray-400 font-medium">Projects</p>
              <p className="text-white font-bold text-sm">5+ Done</p>
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1 left-2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-gray-700 rounded-2xl px-3 py-2 shadow-xl"
            >
              <p className="text-white font-bold text-sm">Graphic Designer</p>
            </motion.div>
            
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1 left-63 -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-gray-700 rounded-2xl px-3 py-2 shadow-xl"
            >
              <p className="text-white font-bold text-sm">Developer</p>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <IoIosArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
