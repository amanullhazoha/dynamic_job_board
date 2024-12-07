"use client";

import Link from "next/link";
import Header from "./Header";
import { AuthContextProvider } from "@/context/authContext";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AuthContextProvider>
      <Header />

      <main className="transition-colors duration-500 md:min-h-[calc(100vh-367px)] py-5">
        <div className="main-container">{children}</div>
      </main>

      <footer className="bg-slate-800">
        <div className="main-container py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div>
              <h3 className="text-white text-base font-semibold">
                Find & place Job
              </h3>

              <div className="mt-2 flex flex-col gap-2.5">
                <Link href="/" className="text-white hover:underline">
                  Find Job
                </Link>

                <Link href="/" className="text-white hover:underline">
                  Place Job
                </Link>

                <Link href="/" className="text-white hover:underline">
                  Blog
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white text-base font-semibold">Discover</h3>

              <div className="mt-2 flex flex-col gap-2.5">
                <Link href="/" className="text-white hover:underline">
                  Hiring Employ
                </Link>

                <Link href="/" className="text-white hover:underline">
                  Find Talent
                </Link>

                <Link href="/" className="text-white hover:underline">
                  Find Something
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white text-base font-semibold">Resources</h3>

              <div className="mt-2 flex flex-col gap-2.5">
                <Link href="/" className="text-white hover:underline">
                  Help & support
                </Link>

                <Link href="/" className="text-white hover:underline">
                  Success stories
                </Link>

                <Link href="/" className="text-white hover:underline">
                  Blog
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white text-base font-semibold">Company</h3>

              <div className="mt-2 flex flex-col gap-2.5">
                <Link href="/" className="text-white hover:underline">
                  About us
                </Link>

                <Link href="/" className="text-white hover:underline">
                  Leadership
                </Link>

                <Link href="/" className="text-white hover:underline">
                  Careers
                </Link>

                <Link href="/" className="text-white hover:underline">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="main-container border-t border-white py-4 flex max-md:flex-col items-center md:justify-start gap-3 md:gap-10">
          <p className="text-white text-sm">
            &copy; 2024 Copyright by <Link href="/">Job Board</Link>
          </p>

          <div className="text-sm">
            <Link href="/" className="text-white">
              Privacy Policy
            </Link>

            <span className="mx-2 text-white">|</span>

            <Link href="/" className="text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </AuthContextProvider>
  );
};

export default PublicLayout;
