import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type ThemeId = "ocean" | "aurora" | "sunset" | "sakura" | "forest";

export interface ThemeInfo {
  id: ThemeId;
  label: string;
  icon: string;
  gradient: string;
}

export const themes: ThemeInfo[] = [
  { id: "ocean", label: "Ocean Night", icon: "🌊", gradient: "from-cyan-500 to-blue-600" },
  { id: "aurora", label: "Aurora", icon: "🌌", gradient: "from-emerald-500 to-teal-600" },
  { id: "sunset", label: "Desert Sunset", icon: "🏜️", gradient: "from-amber-500 to-orange-600" },
  { id: "sakura", label: "Sakura", icon: "🌸", gradient: "from-rose-500 to-pink-600" },
  { id: "forest", label: "Midnight Forest", icon: "🌲", gradient: "from-green-600 to-lime-500" },
];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (t: ThemeId) => void;
  info: ThemeInfo;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return (saved as ThemeId) || "ocean";
  });

  const setTheme = (t: ThemeId) => {
    setThemeState(t);
    localStorage.setItem("portfolio-theme", t);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const info = themes.find((t) => t.id === theme) ?? themes[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, info }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
