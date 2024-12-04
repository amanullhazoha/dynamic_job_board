import JobCard from "@/components/cards/JobCard";

const ProfilePage = () => {
  return (
    <div>
      <div className="flex justify-end mb-6">
        <button
          type="button"
          className="px-5 text-white bg-green-500 py-1.5 rounded-md"
        >
          Post Job
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default ProfilePage;
