import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaCode, FaHeart, FaArrowUp } from "react-icons/fa";
import { personal } from "../data/portfolio";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: FaGithub, href: personal.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: personal.social.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: personal.social.twitter, label: "Twitter" },
  { icon: FaInstagram, href: personal.social.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(var(--theme-bg-card) / 0.6)", borderTop: "1px solid rgb(var(--theme-border))" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2 w-fit">
              <div className="w-8 h-8 theme-gradient-badge rounded-lg flex items-center justify-center">
                <FaCode className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg" style={{ color: "rgb(var(--theme-text))" }}>
                Yzner<span className="gradient-text">.dev</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgb(var(--theme-text-muted))" }}>
              Building beautiful, performant web experiences. Open to full-time roles and freelance projects.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 hover:-translate-y-0.5"
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
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-wide uppercase" style={{ color: "rgb(var(--theme-text))" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    style={{ color: "rgb(var(--theme-text-muted))" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(var(--theme-primary-400))")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(var(--theme-text-muted))")}
                  >
                    <span
                      className="w-0 group-hover:w-3 h-px transition-all duration-200 overflow-hidden"
                      style={{ backgroundColor: "rgb(var(--theme-primary-400))" }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-wide uppercase" style={{ color: "rgb(var(--theme-text))" }}>
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgb(var(--theme-text-muted))" }}>
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="transition-colors"
                  style={{ color: "rgb(var(--theme-text-muted))" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(var(--theme-primary-400))")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(var(--theme-text-muted))")}
                >
                  {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personal.phone}`}
                  className="transition-colors"
                  style={{ color: "rgb(var(--theme-text-muted))" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(var(--theme-primary-400))")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(var(--theme-text-muted))")}
                >
                  {personal.phone}
                
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personal.phone}`}
                  className="transition-colors"
                  style={{ color: "rgb(var(--theme-text-muted))" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(var(--theme-primary-400))")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(var(--theme-text-muted))")}
                >
                  {personal.location}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgb(var(--theme-border))" }}
        >
          <p className="text-sm flex items-center gap-1.5" style={{ color: "rgb(var(--theme-text-subtle))" }}>
            &copy; {new Date().getFullYear()} {personal.name}. Made with
            <FaHeart className="w-3 h-3" style={{ color: "rgb(239 68 68)" }} />
            and lots of coffee.
          </p>
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
            style={{ color: "rgb(var(--theme-text-subtle))" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(var(--theme-primary-400))")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(var(--theme-text-subtle))")}
          >
            Back to top
            <FaArrowUp className="w-3 h-3" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
