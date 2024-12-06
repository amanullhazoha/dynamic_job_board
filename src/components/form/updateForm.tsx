"use client";

import Cookie from "js-cookie";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { login } from "@/app/services";
import { useRouter } from "next/navigation";
import InputField from "../inputs/InputField";
import { loginSchema } from "@/view/auth/schema";
import SubmitButton from "../buttons/SubmitButton";
import TextareaField from "../inputs/TextareaField";

const UpdateJobForm = () => {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    const response = await login({ data });

    if (response.status === 200) {
      toast.success(response?.message);

      Cookie.set("access_token", response.data.token, { expires: 7 });

      router.push("/");
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold text-slate-800 mb-4">
        Create Job Post
      </h3>

      <Formik
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
        initialValues={{
          title: "",
          company_name: "",
          description: "",
          location: "",
          employment_type: "",
          salary_range: "",
          requirements: "",
          benefits: "",
          company_logo: "",
          contact_email: "",
          contact_phone: "",
          job_category: "",
          experience_level: "",
          number_of_positions: null,
          skills: "",
          application_deadline: "",
          job_role: "",
        }}
      >
        {({ errors, touched, handleSubmit }) => (
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
              <SubmitButton title="Create" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateJobForm;
