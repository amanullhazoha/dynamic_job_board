"use client";

import { useEffect, useState } from "react";
import { getAllJobs } from "@/app/services";
import JobCard from "@/components/cards/JobCard";
import { jobInfo } from "@/utilities/interface/job.interface";

const ProfilePage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const allJobPosts = async () => {
      try {
        const res = await getAllJobs();

        setJobs(res);
      } catch (error) {
        console.log(error);
      }
    };

    allJobPosts();
  }, []);

  return (
    <div>
      <div className="flex justify-end mb-6">
        <button
          type="button"
          className="px-5 text-white bg-green-500 py-1.5 rounded-md"
        >
          Post Job
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {jobs?.map((item: jobInfo, index: number) => (
          <JobCard key={index} job={item} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
