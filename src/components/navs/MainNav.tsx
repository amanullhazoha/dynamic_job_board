"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import MenuIcon from "@/assets/icons/MenuIcon";
import ThemeToggleBtn from "../buttons/ThemeToggleBtn";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const accessToken = Cookies.get("access_token");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (accessToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [accessToken]);

  return (
    <nav className="bg-white dark:bg-slate-800 absolute z-10 right-[10px]">
      <div className="md:hidden flex justify-between items-center gap-2.5">
        <ThemeToggleBtn />

        <button onClick={toggleMenu} className="text-slate-800 dark:text-white">
          <MenuIcon color="#000" />
        </button>
      </div>

      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-opacity-90 bg-slate-800 dark:bg-slate-800 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-2">
          <button onClick={toggleMenu} className="text-white text-2xl">
            X
          </button>
        </div>

        <ul className="flex flex-col gap-3 text-base font-medium text-white pl-6">
          <li>
            <Link
              href="/"
              className="hover:text-green-500 transition-all duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>

          {isLogin && (
            <li>
              <Link
                href={`/user/${accessToken}`}
                className="hover:text-green-500 transition-all duration-300"
                onClick={toggleMenu}
              >
                Profile
              </Link>
            </li>
          )}

          <li>
            <Link
              href="/jobs"
              className="hover:text-green-500 transition-all duration-300"
              onClick={toggleMenu}
            >
              Jobs
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="hover:text-green-500 transition-all duration-300"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-green-500 transition-all duration-300"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
