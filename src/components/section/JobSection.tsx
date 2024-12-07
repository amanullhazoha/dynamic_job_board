"use client";

import { toast } from "react-toastify";
import JobCard from "../cards/JobCard";
import Checkbox from "../inputs/Checkbox";
import { locations } from "@/data/static";
import { useEffect, useState } from "react";
import { getAllJobs } from "@/app/services";
import PreLoader from "../preLoader/PreLoader";
import FilterIcon from "@/assets/icons/FilterIcon";
import LocationInput from "../inputs/LocationInput";
import { jobCategories2, jobRoles } from "@/data/static";
import { useRouter, useSearchParams } from "next/navigation";
import { jobInfo } from "@/utilities/interface/job.interface";
import GlobalPagination from "../paginations/GlobalPagination";

interface metaData {
  totalPages: number;
  totalItems: number;
  currentPage: number;
}

const JobSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [location, setLocation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [metaData, setMetaData] = useState<metaData | null>(null);

  const [selectedCategories, setSelectedCategories] = useState<{
    [key: string]: boolean;
  }>(
    jobCategories2.reduce((acc, category) => {
      acc[category] = false;
      return acc;
    }, {} as { [key: string]: boolean })
  );
  const [selectedRoles, setSelectedRoles] = useState<{
    [key: string]: boolean;
  }>(
    jobRoles.reduce((acc, role) => {
      acc[role] = false;
      return acc;
    }, {} as { [key: string]: boolean })
  );

  const handleCategoriesCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;

    setSelectedCategories((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleRolesCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;

    setSelectedRoles((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleSearch = () => {
    const currentParams = new URLSearchParams(searchParams.toString());

    const categories = Object.keys(selectedCategories).filter(
      (key) => selectedCategories[key]
    );
    const roles = Object.keys(selectedRoles).filter(
      (key) => selectedRoles[key]
    );

    currentParams.delete("page");

    searchTerm
      ? currentParams.set("search", searchTerm?.toString())
      : currentParams.delete("search");
    location && currentParams.set("locations", location?.toString());

    categories?.length > 0
      ? currentParams.set("categories", categories?.toString())
      : currentParams.delete("categories");

    roles?.length > 0
      ? currentParams.set("roles", roles?.toString())
      : currentParams.delete("roles");

    setOpenFilter(false);

    router.push(`/jobs?${currentParams.toString()}`);
  };

  const handleClear = () => {
    router.push("/jobs");
  };

  const handlePageChange = (page: number) => {
    const currentParams = new URLSearchParams(searchParams.toString());

    currentParams.set("page", page?.toString());

    router.push(`/jobs?${currentParams.toString()}`);
  };

  const fetchJobPosts = async () => {
    setLoading(true);

    const queryString = searchParams?.toString();

    const response = await getAllJobs(queryString);

    if (response.status === 200) {
      setJobs(response.data);
      setMetaData(response?.metaData);

      setLoading(false);
    } else {
      toast.error(response?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobPosts();
  }, [searchParams]);

  useEffect(() => {
    const roles = searchParams.get("roles");
    const search = searchParams.get("search");
    const location = searchParams.get("locations");
    const categories = searchParams.get("categories");

    search ? setSearchTerm(search) : setSearchTerm("");

    if (categories) {
      const categoriesArray = categories?.split(",");

      const selected: any = selectedCategories;

      categoriesArray.forEach((category) => {
        selected[category] = true;
      });

      setSelectedCategories(selected);
    } else {
      setSelectedCategories(
        jobCategories2.reduce((acc, category) => {
          acc[category] = false;

          return acc;
        }, {} as { [key: string]: boolean })
      );
    }

    if (roles) {
      const rolesArray = roles?.split(",");

      const selected: any = selectedRoles;

      rolesArray.forEach((role) => {
        selected[role] = true;
      });

      setSelectedRoles(selected);
    } else {
      setSelectedRoles(
        jobRoles.reduce((acc, role) => {
          acc[role] = false;

          return acc;
        }, {} as { [key: string]: boolean })
      );
    }

    location && setLocation(location);
  }, [searchParams]);

  return (
    <div className="grid grid-cols-12 gap-6 py-3">
      <div className="col-span-12 md:col-span-3 h-fit shadow-section rounded-md px-4 py-4 dark:bg-slate-800">
        <div className="flex items-center justify-between md:mb-4">
          <p className="text-base font-semibold text-slate-800 dark:text-white">
            Filter By
          </p>

          <div className="flex items-center gap-4">
            <>
              <button
                type="button"
                onClick={handleClear}
                className="text-base font-medium text-slate-800 dark:text-white"
              >
                Clear
              </button>

              <button
                type="button"
                onClick={handleSearch}
                className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Apply
              </button>
            </>

            <button
              type="button"
              className="max-md:block hidden"
              onClick={() => setOpenFilter((prev) => !prev)}
            >
              <FilterIcon />
            </button>
          </div>
        </div>

        <div className={`${openFilter ? "block" : "max-md:hidden"}`}>
          <LocationInput
            locations={locations}
            location={location}
            setLocation={setLocation}
          />

          <div>
            <h3 className="text-base font-medium text-slate-800 dark:text-white mb-2">
              Job Categories
            </h3>

            <div className="grid grid-cols-1 gap-2">
              {jobCategories2.map((category) => (
                <Checkbox
                  key={category}
                  name={category}
                  label={category}
                  value={selectedCategories[category]}
                  onChange={handleCategoriesCheckboxChange}
                />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-base font-medium text-slate-800 dark:text-white mb-2">
              Job Role
            </h3>

            <div className="grid grid-cols-1 gap-2">
              {jobRoles.map((role) => (
                <Checkbox
                  key={role}
                  name={role}
                  label={role}
                  value={selectedRoles[role]}
                  onChange={handleRolesCheckboxChange}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-9 grid grid-cols-1 gap-6 z-0">
        <div className="bg-green-100 dark:bg-slate-800 px-4 py-5 rounded-md relative h-fit">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-slate-800 rounded-md pl-4 pr-[97px] py-1 outline-none"
          />

          <button
            type="button"
            onClick={handleSearch}
            className="absolute right-[16px] top-[20px] bg-green-500 h-[34px] px-4 text-white rounded-tr-md rounded-br-md"
          >
            Search
          </button>
        </div>

        {loading ? (
          <PreLoader />
        ) : jobs.length > 0 ? (
          jobs?.map((item: jobInfo, index: number) => (
            <JobCard key={index} job={item} />
          ))
        ) : (
          <p className="text-center font-medium text-xl text-slate-800 dark:text-white">
            No jobs found
          </p>
        )}

        {metaData?.totalItems
          ? metaData?.totalItems > 10 && (
              <GlobalPagination
                handlePageChange={handlePageChange}
                totalPages={metaData?.totalPages ? metaData.totalPages : 0}
                totalItems={metaData?.totalItems ? metaData?.totalItems : 0}
                currentPage={metaData?.currentPage ? metaData?.currentPage : 0}
              />
            )
          : ""}
      </div>
    </div>
  );
};

export default JobSection;
