import Link from "next/link";
import LocationIcon from "@/assets/icons/LocationIcon";
import { jobInfo } from "@/utilities/interface/job.interface";
import BriefcaseIcon from "@/assets/icons/BriefcaseIcon";
import CalenderIcon from "@/assets/icons/CalenderIcon";

const JobCard = ({ job }: { job: jobInfo }) => {
  return (
    <Link href={`/jobs/${job?.id}`}>
      <div className="shadow-section rounded-md px-4 py-4 dark:bg-slate-800">
        <h2 className="text-slate-800 dark:text-white text-xl font-semibold mb-2">
          {job?.job_role}
        </h2>

        <p className="text-slate-500 dark:text-white text-base font-semibold mb-1.5">
          {job?.company_name}
        </p>

        <div className="flex items-center gap-2 mb-3">
          <LocationIcon />
          <p className="text-slate-500 dark:text-white text-sm">
            {job?.location}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BriefcaseIcon />
            <p className="text-slate-500 dark:text-white text-sm font-semibold">
              {job?.experience_level}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <CalenderIcon />
            <p className="text-slate-500 dark:text-white text-sm font-semibold">
              Deadline: {job?.application_deadline}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
