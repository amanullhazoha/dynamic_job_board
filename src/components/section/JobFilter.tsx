import { useState } from "react";
import Checkbox from "../inputs/Checkbox";

const JobFilter = () => {
  return (
    <div className="col-span-12 md:col-span-3 h-fit shadow-section rounded-md px-4 py-4 dark:bg-slate-800">
      <div className="flex items-center justify-between md:mb-4">
        <p className="text-base font-semibold text-slate-800 dark:text-white">
          Filter By
        </p>

        <button
          type="button"
          className="text-base font-semibold text-slate-800 dark:text-white"
        >
          Clear
        </button>
      </div>

      <div className="max-md:hidden">
        <div>
          <h3 className="text-base font-medium text-slate-800 dark:text-white mb-2">
            Job Category
          </h3>

          <div className="grid grid-cols-1 gap-2">
            <Checkbox label="Software Development" />
            <Checkbox label="Software Development" />
            <Checkbox label="Software Development" />
            <Checkbox label="Software Development" />
            <Checkbox label="Software Development" />
            <Checkbox label="Software Development" />
            <Checkbox label="Software Development" />
            <Checkbox label="Software Development" />
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-base font-medium text-slate-800 dark:text-white mb-2">
            Job Type
          </h3>

          <div className="grid grid-cols-1 gap-2">
            <Checkbox label="Software Development" />
            <Checkbox label="Software Development" />
            <Checkbox label="Software Development" />
            <Checkbox label="Software Development" />
            <Checkbox label="Software Development" />
            <Checkbox label="Software Development" />
            <Checkbox label="Software Development" />
            <Checkbox label="Software Development" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
