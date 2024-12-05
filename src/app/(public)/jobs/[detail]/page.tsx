import { getJob } from "@/app/services";
import { jobDetails } from "@/utilities/interface/job.interface";
import JobDetailPage from "@/view/job/JobDetailPage";

const JobDetail = async ({ params }: { params: any }) => {
  const job: any = await getJob(params?.detail);

  return <JobDetailPage jobDetail={job} />;
};

export default JobDetail;
