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
        <span style={{ color: "rgb(var(--theme-text-muted))" }} className="font-medium">{name}</span>
        <span className={`font-mono font-semibold`} style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "rgb(var(--theme-border))" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: gradient }}
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
      className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-default"
      style={{
        backgroundColor: "rgb(var(--theme-bg-card))",
        border: "1px solid rgb(var(--theme-border-subtle))",
        color: "rgb(var(--theme-text-muted))",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "rgb(var(--theme-primary-400))";
        e.currentTarget.style.borderColor = "rgb(var(--theme-primary) / 0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "rgb(var(--theme-text-muted))";
        e.currentTarget.style.borderColor = "rgb(var(--theme-border-subtle))";
      }}
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
      className="card-base p-8 hover:theme-border-glow"
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
          style={{ background: badgeGradient }}
        >
          {badge}
        </div>
        <div>
          <h3 className="font-bold text-lg" style={{ color: "rgb(var(--theme-text))" }}>{title}</h3>
          <p className="text-sm" style={{ color: "rgb(var(--theme-text-subtle))" }}>{subtitle}</p>
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
    <section id="skills" className="py-24" style={{ backgroundColor: "rgb(var(--theme-bg-card) / 0.3)" }}>
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
            What I work with
          </p>
          <h2 className="section-heading">Skills & Technologies</h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4 theme-gradient-bar" />
        </motion.div>

        {/* Tech skills row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <SkillSection
            title="Frontend"
            subtitle="UI development skills"
            badge="FE"
            badgeGradient="linear-gradient(to bottom right, rgb(var(--theme-primary)), rgb(var(--theme-primary-end)))"
            barGradient="linear-gradient(to right, rgb(var(--theme-primary)), rgb(var(--theme-primary-end)))"
            barColor="rgb(var(--theme-primary-400))"
            data={skills.frontend}
            delay={0}
            direction="left"
          />
          <SkillSection
            title="Backend"
            subtitle="Server & database skills"
            badge="BE"
            badgeGradient="linear-gradient(to bottom right, rgb(var(--theme-primary-end)), rgb(var(--theme-primary)))"
            barGradient="linear-gradient(to right, rgb(var(--theme-primary-end)), rgb(var(--theme-primary)))"
            barColor="rgb(var(--theme-primary-400))"
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
            badgeGradient="linear-gradient(to bottom right, rgb(244 63 94), rgb(219 39 119))"
            barGradient="linear-gradient(to right, rgb(244 63 94), rgb(219 39 119))"
            barColor="rgb(251 113 133)"
            data={skills.creative}
            delay={0.2}
            direction="left"
          />
          <SkillSection
            title="Graphic Design"
            subtitle="Visual design & branding skills"
            badge="🖌️"
            badgeGradient="linear-gradient(to bottom right, rgb(245 158 11), rgb(234 88 12))"
            barGradient="linear-gradient(to right, rgb(245 158 11), rgb(234 88 12))"
            barColor="rgb(251 191 36)"
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
          className="card-base p-8 hover:theme-border-glow"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 theme-gradient-badge rounded-xl flex items-center justify-center text-white font-bold text-sm">
              ⚙
            </div>
            <div>
              <h3 className="font-bold text-lg" style={{ color: "rgb(var(--theme-text))" }}>Tools & Technologies</h3>
              <p className="text-sm" style={{ color: "rgb(var(--theme-text-subtle))" }}>My everyday toolkit</p>
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
