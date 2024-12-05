import fs from "fs";
import path from "path";

const jobTablePath = path.join(process.cwd(), "src/data/jobs.json");
const userTablePath = path.join(process.cwd(), "src/data/users.json");

export const readJobs = () => {
  const jobs = JSON.parse(fs.readFileSync(jobTablePath, "utf-8"));

  return jobs;
};

export const writeJobs = ({ data }: { data: any }) => {
  fs.writeFileSync(jobTablePath, JSON.stringify(data, null, 2));
};

export const readUsers = () => {
  const users = JSON.parse(fs.readFileSync(userTablePath, "utf-8"));

  return users;
};

export const writeUsers = ({ data }: { data: any }) => {
  fs.writeFileSync(userTablePath, JSON.stringify(data, null, 2));
};
