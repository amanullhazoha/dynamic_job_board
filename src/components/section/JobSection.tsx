"use client";

import JobCard from "../cards/JobCard";
import Checkbox from "../inputs/Checkbox";
import { useEffect, useState } from "react";
import { getAllJobs } from "@/app/services";
import { jobInfo } from "@/utilities/interface/job.interface";

const JobSection = () => {
  const [jobs, setJob] = useState([]);
  const [jobType, setType] = useState([]);
  const [jobCategory, setJobCategory] = useState([]);
  const [jobLocation, setJobLocation] = useState<any>([]);

  useEffect(() => {
    const allJobPosts = async () => {
      try {
        const res = await getAllJobs();

        setJob(res);
      } catch (error) {
        console.log(error);
      }
    };

    allJobPosts();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6 py-3">
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

      <div className="col-span-12 md:col-span-9 grid grid-cols-1 gap-6 z-0">
        <div className="bg-green-100 dark:bg-slate-800 px-4 py-5 rounded-md relative h-fit">
          <input
            type="text"
            className="w-full border border-slate-800 rounded-md pl-4 pr-[97px] py-1 outline-none"
          />

          <button
            type="button"
            className="absolute right-[16px] top-[20px] bg-green-500 h-[34px] px-4 text-white rounded-tr-md rounded-br-md"
          >
            Search
          </button>
        </div>

        {jobs?.map((item: jobInfo, index: number) => (
          <JobCard key={index} job={item} />
        ))}
      </div>
    </div>
  );
};

export default JobSection;
