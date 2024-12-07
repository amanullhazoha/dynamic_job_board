import Link from "next/link";
import Cookies from "js-cookie";
import EditIcon from "@/assets/icons/EditIcon";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import CalenderIcon from "@/assets/icons/CalenderIcon";
import BriefcaseIcon from "@/assets/icons/BriefcaseIcon";
import { jobInfo } from "@/utilities/interface/job.interface";

const JobCard = ({
  job,
  handleDelete,
  manageJob = false,
}: {
  job: jobInfo;
  manageJob?: boolean;
  handleDelete?: (id: number) => void;
}) => {
  return (
    <div className="relative">
      <Link href={`/jobs/${job?.id}`}>
        <div className="shadow-section rounded-md px-4 py-4 dark:bg-slate-800">
          <h2 className="text-slate-800 dark:text-white text-xl font-semibold">
            {job?.title}
          </h2>

          <div className="mb-1.5 flex gap-2 items-center">
            <p className="text-slate-500 dark:text-white text-sm font-medium mt-0.5">
              <span className=" font-semibold">{job?.job_role}</span> (
              {job?.job_category})
            </p>
          </div>

          <p className="text-slate-500 dark:text-white text-base font-semibold mb-1.5">
            {job?.company_name}
          </p>

          <div className="flex items-center gap-2 mb-3">
            <LocationIcon />
            <p className="text-slate-500 dark:text-white text-sm">
              {job?.location}
            </p>
          </div>

          <div className="flex items-center gap-2 mb-3">
            {job?.skills?.map((item) => (
              <p
                className={`text-[12px] py-[2px] px-2.5 rounded-xl bg-gray-300 text-stone-800`}
              >
                {item}
              </p>
            ))}
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

      {manageJob && (
        <div className="flex gap-2 items-center justify-center absolute top-4 right-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              handleDelete && handleDelete(job?.id);
            }}
          >
            <DeleteIcon />
          </button>

          <Link href={`/update-job?id=${job?.id}`}>
            <EditIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default JobCard;
