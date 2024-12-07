"use client";

import { MoonIcon } from "@/assets/icons";
import { useEffect, useState } from "react";

const ThemeToggleBtn = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage?.getItem("theme") : "light"
  );

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

    localStorage?.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    typeof window !== "undefined" &&
      theme &&
      localStorage?.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={handleThemeChange}
      className="capitalize w-8 h-8 bg-slate-800 dark:bg-white rounded-full text-white dark:text-slate-800 font-medium flex justify-center items-center"
    >
      <MoonIcon />
    </button>
  );
};

export default ThemeToggleBtn;
