"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useContext } from "react";
import Navbar from "../navs/MainNav";
import LogoutIcon from "@/assets/icons/LogoutIcon";
import { AuthContext } from "@/context/authContext";
import ThemeToggleBtn from "../buttons/ThemeToggleBtn";
import { useRouter, usePathname } from "next/navigation";

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

const NavLink = ({ href, name }: { href: string; name: string }) => {
  const pathname = usePathname();

  const isActive = pathname === href?.toString()?.replace(" ", "%20");

  return (
    <li>
      <Link
        href={href}
        className={`${isActive && "text-green-500"} hover:text-green-500`}
      >
        {name}
      </Link>
    </li>
  );
};

const Header = () => {
  const router = useRouter();

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useContext must be used within an AuthContextProvider");
  }

  const { user, setIsAuthenticated } = authContext;

  return (
    <header className="transition-colors duration-500 bg-white dark:bg-slate-800 sticky top-0 shadow-md z-[9999]">
      <div className="main-container flex justify-between items-center py-5 relative">
        <div className="flex items-center gap-10">
          <Link href="/">
            <p className="text-2xl font-bold text-slate-800 dark:text-white">
              Job{" "}
              <span className="text-green-500 italic font-serif">Board</span>
            </p>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-8 text-base font-medium text-slate-800 dark:text-white">
              {NavList?.map((nav) =>
                nav.access === "user" ? (
                  user ? (
                    <NavLink
                      key={nav.id}
                      href={`${nav.href}/${user?.fullName}`}
                      name={nav.name}
                    />
                  ) : null
                ) : (
                  <NavLink key={nav.id} href={nav.href} name={nav.name} />
                )
              )}
            </ul>
          </nav>
        </div>

        <ul className="items-center gap-4 text-base font-medium relative hidden md:flex">
          {!user && (
            <>
              <Link
                href="/login"
                className="hover:text-white dark:hover:text-white text-white dark:text-slate-800 "
              >
                <p className="bg-green-500 hover:bg-slate-800 dark:hover:bg-green-500 dark:bg-white px-5 py-1.5 rounded-md">
                  Login
                </p>
              </Link>

              <Link
                href="/signup"
                className="hover:text-white dark:hover:text-white text-white dark:text-slate-800 "
              >
                <p className="bg-green-500 hover:bg-slate-800 dark:hover:bg-green-500 dark:bg-white px-5 py-1.5 rounded-md">
                  Sign Up
                </p>
              </Link>
            </>
          )}

          <li>
            <ThemeToggleBtn />
          </li>

          {user && (
            <li
              className="cursor-pointer"
              onClick={() => {
                Cookies.remove("access_token");

                setIsAuthenticated(false);

                router.push("/");
              }}
            >
              <LogoutIcon />
            </li>
          )}
        </ul>

        <Navbar
          user={user}
          setIsAuthenticated={() => setIsAuthenticated(false)}
        />
      </div>
    </header>
  );
};

export default Header;
