"use client";

import Cookies from "js-cookie";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import InputField from "../inputs/InputField";
import { updateJob, getJob } from "@/app/services";
import SubmitButton from "../buttons/SubmitButton";
import TextareaField from "../inputs/TextareaField";
import { createJobSchema } from "@/view/job/schema";
import { jobPost } from "@/utilities/interface/job.interface";
import { useEffect, useState } from "react";

const initialValue: jobPost = {
  id: "",
  title: "",
  skills: "",
  job_role: "",
  benefits: "",
  location: "",
  description: "",
  salary_range: "",
  requirements: "",
  company_name: "",
  company_logo: "",
  job_category: "",
  contact_email: "",
  contact_phone: "",
  employment_type: "",
  experience_level: "",
  number_of_positions: 0,
  application_deadline: "",
};

const UpdateJobForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const accessToken: string | undefined = Cookies.get("access_token");

  const [jobDetail, setJobDetail] = useState<jobPost>(initialValue);

  const handleSubmit = async (data: jobPost) => {
    const response = await updateJob({
      id: data?.id ? data?.id : "",
      data,
      accessToken,
    });

    if (response.status === 200) {
      toast.success(response?.message);

      router.push("/jobs");
    } else {
      toast.error(response?.message);
    }
  };

  const fetchJobByJobId = async (jobId: string) => {
    const response = await getJob(jobId);

    if (response.status === 200) {
      const data = response.data;

      setJobDetail({
        id: data?.id?.toString(),
        title: data?.title,
        skills: data?.skills?.toString(),
        job_role: data?.job_role,
        benefits: data?.benefits,
        location: data?.location,
        description: data?.description,
        salary_range: data?.salary_range,
        requirements: data?.requirements,
        company_name: data?.company_name,
        company_logo: data?.company_logo,
        job_category: data?.job_category,
        contact_email: data?.contact_email,
        contact_phone: data?.contact_phone,
        employment_type: data?.employment_type,
        experience_level: data?.experience_level,
        number_of_positions: data?.number_of_positions,
        application_deadline: data?.application_deadline,
      });
    } else {
      toast.error(response?.message);

      router.push("/jobs");
    }
  };

  useEffect(() => {
    const id = searchParams.get("id");

    if (id) {
      fetchJobByJobId(id);
    }
  }, [searchParams]);

  console.log(jobDetail);

  return (
    <div className="w-full md:w-[80%] mx-auto">
      <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">
        Update Job
      </h3>

      <Formik
        onSubmit={handleSubmit}
        initialValues={jobDetail}
        enableReinitialize={true}
        validationSchema={createJobSchema}
      >
        {({ errors, touched, handleSubmit, setFieldValue, values }) => (
          <Form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-slate-800 px-5 py-5 shadow-section rounded-md"
          >
            <div className="col-span-1 md:col-span-2">
              <InputField
                type="text"
                name="title"
                label="Job title"
                errors={errors}
                required={true}
                touched={touched}
                placeholder="Enter the job title"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <TextareaField
                errors={errors}
                required={true}
                name="description"
                touched={touched}
                label="Job Description"
                value={values?.description}
                setFieldValue={setFieldValue}
                placeholder="Enter the job description"
              />
            </div>

            <InputField
              type="text"
              errors={errors}
              required={true}
              touched={touched}
              name="job_role"
              label="Job Role or Position"
              placeholder="Enter job role or position"
            />

            <InputField
              type="text"
              label="Job category"
              name="job_category"
              errors={errors}
              required={true}
              touched={touched}
              placeholder="Enter job category"
            />

            <InputField
              type="text"
              errors={errors}
              required={true}
              touched={touched}
              name="company_name"
              label="Company Name"
              placeholder="Enter company name"
            />

            <InputField
              type="text"
              name="location"
              errors={errors}
              required={true}
              touched={touched}
              label="Job Location"
              placeholder="Enter job location"
            />

            <InputField
              type="text"
              errors={errors}
              required={true}
              touched={touched}
              name="employment_type"
              label="Employment Type"
              placeholder="Enter employment type"
            />

            <InputField
              type="text"
              errors={errors}
              required={true}
              touched={touched}
              name="salary_range"
              label="Salary Range"
              placeholder="Enter Salary Range"
            />

            <div className="col-span-1 md:col-span-2">
              <TextareaField
                errors={errors}
                required={true}
                touched={touched}
                name="skills"
                label="Require Skills"
                value={values?.skills}
                setFieldValue={setFieldValue}
                placeholder="Enter required skills for job (React, Next, etc.)"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <TextareaField
                errors={errors}
                required={true}
                name="requirements"
                touched={touched}
                label="Job Requirements"
                value={values?.requirements}
                setFieldValue={setFieldValue}
                placeholder="Enter the job requirements"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <TextareaField
                errors={errors}
                required={true}
                name="benefits"
                touched={touched}
                label="Benefits"
                value={values?.benefits}
                setFieldValue={setFieldValue}
                placeholder="Enter the benefits"
              />
            </div>

            <InputField
              type="text"
              errors={errors}
              required={true}
              disabled={true}
              touched={touched}
              name="company_logo"
              label="Company Logo"
              placeholder="Enter company logo"
            />

            <InputField
              type="email"
              errors={errors}
              required={true}
              touched={touched}
              name="contact_email"
              label="Contact Email"
              placeholder="Enter contact email"
            />

            <InputField
              type="text"
              label="Contact Number"
              name="contact_phone"
              errors={errors}
              required={true}
              touched={touched}
              placeholder="Enter contact number"
            />

            <InputField
              type="text"
              errors={errors}
              required={true}
              touched={touched}
              name="experience_level"
              label="Experience Level"
              placeholder="Enter expected experience level"
            />

            <InputField
              type="number"
              errors={errors}
              required={true}
              touched={touched}
              label="Vacant Position"
              name="number_of_positions"
              placeholder="Enter number of positions"
            />

            <InputField
              type="date"
              errors={errors}
              required={true}
              touched={touched}
              name="application_deadline"
              label="Application Deadline"
              placeholder="Enter deadline date"
            />

            <div className="col-span-1 md:col-span-2">
              <SubmitButton title="Update" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateJobForm;
