"use client";

import React from "react";
import Slider from "react-slick";
import JobCard from "@/components/cards/JobCard";

const featureJob = [
  {
    title: "Data Scientist 2",
    description:
      "Responsible for developing, testing, and maintaining software applications.",
    company_name: "TechCorp Inc.",
    location: "Austin, TX",
    employment_type: "Internship",
    salary_range: "$103k - $150k per year",
    requirements:
      "3+ years of experience in software development. Proficiency in Python and JavaScript.",
    benefits:
      "Health insurance, 401(k), remote work options, flexible schedule.",
    status: "Open",
    company_logo: "https://example.com/logo.png",
    contact_email: "jobs@techcorp.com",
    contact_phone: "+1-800-555-1234",
    remote_option: true,
    job_category: "Education",
    experience_level: "Mid-level",
    number_of_positions: 3,
    skills: ["Python", "JavaScript", "Django", "React"],
    id: 7975333354137,
    posted_by: 1733341232208,
    posted_date: "2024-11-17T20:16:22.684529",
    application_deadline: "2025-01-29",
    job_role: "Project Manager",
  },
  {
    title: "Frontend Developer 3",
    description:
      "Responsible for developing, testing, and maintaining software applications.",
    company_name: "TechCorp Inc.",
    location: "San Francisco, CA",
    employment_type: "Full-time",
    salary_range: "$83k - $196k per year",
    requirements:
      "3+ years of experience in software development. Proficiency in Python and JavaScript.",
    benefits:
      "Health insurance, 401(k), remote work options, flexible schedule.",
    status: "Open",
    company_logo: "https://example.com/logo.png",
    contact_email: "jobs@techcorp.com",
    contact_phone: "+1-800-555-1234",
    remote_option: false,
    job_category: "Finance",
    experience_level: "Mid-level",
    number_of_positions: 3,
    skills: ["Python", "JavaScript", "Django", "React"],
    id: 5582220426746,
    posted_by: 1733341267812,
    posted_date: "2024-12-03T20:16:22.684575",
    application_deadline: "2024-12-20",
    job_role: "QA Engineer",
  },
  {
    title: "Mobile App Developer 4",
    description:
      "Responsible for developing, testing, and maintaining software applications.",
    company_name: "TechCorp Inc.",
    location: "Chicago, IL",
    employment_type: "Part-time",
    salary_range: "$111k - $150k per year",
    requirements:
      "3+ years of experience in software development. Proficiency in Python and JavaScript.",
    benefits:
      "Health insurance, 401(k), remote work options, flexible schedule.",
    status: "Open",
    company_logo: "https://example.com/logo.png",
    contact_email: "jobs@techcorp.com",
    contact_phone: "+1-800-555-1234",
    remote_option: true,
    job_category: "IT & Software",
    experience_level: "Mid-level",
    number_of_positions: 3,
    skills: ["Python", "JavaScript", "Django", "React"],
    id: 4720318808221,
    posted_by: 1733341232208,
    posted_date: "2024-12-01T20:16:22.684609",
    application_deadline: "2024-12-18",
    job_role: "Backend Developer",
  },
  {
    title: "Backend Developer 5",
    description:
      "Responsible for developing, testing, and maintaining software applications.",
    company_name: "TechCorp Inc.",
    location: "Austin, TX",
    employment_type: "Part-time",
    salary_range: "$69k - $130k per year",
    requirements:
      "3+ years of experience in software development. Proficiency in Python and JavaScript.",
    benefits:
      "Health insurance, 401(k), remote work options, flexible schedule.",
    status: "Open",
    company_logo: "https://example.com/logo.png",
    contact_email: "jobs@techcorp.com",
    contact_phone: "+1-800-555-1234",
    remote_option: false,
    job_category: "Finance",
    experience_level: "Mid-level",
    number_of_positions: 3,
    skills: ["Python", "JavaScript", "Django", "React"],
    id: 1537152946073,
    posted_by: 1733341240577,
    posted_date: "2024-11-10T20:16:22.684640",
    application_deadline: "2024-12-10",
    job_role: "QA Engineer",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

const HeroSection = () => {
  return (
    <section className="bg-white shadow-section dark:bg-slate-700 rounded-md md:px-4 py-10 my-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Find Your Dream Job
          </h1>

          <p className="text-base md:text-lg text-slate-600 dark:text-white mt-2">
            Search among thousands of jobs and companies.
          </p>
        </div>

        <div className="w-full md:px-3 mb-6">
          <div className="grid grid-cols-12 gap-3 items-end">
            <div className="w-full col-span-12 md:col-span-10">
              <label className="text-slate-800 dark:text-white text-lg font-semibold">
                Find your job
              </label>

              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full border rounded-md px-4 py-2 outline-none"
              />
            </div>

            {/* <div className="w-full col-span-12 md:col-span-5">
              <label className="text-slate-800 dark:text-white text-lg font-semibold">
                Job Location
              </label>

              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full border rounded-md px-4 py-2 outline-none"
              />
            </div> */}

            <div className="col-span-12 md:col-span-2 w-full h-[42px]">
              <button className="bg-green-500 text-white font-medium px-6 h-[42px] rounded-md hover:bg-slate-800 hover:text-white w-full">
                Search
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-white pl-2.5">
            Featured Jobs
          </h2>

          <Slider {...settings}>
            {featureJob.map((job, index) => (
              <div className="px-3 py-3" key={index}>
                <JobCard job={job} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
