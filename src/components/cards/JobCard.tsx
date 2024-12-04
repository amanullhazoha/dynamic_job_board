import Link from "next/link";
import LocationIcon from "@/assets/icons/LocationIcon";

const JobCard = () => {
  return (
    <Link href="/jobs/aman">
      <div className="shadow-section rounded-md px-4 py-4 dark:bg-slate-800">
        <h2 className="text-slate-800 dark:text-white text-xl font-semibold mb-2">
          Sales Executive Officer
        </h2>

        <p className="text-slate-500 dark:text-white text-base font-semibold mb-1.5">
          Taslima Marriage Association
        </p>

        <div className="flex items-center gap-2 mb-3">
          <LocationIcon />
          <p className="text-slate-500 dark:text-white text-sm">
            Dhaka (Uttara, Uttara West)
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LocationIcon />
            <p className="text-slate-500 dark:text-white text-sm font-semibold">
              At least 1 years
            </p>
          </div>

          <div className="flex items-center gap-2">
            <LocationIcon />
            <p className="text-slate-500 dark:text-white text-sm font-semibold">
              Deadline: 4 Dec 2024
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
