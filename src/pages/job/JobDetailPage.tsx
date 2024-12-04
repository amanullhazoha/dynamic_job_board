import JobDetailTab from "@/components/tabs/JobDetailTab";

const JobDetailPage = () => {
  return (
    <div className="w-full md:w-[80%] lg:w-[75%] mx-auto dark:bg-slate-800  shadow-section px-2.5 md:px-5 py-3 md:py-6 mt-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-600 dark:text-white">
          Taslima Marriage Association
        </h2>

        <h1 className="text-3xl font-semibold text-slate-800 dark:text-white mt-3 leading-none">
          Sales Executive Officer
        </h1>

        <p className="text-base font-semibold text-slate-500 dark:text-white mt-3">
          Application Deadline: 7 Dec 2024
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
            Vacancy: <span className="font-semibold">10</span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Vacancy: <span className="font-semibold">10</span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Vacancy: <span className="font-semibold">10</span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Vacancy: <span className="font-semibold">10</span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Vacancy: <span className="font-semibold">10</span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Vacancy: <span className="font-semibold">10</span>
          </p>
        </div>
      </div>

      <div className="bg-slate-100 dark:bg-slate-700 px-5 py-5 mt-6">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-white mb-3">
          Description
        </h3>

        <p className="text-sm text-slate-800 dark:text-white text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id qui
          dolorem porro animi corrupti! Quae dolores exercitationem obcaecati
          aspernatur placeat magnam, hic saepe ipsum, consectetur, recusandae
          officiis architecto soluta a? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Id qui dolorem porro animi corrupti! Quae dolores
          exercitationem obcaecati aspernatur placeat magnam, hic saepe ipsum,
          consectetur, recusandae officiis architecto soluta a? Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Id qui dolorem porro
          animi corrupti! Quae dolores exercitationem obcaecati aspernatur
          placeat magnam, hic saepe ipsum, consectetur, recusandae officiis
          architecto soluta a? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Id qui dolorem porro animi corrupti! Quae dolores
          exercitationem obcaecati aspernatur placeat magnam, hic saepe ipsum,
          consectetur, recusandae officiis architecto soluta a?
        </p>
      </div>

      <div className="bg-slate-100 dark:bg-slate-700 px-5 py-5 mt-6">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-white mb-3">
          Requirement
        </h3>

        <ul className="list-inside list-disc text-slate-800 dark:text-white text-sm font-semibold flex flex-col gap-1 ml-3">
          <li>Higher Secondary</li>
          <li>Higher Secondary</li>
          <li>Higher Secondary</li>
          <li>Higher Secondary</li>
          <li>Higher Secondary</li>
          <li>Higher Secondary</li>
          <li>Higher Secondary</li>
          <li>Higher Secondary</li>
        </ul>
      </div>

      <div className="bg-slate-100 dark:bg-slate-700 px-5 py-5 mt-6">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-white mb-3">
          Company Info
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <p className="text-sm text-slate-800 dark:text-white">
            Vacancy: <span className="font-semibold">10</span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Vacancy: <span className="font-semibold">10</span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Vacancy: <span className="font-semibold">10</span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Vacancy: <span className="font-semibold">10</span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Vacancy: <span className="font-semibold">10</span>
          </p>

          <p className="text-sm text-slate-800 dark:text-white">
            Vacancy: <span className="font-semibold">10</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
