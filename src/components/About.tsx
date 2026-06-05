import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { personal } from "../data/portfolio";

const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "5+" },
  { label: "Happy Clients", value: "5+" },
  { label: "Open Source Contributions", value: "10+" },
];

const highlights = [
  { icon: FaBriefcase, label: "Systems Developer" },
  { icon: FaGraduationCap, label: "BS Computer Science, Palawan State University" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-cyan-400 font-mono text-sm font-medium mb-2 tracking-widest uppercase">
            Get to know me
          </p>
          <h2 className="section-heading">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Coding workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                {highlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 bg-gray-950/80 backdrop-blur-sm border border-gray-700/60 rounded-lg px-2.5 py-1.5"
                  >
                    <Icon className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs text-gray-300 whitespace-nowrap">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-base p-5 hover:border-cyan-500/40 hover:bg-gray-800/60"
                >
                  <p className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Systems Developer
              </h3>
              <p className="text-cyan-400 font-mono text-sm">{personal.title}</p>
            </div>

            <p className="text-gray-400 leading-relaxed">{personal.bio}</p>

            <p className="text-gray-400 leading-relaxed">
              I thrive in collaborative environments and enjoy working across the full stack —
              from architecting databases and APIs to crafting polished UIs. I'm always learning
              and pushing myself to write cleaner, faster, more maintainable code.
            </p>

            {/* Contact details */}
            <div className="space-y-3 pt-2">
              {[
                { icon: FaEnvelope, label: "Email", value: personal.email },
                { icon: FaPhone, label: "Phone", value: personal.phone },
                { icon: FaMapMarkerAlt, label: "Location", value: personal.location },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800 border border-gray-700">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{label}</p>
                    <p className="text-gray-300 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

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
    </section>
  );
}
