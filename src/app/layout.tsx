import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "./globals.css";

export const metadata: Metadata = {
  title: "Job Board",
  description: "Job Board description for the job board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="light:bg-lightBackground dark:bg-darkBackground w-full">
          {children}
        </div>

        <ToastContainer />
      </body>
    </html>
  );
}
