"use client";

const tabs = ["All", "Description", "Requirement", "Company Info"];

const JobDetailTab = () => {
  const handleTabClick = (section: string) => {
    const element = document.getElementById(
      section.toLowerCase().replace(" ", "-")
    );

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-auto">
      <div className="flex items-center gap-4 w-[450px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className="px-3 bg-slate-800 dark:bg-green-500 py-1.5 min-w-[50px] text-center text-white font-semibold text-sm"
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobDetailTab;
