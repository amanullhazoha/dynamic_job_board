import Link from "next/link";
import ThemeToggleBtn from "../buttons/ThemeToggleBtn";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <header className="transition-colors duration-500 bg-white dark:bg-darkBackground sticky top-0 shadow-md">
        <div className="main-container flex justify-between items-center py-5">
          <div className="flex items-center gap-10">
            <Link href="/">
              <p className="text-2xl font-bold text-slate-800 dark:text-white">
                Job{" "}
                <span className="text-green-500 italic font-serif">Board</span>
              </p>
            </Link>

            <nav>
              <ul className="flex gap-8 text-base font-medium text-slate-800 dark:text-white">
                <li>
                  <Link href="/" className="hover:text-green-500">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/" className="hover:text-green-500">
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

          <ul className="flex items-center gap-4 text-base font-medium ">
            <Link
              href="/"
              className="hover:text-green-500 text-white dark:text-slate-800"
            >
              <p className="bg-green-500 dark:bg-white px-5 py-1.5 rounded-md">
                Login
              </p>
            </Link>

            <Link
              href="/"
              className="hover:text-green-500 text-white dark:text-slate-800"
            >
              <p className="bg-green-500 dark:bg-white px-5 py-1.5 rounded-md">
                Sign Up
              </p>
            </Link>

            <li>
              <ThemeToggleBtn />
            </li>
          </ul>
        </div>
      </header>

      <main className="min-h-[calc(100vh-367px)] py-5">
        <div className="main-container">{children}</div>
      </main>

      <footer className="bg-slate-800">
        <div className="main-container py-10">
          <div className="grid grid-cols-4 gap-6">
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

        <div className="main-container border-t border-white py-4 flex items-center justify-start gap-10">
          <p className="text-white text-sm">
            &copy; 2024 Copyright by{" "}
            <Link href="http://creativecommons.org/licenses">Job Board</Link>
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
    </>
  );
};

export default PublicLayout;
