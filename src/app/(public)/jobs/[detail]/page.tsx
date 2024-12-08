"use client";

import { getJob } from "@/app/services";
import { useEffect, useState } from "react";
import JobDetailPage from "@/view/job/JobDetailPage";
import { useParams, useRouter } from "next/navigation";
import PreLoader from "@/components/preLoader/PreLoader";

const JobDetail = () => {
  const router = useRouter();
  const { detail } = useParams();

  const [job, setJob] = useState({});

  const [loading, setLoading] = useState<boolean>(true);

  const fetchJobPost = async () => {
    const response = detail && (await getJob(detail?.toString()));

    if (response.status === 200) {
      setJob(response.data);

      setLoading(false);
    } else {
      router.push("/404");

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobPost();
  }, [detail]);

  return loading ? <PreLoader /> : <JobDetailPage jobDetail={job} />;
};

export default JobDetail;
