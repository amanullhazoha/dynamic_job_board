import { getJob } from "@/app/services";
import { notFound } from "next/navigation";
import JobDetailPage from "@/view/job/JobDetailPage";

const JobDetail = async ({ params }: { params: any }) => {
  const job: any = await getJob(params?.detail);

  if (!job?.data) {
    notFound();
  }

  return <JobDetailPage jobDetail={job?.data} />;
};

export default JobDetail;
