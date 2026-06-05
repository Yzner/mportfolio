import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaGithub, FaStar, FaChevronDown, FaChevronUp, FaGoogleDrive, FaTiktok, FaGlobe } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { projects, projectCategories, type ProjectCategory, type DemoType, demoLabels } from "../data/portfolio";

const demoIcons: Record<DemoType, React.ReactNode> = {
  github: <FaGithub className="w-3.5 h-3.5" />,
  tiktok: <FaTiktok className="w-3.5 h-3.5" />,
  canva: <SiCanva className="w-3.5 h-3.5" />,
  googleDrive: <FaGoogleDrive className="w-3.5 h-3.5" />,
  website: <FaGlobe className="w-3.5 h-3.5" />,
};

const demoColors: Record<DemoType, string> = {
  github: "text-gray-400 hover:text-white",
  tiktok: "text-pink-400 hover:text-pink-300",
  canva: "text-cyan-400 hover:text-cyan-300",
  googleDrive: "text-emerald-400 hover:text-emerald-300",
  website: "text-blue-400 hover:text-blue-300",
};

function ProjectCard({
  project,
  index,
  category,
}: {
  project: (typeof projects)[0];
  index: number;
  category: (typeof projectCategories)[number];
}) {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > 80;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`card-base group overflow-hidden hover:${category.borderColor} hover:-translate-y-1 hover:shadow-2xl transition-all duration-300`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-amber-400 text-xs font-medium backdrop-blur-sm">
            <FaStar className="w-3 h-3" />
            Featured
          </div>
        )}
        {/* Category badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-gray-900/70 border border-gray-700/50 rounded-full text-xs font-medium backdrop-blur-sm text-gray-300">
          {category.icon} {category.label}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Expandable description */}
        <div className="relative">
          <motion.p
            initial={false}
            animate={{ height: expanded ? "auto" : "2.5rem" }}
            className="text-gray-400 text-sm leading-relaxed overflow-hidden"
          >
            {project.description}
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

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 text-xs font-medium rounded-md border ${category.tagColor}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Demo links */}
        {project.demos && project.demos.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.demos.map((demo) => (
              <a
                key={demo.type}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:gap-2 ${demoColors[demo.type]}`}
              >
                {demoIcons[demo.type]}
                {demoLabels[demo.type]}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const getActiveMeta = () => {
    if (activeCategory === "all") return projectCategories[0];
    return projectCategories.find((c) => c.id === activeCategory) ?? projectCategories[0];
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-cyan-400 font-mono text-sm font-medium mb-2 tracking-widest uppercase">
            Things I've built & created
          </p>
          <h2 className="section-heading">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4 mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto">
            From software engineering to creative artwork and graphic design — explore my work across different disciplines.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="flex flex-wrap justify-center bg-gray-900 border border-gray-800 rounded-xl p-1.5 gap-1">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All
            </button>
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? `bg-gradient-to-r ${cat.accent} text-white shadow-lg`
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="mr-1.5">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Category description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="text-center mb-8"
          >
            {activeCategory === "all" ? (
              <p className="text-gray-500 text-sm">
                Showing all {projects.length} projects across all categories
              </p>
            ) : (
              <p className="text-gray-500 text-sm">
                {projectCategories.find((c) => c.id === activeCategory)?.icon}{" "}
                {filtered.length} project{filtered.length !== 1 ? "s" : ""} in{" "}
                <span className="text-gray-300 font-medium">
                  {projectCategories.find((c) => c.id === activeCategory)?.label}
                </span>
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                category={
                  projectCategories.find((c) => c.id === project.category) ??
                  getActiveMeta()
                }
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12 space-y-4"
        >
          <p className="text-gray-400">Want to see more?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/Yzner"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://drive.google.com/drive/folders/1xkePN8PxEpJhSuIKsglD4oFFomdbzw-j?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <FaGoogleDrive className="w-4 h-4" />
              Google Drive
            </a>
            <a
              href="https://www.tiktok.com/@lnkprintstechhub?_r=1&_t=ZS-96hNR8KB03o"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <FaTiktok className="w-4 h-4" />
              TikTok
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
