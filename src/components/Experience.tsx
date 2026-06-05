import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode, FaBuilding } from "react-icons/fa";
import { experience } from "../data/portfolio";

const typeConfig: Record<string, { icon: typeof FaBriefcase; color: string; label: string }> = {
  work: { icon: FaBriefcase, color: "from-cyan-500 to-blue-600", label: "Work" },
  education: { icon: FaGraduationCap, color: "from-teal-500 to-cyan-500", label: "Education" },
  internship: { icon: FaBuilding, color: "from-blue-500 to-teal-500", label: "Internship" },
  freelance: { icon: FaCode, color: "from-sky-500 to-blue-600", label: "Freelance" },
};

function ExperienceCard({
  item,
  index,
}: {
  item: {
    id: number;
    type: string;
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    technologies: string[];
  };
  index: number;
}) {
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
          className={`w-12 h-12 bg-gradient-to-br ${config.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        {index < experience.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-gray-700 to-transparent mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="card-base p-6 mb-6 flex-1 group-hover:border-cyan-500/40 hover:bg-gray-800/50 transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-white font-bold text-lg leading-snug">{item.title}</h3>
            <p className="text-cyan-400 font-medium text-sm">{item.company}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-xs font-medium px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300">
              {item.period}
            </span>
            <p className="text-gray-500 text-xs mt-1">{item.location}</p>
          </div>
        </div>

        <ul className="text-gray-400 text-sm leading-relaxed mb-4 list-disc pl-5 space-y-2">
          {item.description.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
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
    <section id="experience" className="py-24 bg-gray-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-cyan-400 font-mono text-sm font-medium mb-2 tracking-widest uppercase">
            My journey
          </p>
          <h2 className="section-heading">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4 mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto">
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
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-400"
              >
                <div className={`w-4 h-4 bg-gradient-to-br ${val.color} rounded flex items-center justify-center`}>
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
