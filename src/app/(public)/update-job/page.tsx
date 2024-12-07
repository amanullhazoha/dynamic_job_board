import UpdateJobForm from "@/components/form/updateForm";
import { Suspense } from "react";

const CreateJob = () => {
  return (
    <Suspense>
      <UpdateJobForm />
    </Suspense>
  );
};

export default CreateJob;
