"use client";

import { useEffect, useState } from "react";

const ThemeToggleBtn = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");

    localStorage.setItem("theme", theme);

    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    const themeValue: string | null = localStorage.getItem("theme");

    if (themeValue) {
      setTheme(themeValue);
    } else {
      localStorage.setItem("theme", "light");

      document.body.classList.toggle("dark");
    }
  }, []);

  return (
    <button
      type="button"
      onClick={handleThemeChange}
      className="capitalize w-8 h-8 bg-slate-800 dark:bg-white rounded-full text-white dark:text-slate-800 font-medium"
    >
      {theme === "light" ? "D" : "L"}
    </button>
  );
};

export default ThemeToggleBtn;
