"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import JobCard from "@/components/cards/JobCard";
import { userJob, deleteJob } from "@/app/services";
import PreLoader from "@/components/preLoader/PreLoader";
import { jobInfo } from "@/utilities/interface/job.interface";

const ProfilePage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  const accessToken: string | undefined = Cookies.get("access_token");

  const fetchUserJobPost = async () => {
    setLoading(true);

    const response = await userJob(accessToken);

    if (response.status === 200) {
      setJobs(response.data);

      setLoading(false);
    } else {
      toast.error(response?.message);

      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    const response = await deleteJob(id?.toString(), accessToken);

    if (response.status === 200) {
      toast.success(response?.message);

      fetchUserJobPost();
    } else {
      toast.error(response?.message);
    }
  };

  useEffect(() => {
    fetchUserJobPost();
  }, [accessToken]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-white">
          User Job Post List
        </h3>

        <Link href="/create-job">
          <button
            type="button"
            className="px-5 text-white bg-green-500 py-1.5 rounded-md"
          >
            Post Job
          </button>
        </Link>
      </div>

      {loading ? (
        <PreLoader />
      ) : jobs?.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {jobs?.map((item: jobInfo, index: number) => (
            <JobCard
              key={index}
              job={item}
              manageJob={true}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="min-h-[200px] flex items-center justify-center">
          <p className="text-center font-medium text-xl text-slate-800 dark:text-white">
            No jobs found
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
