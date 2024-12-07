import JobPage from "@/view/job/JobPage";
import { Suspense } from "react";

const Jobs = () => {
  return (
    <Suspense>
      <JobPage />
    </Suspense>
  );
};

export default Jobs;
