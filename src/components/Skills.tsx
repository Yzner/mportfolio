import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/portfolio";

function SkillBar({
  name,
  level,
  delay,
  gradient,
  color,
}: {
  name: string;
  level: number;
  delay: number;
  gradient: string;
  color: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className={`${color} font-mono font-semibold`}>{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
        />
      </div>
    </div>
  );
}

function ToolBadge({ name, delay }: { name: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm font-medium text-gray-300
                 hover:text-cyan-400 hover:border-cyan-500/60 hover:bg-gray-750 transition-all duration-200 cursor-default"
    >
      {name}
    </motion.div>
  );
}

interface SkillSectionProps {
  title: string;
  subtitle: string;
  badge: string;
  badgeGradient: string;
  barGradient: string;
  barColor: string;
  borderColor: string;
  data: { name: string; level: number }[];
  delay: number;
  direction: "left" | "right";
}

function SkillSection({
  title,
  subtitle,
  badge,
  badgeGradient,
  barGradient,
  barColor,
  borderColor,
  data,
  delay: sectionDelay,
  direction,
}: SkillSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`card-base p-8 hover:${borderColor}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-10 h-10 bg-gradient-to-br ${badgeGradient} rounded-xl flex items-center justify-center text-white font-bold text-sm`}
        >
          {badge}
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
      </div>
      <div className="space-y-5">
        {data.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={sectionDelay + i * 0.1}
            gradient={barGradient}
            color={barColor}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-gray-900/30">
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
            What I work with
          </p>
          <h2 className="section-heading">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Tech skills row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <SkillSection
            title="Frontend"
            subtitle="UI development skills"
            badge="FE"
            badgeGradient="from-cyan-500 to-blue-600"
            barGradient="from-cyan-500 to-blue-600"
            barColor="text-cyan-400"
            borderColor="border-cyan-500/30"
            data={skills.frontend}
            delay={0}
            direction="left"
          />
          <SkillSection
            title="Backend"
            subtitle="Server & database skills"
            badge="BE"
            badgeGradient="from-blue-500 to-teal-500"
            barGradient="from-blue-500 to-teal-500"
            barColor="text-blue-400"
            borderColor="border-blue-500/30"
            data={skills.backend}
            delay={0.1}
            direction="right"
          />
        </div>

        {/* Creative & Design skills row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <SkillSection
            title="Creative Works"
            subtitle="Art & illustration skills"
            badge="🎨"
            badgeGradient="from-rose-500 to-pink-600"
            barGradient="from-rose-500 to-pink-600"
            barColor="text-rose-400"
            borderColor="border-rose-500/30"
            data={skills.creative}
            delay={0.2}
            direction="left"
          />
          <SkillSection
            title="Graphic Design"
            subtitle="Visual design & branding skills"
            badge="🖌️"
            badgeGradient="from-amber-500 to-orange-600"
            barGradient="from-amber-500 to-orange-600"
            barColor="text-amber-400"
            borderColor="border-amber-500/30"
            data={skills.design}
            delay={0.3}
            direction="right"
          />
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-base p-8 hover:border-cyan-500/30"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
              ⚙
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Tools & Technologies</h3>
              <p className="text-gray-500 text-sm">My everyday toolkit</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((tool, i) => (
              <ToolBadge key={tool.name} name={tool.name} delay={i * 0.04} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
