import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheck,
  FaExclamationCircle,
} from "react-icons/fa";
import { personal } from "../data/portfolio";

const socialLinks = [
  { icon: FaGithub, href: personal.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: personal.social.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: personal.social.twitter, label: "Twitter" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
    }
  };

  return (
    <section id="contact" className="py-24">
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
            Get in touch
          </p>
          <h2 className="section-heading">Contact Me</h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4 mb-6 theme-gradient-bar" />
          <p style={{ color: "rgb(var(--theme-text-muted))" }} className="max-w-xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a chat about tech.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card-base p-6 space-y-5">
              <h3 className="font-semibold text-lg" style={{ color: "rgb(var(--theme-text))" }}>Let's work together</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgb(var(--theme-text-muted))" }}>
                Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is always open.
              </p>

              {[
                { icon: FaEnvelope, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
                { icon: FaPhone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
                { icon: FaMapMarkerAlt, label: "Location", value: personal.location, href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{
                      backgroundColor: "rgb(var(--theme-bg-card))",
                      border: "1px solid rgb(var(--theme-border-subtle))",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgb(var(--theme-primary) / 0.6)";
                      e.currentTarget.style.color = "rgb(var(--theme-primary-400))";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgb(var(--theme-border-subtle))";
                      e.currentTarget.style.color = "";
                    }}
                  >
                    <Icon className="w-4 h-4 theme-text" />
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "rgb(var(--theme-text-subtle))" }}>{label}</p>
                    <p className="text-sm transition-colors" style={{ color: "rgb(var(--theme-text-muted))" }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="card-base p-6">
              <h4 className="font-semibold text-sm mb-4" style={{ color: "rgb(var(--theme-text))" }}>Connect on socials</h4>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex-1 flex flex-col items-center gap-2 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
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
                    <Icon className="w-4 h-4" />
                    <span className="text-xs">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="card-base p-8">
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "rgb(20 184 166 / 0.1)",
                      border: "1px solid rgb(20 184 166 / 0.3)",
                    }}
                  >
                    <FaCheck className="w-8 h-8" style={{ color: "rgb(20 184 166)" }} />
                  </div>
                  <h3 className="font-bold text-xl" style={{ color: "rgb(var(--theme-text))" }}>Message Sent!</h3>
                  <p style={{ color: "rgb(var(--theme-text-muted))" }} className="max-w-sm">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-outline text-sm"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "rgb(239 68 68 / 0.1)",
                      border: "1px solid rgb(239 68 68 / 0.3)",
                    }}
                  >
                    <FaExclamationCircle className="w-8 h-8" style={{ color: "rgb(239 68 68)" }} />
                  </div>
                  <h3 className="font-bold text-xl" style={{ color: "rgb(var(--theme-text))" }}>Something went wrong</h3>
                  <p style={{ color: "rgb(var(--theme-text-muted))" }} className="max-w-sm">
                    {errorMessage || "Failed to send message. Please try again."}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-primary text-sm"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-semibold text-lg mb-1" style={{ color: "rgb(var(--theme-text))" }}>Send me a message</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "rgb(var(--theme-text-muted))" }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 theme-input text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "rgb(var(--theme-text-muted))" }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 theme-input text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "rgb(var(--theme-text-muted))" }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project inquiry..."
                      className="w-full px-4 py-3 theme-input text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "rgb(var(--theme-text-muted))" }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 theme-input text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
