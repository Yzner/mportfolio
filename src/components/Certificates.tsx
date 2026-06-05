import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaCertificate,
  FaCalendarAlt,
  FaBuilding,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
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
      className="card-base group overflow-hidden hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

        <div className="absolute top-3 right-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
            <FaCertificate className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="absolute bottom-3 left-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-950/80 backdrop-blur-sm border border-gray-700/60 rounded-full text-xs text-gray-300">
            <FaCalendarAlt className="w-3 h-3 text-cyan-400" />
            {cert.date}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-white font-bold text-base leading-snug group-hover:text-cyan-400 transition-colors duration-200">
          {cert.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-400">
          <FaBuilding className="w-3.5 h-3.5" />
          <span className="text-sm">{cert.issuer}</span>
        </div>

        {/* Expandable description */}
        <div className="relative">
          <motion.p
            initial={false}
            animate={{ height: expanded ? "auto" : "2.5rem" }}
            className="text-gray-500 text-xs leading-relaxed text-justify overflow-hidden"
          >
            {cert.description}
          </motion.p>

          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-xs font-medium mt-1 transition-colors"
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
            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors duration-200 hover:gap-2"
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
    <section id="certificates" className="py-24 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-cyan-400 font-mono text-sm font-medium mb-2 tracking-widest uppercase">
            Professional achievements
          </p>
          <h2 className="section-heading">Certifications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4 mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto">
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