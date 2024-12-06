export interface jobInfo {
  id: number;
  location: string;
  job_role: string;
  application_deadline: string;
  company_name: string;
  experience_level: string;
}

export interface jobDetails {
  title: string;
  description: string;
  company_name: string;
  location: string;
  employment_type: string;
  salary_range: string;
  requirements: string;
  benefits: string;
  status: string;
  company_logo: string;
  contact_email: string;
  contact_phone: string;
  remote_option: boolean;
  job_category: string;
  experience_level: string;
  number_of_positions: number;
  skills: [string];
  id: number;
  posted_by: number;
  posted_date: string;
  application_deadline: string;
  job_role: string;
}

export interface jobPost {
  title: string;
  description: string;
  company_name: string;
  location: string;
  employment_type: string;
  salary_range: string;
  requirements: string;
  benefits: string;
  company_logo: string;
  contact_email: string;
  contact_phone: string;
  job_category: string;
  experience_level: string;
  number_of_positions: number;
  skills: string;
  application_deadline: string;
  job_role: string;
}
