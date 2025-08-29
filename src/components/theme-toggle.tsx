"use client";

import * as React from "react";
import { Switch } from "@/components/ui/switch";

export default function ThemeToggle() {
  const [isDark, setIsDark] = React.useState<boolean>(false);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = stored ? stored === "dark" : preferDark;
      setIsDark(initial);
      document.documentElement.classList.toggle("dark", initial);
    } catch {}
  }, []);

  const onChange = (checked: boolean) => {
    setIsDark(checked);
    document.documentElement.classList.toggle("dark", checked);
    try {
      localStorage.setItem("theme", checked ? "dark" : "light");
    } catch {}
  };

  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <span className="hidden sm:inline text-foreground/70">Тема</span>
      <Switch checked={isDark} onCheckedChange={onChange} aria-label="Перемикач теми" />
    </label>
  );
}

