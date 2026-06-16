import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, themes } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme, info } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200 hover:border-[rgb(var(--theme-primary))]"
        style={{
          backgroundColor: "rgb(var(--theme-bg-card))",
          borderColor: "rgb(var(--theme-border))",
          color: "rgb(var(--theme-text-muted))",
        }}
        aria-label="Change theme"
      >
        <span className="text-base">{info.icon}</span>
        <span className="hidden sm:inline text-xs font-medium">{info.label}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-52 rounded-xl p-1.5 shadow-2xl z-50"
            style={{
              backgroundColor: "rgb(var(--theme-bg-card))",
              border: "1px solid rgb(var(--theme-border))",
            }}
          >
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
                style={{
                  color:
                    theme === t.id
                      ? "rgb(var(--theme-primary-400))"
                      : "rgb(var(--theme-text-muted))",
                  backgroundColor:
                    theme === t.id
                      ? "rgb(var(--theme-primary) / 0.1)"
                      : "transparent",
                }}
              >
                <span className="text-lg">{t.icon}</span>
                <span className="flex-1 text-left">{t.label}</span>
                {theme === t.id && (
                  <motion.div
                    layoutId="theme-check"
                    className="w-4 h-4 rounded-full theme-gradient-badge"
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
