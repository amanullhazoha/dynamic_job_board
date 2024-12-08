import ChatSection from "@/components/section/ChatSection";
import JobDetailTab from "@/components/tabs/JobDetailTab";

const JobDetailPage = ({ jobDetail }: any) => {
  return (
    <div className="w-full md:w-[80%] lg:w-[75%] mx-auto dark:bg-slate-800 shadow-section px-2.5 md:px-5 py-5 md:py-6 mt-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-600 dark:text-white">
          {jobDetail?.company_name}
        </h2>

        <h1 className="text-3xl font-semibold text-slate-800 dark:text-white mt-3 leading-none">
          {jobDetail?.title}
        </h1>

        <div className="mb-1.5 mt-1.5 flex gap-2 items-center">
          <p className="text-slate-500 dark:text-white text-sm font-medium mt-0.5">
            <span className=" font-semibold">{jobDetail?.job_role}</span> (
            {jobDetail?.job_category})
          </p>
        </div>

        <p className="text-base font-semibold text-slate-500 dark:text-white mt-3">
          Application Deadline: {jobDetail?.application_deadline}
        </p>
      </div>

      <div className="mt-4">
        <JobDetailTab />
      </div>

      <div className="bg-slate-100 dark:bg-slate-700 px-5 py-5 mt-6">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-white mb-3">
          Summary
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <p className="text-sm text-slate-800 dark:text-white">
            Vacancy:{" "}
            <span className="font-semibold">
              {jobDetail?.number_of_positions}
            </span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Experience:{" "}
            <span className="font-semibold">{jobDetail?.experience_level}</span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Salary:{" "}
            <span className="font-semibold">{jobDetail?.salary_range}</span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Employment Type:{" "}
            <span className="font-semibold">{jobDetail?.employment_type}</span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Remote Option:{" "}
            <span className="font-semibold">
              {jobDetail?.remote_option ? "Yes" : "No"}
            </span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Location:{" "}
            <span className="font-semibold">{jobDetail?.location}</span>
          </p>
        </div>
      </div>

      <div
        id="description"
        className="bg-slate-100 dark:bg-slate-700 px-5 py-5 mt-6"
      >
        <h3 className="text-lg font-semibold text-slate-700 dark:text-white mb-3">
          Description
        </h3>

        <p className="text-sm text-slate-800 dark:text-white text-justify">
          {jobDetail?.description}
        </p>

        <h4 className="text-sm font-semibold text-slate-700 dark:text-white mt-4">
          Benefits
        </h4>

        <ul className="list-inside list-disc text-slate-800 dark:text-white text-sm font-semibold flex flex-col gap-1 ml-3">
          {jobDetail?.benefits
            ?.split(",")
            .map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
      </div>

      <div
        id="requirement"
        className="bg-slate-100 dark:bg-slate-700 px-5 py-5 mt-6"
      >
        <h3 className="text-lg font-semibold text-slate-700 dark:text-white mb-3">
          Requirement
        </h3>

        <ul className="list-inside list-disc text-slate-800 dark:text-white text-sm font-semibold flex flex-col gap-1 ml-3">
          {jobDetail?.requirements
            ?.split(",")
            .map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
        </ul>

        <div className="flex items-center flex-wrap gap-2 mb-3 mt-4">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-white">
            Skills:
          </h4>

          {jobDetail?.skills?.map((item: string, index: number) => (
            <p
              key={index}
              className={`text-[12px] py-[2px] px-2.5 rounded-xl bg-gray-300 text-stone-800`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div
        id="company-info"
        className="bg-slate-100 dark:bg-slate-700 px-5 py-5 mt-6"
      >
        <h3 className="text-lg font-semibold text-slate-700 dark:text-white mb-3">
          Company Info
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <p className="text-sm text-slate-800 dark:text-white">
            Contact Email:{" "}
            <span className="font-semibold">{jobDetail?.contact_email}</span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Contact Phone:{" "}
            <span className="font-semibold">{jobDetail?.contact_phone}</span>
          </p>
        </div>
      </div>

      <ChatSection jobId={jobDetail?.id} requiterId={jobDetail?.posted_by} />
    </div>
  );
};

export default JobDetailPage;
