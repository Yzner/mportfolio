import { useState, useRef, type FormEvent } from "react";
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

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 15000);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(form),
          signal: controller.signal,
        }
      );

      clearTimeout(timeout);

      let data: any = null;

      // SAFE JSON PARSING
      try {
        const text = await response.text();
        data = text ? JSON.parse(text) : {};
      } catch {
        throw new Error("Server returned invalid response.");
      }

      if (!response.ok) {
        throw new Error(
          data?.error ||
            data?.message ||
            "Failed to send message."
        );
      }

      setStatus("sent");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      clearTimeout(timeout);

      console.error(error);

      setStatus("error");

      if (error.name === "AbortError") {
        setErrorMessage("Request timed out. Please try again.");
      } else {
        setErrorMessage(
          error?.message || "Failed to send message."
        );
      }
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-cyan-400 font-mono text-sm font-medium mb-2 tracking-widest uppercase">
            Get in touch
          </p>

          <h2 className="section-heading">Contact Me</h2>

          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4 mb-6" />

          <p className="text-gray-400 max-w-xl mx-auto">
            I'm always open to discussing new opportunities,
            projects, or just having a chat about tech.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card-base p-6 space-y-5">
              <h3 className="text-white font-semibold text-lg">
                Let's work together
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you have a project in mind, want to
                collaborate, or just want to say hello —
                my inbox is always open.
              </p>

              {[
                {
                  icon: FaEnvelope,
                  label: "Email",
                  value: personal.email,
                  href: `mailto:${personal.email}`,
                },
                {
                  icon: FaPhone,
                  label: "Phone",
                  value: personal.phone,
                  href: `tel:${personal.phone}`,
                },
                {
                  icon: FaMapMarkerAlt,
                  label: "Location",
                  value: personal.location,
                  href: "#",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center group-hover:border-cyan-500/60 transition-all duration-200">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      {label}
                    </p>

                    <p className="text-gray-300 text-sm group-hover:text-cyan-400 transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* SOCIALS */}
            <div className="card-base p-6">
              <h4 className="text-white font-semibold text-sm mb-4">
                Connect on socials
              </h4>

              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex-1 flex flex-col items-center gap-2 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-400 hover:text-cyan-400 hover:border-cyan-500/60 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
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
                  <div className="w-16 h-16 bg-teal-500/10 border border-teal-500/30 rounded-full flex items-center justify-center">
                    <FaCheck className="w-8 h-8 text-teal-400" />
                  </div>

                  <h3 className="text-white font-bold text-xl">
                    Message Sent!
                  </h3>

                  <p className="text-gray-400 max-w-sm">
                    Thanks for reaching out. I'll get back
                    to you soon.
                  </p>

                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-outline text-sm"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h3 className="text-white font-semibold text-lg mb-1">
                    Send me a message
                  </h3>

                  {/* ERROR */}
                  {status === "error" && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
                      <FaExclamationCircle className="text-red-400 mt-0.5" />

                      <p className="text-sm text-red-300">
                        {errorMessage}
                      </p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5">
                        Your Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40 transition-all duration-200 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40 transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project inquiry..."
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40 transition-all duration-200 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40 transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />

                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
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