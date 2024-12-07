"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useContext } from "react";
import Navbar from "../navs/MainNav";
import { useRouter } from "next/navigation";
import LogoutIcon from "@/assets/icons/LogoutIcon";
import { AuthContext } from "@/context/authContext";
import ThemeToggleBtn from "../buttons/ThemeToggleBtn";

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
              <li>
                <Link href="/" className="hover:text-green-500">
                  Home
                </Link>
              </li>

              {user && (
                <li>
                  <Link
                    href={`/user/${user?.fullName}`}
                    className="hover:text-green-500"
                  >
                    Profile
                  </Link>
                </li>
              )}

              <li>
                <Link href="/jobs" className="hover:text-green-500">
                  Job
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-green-500">
                  About
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-green-500">
                  Contact Us
                </Link>
              </li>
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
