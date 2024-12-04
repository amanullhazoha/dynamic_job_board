import Link from "next/link";
import PublicLayout from "@/components/layouts/PublicLayout";

const NotFound = () => {
  return (
    <PublicLayout>
      <div className="flex gap-3 flex-col justify-center items-center min-h-[50vh]">
        <h1 className="text-2xl text-stone-900 dark:text-white font-medium">
          404 - Page Not Found
        </h1>

        <p className="text-stone-900 dark:text-white">
          The page you are looking for does not exist.
        </p>

        <Link href="/" className="bg-green-500 px-3 py-1 rounded-md text-white">
          <button>Go to Home</button>
        </Link>
      </div>
    </PublicLayout>
  );
};

export default NotFound;
