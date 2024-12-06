import * as Yup from "yup";

//   number_of_positions: number;

export const createJobSchema = () =>
  Yup.object().shape({
    title: Yup.string()
      .min(50, "Job title must be at least 50 characters")
      .max(200, "Job title must not exceed 200 characters")
      .required("Job title is required"),
    description: Yup.string()
      .min(100, "Description must be at least 100 characters")
      .max(5000, "Description must not exceed 1000 characters")
      .required("Description is required"),
    company_name: Yup.string().required("Company name is required"),
    location: Yup.string().required("Location name is required"),
    employment_type: Yup.string().required("Employment type is required"),
    salary_range: Yup.string().required("Salary range is required"),
    requirements: Yup.string().required("Requirements is required"),
    benefits: Yup.string().required("Benefits is required"),
    company_logo: Yup.string().required("Company logo is required"),
    contact_email: Yup.string()
      .email("This is not a valid email")
      .required("Contact email is required"),
    contact_phone: Yup.string().required("Phone number is required"),
    job_category: Yup.string().required("Job Category is required"),
    experience_level: Yup.string().required("Experience level is required"),
    skills: Yup.string().required("Skills is required"),
    application_deadline: Yup.string().required(
      "Application deadline is required"
    ),
    job_role: Yup.string().required("Job role is required"),
    number_of_positions: Yup.number().nullable(),
  });
