"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MenuIcon from "@/assets/icons/MenuIcon";
import ThemeToggleBtn from "../buttons/ThemeToggleBtn";

const NavList = [
  {
    id: 1,
    href: "/",
    name: "Home",
    access: "public",
  },
  {
    id: 2,
    href: "/user",
    name: "Profile",
    access: "user",
  },
  {
    id: 3,
    href: "/jobs",
    name: "Job",
    access: "public",
  },
  {
    id: 4,
    href: "/about",
    name: "About",
    access: "public",
  },
  {
    id: 5,
    href: "/contact-us",
    name: "Contact Us",
    access: "public",
  },
];

const NavLink = ({
  href,
  name,
  onClick,
}: {
  href: string;
  name: string;
  onClick: () => void;
}) => {
  const pathname = usePathname();

  const isActive = pathname === href?.toString()?.replace(" ", "%20");

  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={`${
          isActive && "text-green-500"
        } hover:text-green-500 transition-all duration-300`}
      >
        {name}
      </Link>
    </li>
  );
};

const Navbar = ({
  user,
  setIsAuthenticated,
}: {
  user: any;
  setIsAuthenticated: () => void;
}) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="absolute z-10 right-[10px]">
      <div className="md:hidden flex justify-between items-center gap-2.5">
        <ThemeToggleBtn />

        <button onClick={toggleMenu} className="text-slate-800 dark:text-white">
          <MenuIcon />
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
          {NavList?.map((nav) =>
            nav.access === "user" ? (
              user ? (
                <NavLink
                  key={nav.id}
                  href={`${nav.href}/${user?.fullName}`}
                  name={nav.name}
                  onClick={toggleMenu}
                />
              ) : null
            ) : (
              <NavLink
                key={nav.id}
                href={nav.href}
                name={nav.name}
                onClick={toggleMenu}
              />
            )
          )}

          <li>
            <Link
              href="/login"
              className={`${
                pathname === "/login" && "text-green-500"
              } hover:text-green-500 transition-all duration-300`}
              onClick={toggleMenu}
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              href="/signup"
              className={`${
                pathname === "/signup" && "text-green-500"
              } hover:text-green-500 transition-all duration-300`}
              onClick={toggleMenu}
            >
              Sign Up
            </Link>
          </li>

          {user && (
            <li>
              <button
                className="hover:text-green-500 transition-all duration-300"
                onClick={() => {
                  setIsAuthenticated();

                  Cookies.remove("access_token");

                  toggleMenu();
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
