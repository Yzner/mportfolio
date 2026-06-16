import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode, FaBuilding } from "react-icons/fa";
import { experience } from "../data/portfolio";

const typeConfig: Record<string, { icon: typeof FaBriefcase; gradient: string; label: string }> = {
  work: { icon: FaBriefcase, gradient: "linear-gradient(to bottom right, rgb(var(--theme-primary)), rgb(var(--theme-primary-end)))", label: "Work" },
  education: { icon: FaGraduationCap, gradient: "linear-gradient(to bottom right, rgb(var(--theme-primary-end)), rgb(var(--theme-primary)))", label: "Education" },
  internship: { icon: FaBuilding, gradient: "linear-gradient(to bottom right, rgb(var(--theme-primary)), rgb(var(--theme-primary-end)))", label: "Internship" },
  freelance: { icon: FaCode, gradient: "linear-gradient(to bottom right, rgb(var(--theme-primary-end)), rgb(var(--theme-primary)))", label: "Freelance" },
};

function ExperienceCard({ item, index }: { item: typeof experience[0]; index: number }) {
  const config = typeConfig[item.type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 group"
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
          style={{ background: config.gradient }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        {index < experience.length - 1 && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              background: "linear-gradient(to bottom, rgb(var(--theme-border-subtle)), transparent)",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        className="card-base p-6 mb-6 flex-1 hover:theme-border-glow transition-all duration-300"
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgb(var(--theme-bg-card) / 0.8)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "";
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-bold text-lg leading-snug" style={{ color: "rgb(var(--theme-text))" }}>{item.title}</h3>
            <p className="theme-text font-medium text-sm">{item.company}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                backgroundColor: "rgb(var(--theme-bg-card))",
                border: "1px solid rgb(var(--theme-border-subtle))",
                color: "rgb(var(--theme-text-muted))",
              }}
            >
              {item.period}
            </span>
            <p className="text-xs mt-1" style={{ color: "rgb(var(--theme-text-subtle))" }}>{item.location}</p>
          </div>
        </div>

        <ul
          className="space-y-3 text-sm leading-relaxed text-justify tracking-normal hyphens-auto"
          style={{ color: "rgb(var(--theme-text-muted))" }}
        >
          {item.description.map((desc, i) => (
            <li key={i} className="flex gap-4">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
              <span className="hover:text-white transition-colors duration-200">
                {desc}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {item.technologies.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24" style={{ backgroundColor: "rgb(var(--theme-bg-card) / 0.3)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="theme-text font-mono text-sm font-medium mb-2 tracking-widest uppercase">
            My journey
          </p>
          <h2 className="section-heading">Experience</h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4 mb-6 theme-gradient-bar" />
          <p style={{ color: "rgb(var(--theme-text-muted))" }} className="max-w-xl mx-auto">
            My professional background, education, and all the milestones along the way.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {Object.entries(typeConfig).map(([key, val]) => {
            const Icon = val.icon;
            return (
              <div
                key={key}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
                style={{
                  backgroundColor: "rgb(var(--theme-bg-card))",
                  border: "1px solid rgb(var(--theme-border-subtle))",
                  color: "rgb(var(--theme-text-muted))",
                }}
              >
                <div
                  className="w-4 h-4 rounded flex items-center justify-center"
                  style={{ background: val.gradient }}
                >
                  <Icon className="w-2.5 h-2.5 text-white" />
                </div>
                {val.label}
              </div>
            );
          })}
        </motion.div>

        {/* Timeline */}
        <div className="space-y-0">
          {experience.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
