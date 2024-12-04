"use client";

import Link from "next/link";
import ThemeToggleBtn from "../buttons/ThemeToggleBtn";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <header className="transition-colors duration-500 bg-white dark:bg-slate-800 sticky top-0 shadow-md z-[9999]">
        <div className="px-2.5 md:px-4 flex justify-between items-center py-5">
          <div className="flex items-center gap-10">
            <Link href="/">
              <p className="text-2xl font-bold text-slate-800 dark:text-white">
                Job{" "}
                <span className="text-green-500 italic font-serif">Board</span>
              </p>
            </Link>
          </div>

          <ul className="flex items-center gap-4 text-base font-medium ">
            <Link
              href="/login"
              className="hover:text-white dark:hover:text-white text-white dark:text-slate-800"
            >
              <p className="bg-green-500 hover:bg-slate-800 dark:hover:bg-green-500 dark:bg-white px-5 py-1.5 rounded-md">
                Job Post
              </p>
            </Link>

            <li>
              <ThemeToggleBtn />
            </li>
          </ul>
        </div>
      </header>

      <main className="transition-colors duration-500 h-[calc(100vh-76px)] pr-2.5 md:pr-4 overflow-hidden flex gap-4 z-[999999]">
        <div className="w-[350px] sticky left-0 top-50 h-[calc(100vh-76px)] shadow-section dark:bg-slate-800 bg-white">
          <h1 className="text-white ">Hello</h1>
        </div>

        <div className="overflow-auto w-[calc(100%-370px)]">{children}</div>
      </main>
    </>
  );
};

export default AdminLayout;
