import Link from "next/link";
import { jobCategories } from "@/data/static";
import ArrowIcon from "@/assets/icons/ArrowIcon";

const CategorySection = () => {
  return (
    <div className="shadow-section bg-white dark:bg-slate-800 px-6 py-10 mt-5">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-3">
        Job Category
      </h2>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {jobCategories?.map((item: { name: string; id: number }) => (
          <Link href="/" key={item?.id}>
            <li className="flex items-center gap-1.5 font-semibold text-sm text-slate-800 dark:text-white">
              <ArrowIcon color="#000" /> {item?.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategorySection;
