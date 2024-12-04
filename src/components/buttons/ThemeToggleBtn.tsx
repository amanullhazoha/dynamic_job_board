// "use client";

// import { MoonIcon } from "@/assets/icons";
// import { useEffect, useState } from "react";

// const ThemeToggleBtn = () => {
//   const [theme, setTheme] = useState(localStorage?.getItem("theme") || "light");

//   const handleThemeChange = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));

//     localStorage.setItem("theme", theme === "light" ? "dark" : "light");
//   };

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }

//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <button
//       type="button"
//       onClick={handleThemeChange}
//       className="capitalize w-8 h-8 bg-slate-800 dark:bg-white rounded-full text-white dark:text-slate-800 font-medium flex justify-center items-center"
//     >
//       <MoonIcon color={theme === "light" ? "#fff" : "#000"} />
//     </button>
//   );
// };

// export default ThemeToggleBtn;

"use client";

import { MoonIcon } from "@/assets/icons";
import { useEffect, useState } from "react";

const ThemeToggleBtn = () => {
  const [theme, setTheme] = useState("light"); // Default theme

  useEffect(() => {
    // Load the theme from localStorage on the client side
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);

    // Apply the theme to the document
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Update localStorage and apply the theme
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      type="button"
      onClick={handleThemeChange}
      className="capitalize w-8 h-8 bg-slate-800 dark:bg-white rounded-full text-white dark:text-slate-800 font-medium flex justify-center items-center"
    >
      <MoonIcon color={theme === "light" ? "#fff" : "#000"} />
    </button>
  );
};

export default ThemeToggleBtn;
