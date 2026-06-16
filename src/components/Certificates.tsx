import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaExternalLinkAlt, FaCertificate, FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { certificates } from "../data/portfolio";

function CertificateCard({
  cert,
  index,
}: {
  cert: typeof certificates[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLong = cert.description.length > 80;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-base group overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
      style={{ boxShadow: undefined }}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgb(var(--theme-bg-card)), rgb(var(--theme-bg-card) / 0.4), transparent)",
          }}
        />
        <div className="absolute top-3 right-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
            style={{
              background: "linear-gradient(to bottom right, rgb(var(--theme-accent-amber)), rgb(234 88 12))",
            }}
          >
            <FaCertificate className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="absolute bottom-3 left-3">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs backdrop-blur-sm"
            style={{
              backgroundColor: "rgb(var(--theme-overlay) / 0.8)",
              border: "1px solid rgb(var(--theme-border-subtle) / 0.6)",
              color: "rgb(var(--theme-text-muted))",
            }}
          >
            <FaCalendarAlt className="w-3 h-3 theme-text" />
            {cert.date}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3
          className="font-bold text-base leading-snug transition-colors duration-200"
          style={{ color: "rgb(var(--theme-text))" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(var(--theme-primary-400))")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(var(--theme-text))")}
        >
          {cert.title}
        </h3>

        <div className="flex items-center gap-2" style={{ color: "rgb(var(--theme-text-muted))" }}>
          <FaCalendarAlt className="w-3.5 h-3.5" />
          <span className="text-sm">{cert.issuer}</span>
        </div>

        {/* Expandable description */}
        <div className="relative">
          <motion.p
            initial={false}
            animate={{ height: expanded ? "auto" : "2.5rem" }}
            className="text-sm leading-relaxed text-justify hyphens-auto overflow-hidden"
            style={{ color: "rgb(var(--theme-text-subtle))" }}
          >
            {cert.description}
          </motion.p>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 theme-text text-xs font-medium mt-1 transition-colors"
            >
              {expanded ? (
                <>
                  Show Less <FaChevronUp className="w-3 h-3" />
                </>
              ) : (
                <>
                  Read More <FaChevronDown className="w-3 h-3" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Credential link */}
        <div className="pt-2">
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-200 hover:gap-2"
            style={{ color: "rgb(var(--theme-primary-400))" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(var(--theme-primary-light))")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(var(--theme-primary-400))")}
          >
            View Credential
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-24" style={{ backgroundColor: "rgb(var(--theme-bg-card) / 0.3)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="theme-text font-mono text-sm font-medium mb-2 tracking-widest uppercase">
            Professional achievements
          </p>
          <h2 className="section-heading">Certifications</h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4 mb-6 theme-gradient-bar" />
          <p style={{ color: "rgb(var(--theme-text-muted))" }} className="max-w-xl mx-auto">
            Industry-recognized certifications that validate my technical expertise and commitment to continuous learning.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <CertificateCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
