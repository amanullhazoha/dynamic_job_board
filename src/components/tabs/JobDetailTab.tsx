import Link from "next/link";

const TabItem = ({ title }: { title: string }) => {
  return (
    <Link
      href="#"
      className="px-3 bg-slate-800 dark:bg-green-500 py-1.5 min-w-[50px] text-center text-white font-semibold text-sm"
    >
      <p>{title}</p>
    </Link>
  );
};

const JobDetailTab = () => {
  return (
    <div className="overflow-auto">
      <div className="flex items-center gap-4 w-[450px]">
        <TabItem title="All" />
        <TabItem title="Description" />
        <TabItem title="Requirement" />
        <TabItem title="Company Info" />
      </div>
    </div>
  );
};

export default JobDetailTab;
