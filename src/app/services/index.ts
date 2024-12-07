import Cookies from "js-cookie";
import { jobPost } from "@/utilities/interface/job.interface";

export async function login({
  data,
}: {
  data: { password: string; email: string };
}) {
  const res = await fetch(`/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return await res.json();
}

export async function signup({
  data,
}: {
  data: { fullName: string; email: string; password: string };
}) {
  const res = await fetch(`/api/auth/signup`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return await res.json();
}

export async function getAllJobs(queryString: string) {
  const res = await fetch(
    queryString ? `/api/jobs?${queryString}` : "/api/jobs",
    { cache: "force-cache" }
  );

  return await res.json();
}

export async function getJob(detail: string): Promise<any> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${detail}`,
    {
      cache: "force-cache",
    }
  );

  return await res.json();
}

export async function createJob({ data }: { data: jobPost }): Promise<any> {
  const res = await fetch(`/api/jobs`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access-token")}`,
    },
  });

  return await res.json();
}

export async function updateJob({
  id,
  data,
}: {
  id: string;
  data: any;
}): Promise<any> {
  const res = await fetch(`/api/jobs/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access-token")}`,
    },
  });

  return await res.json();
}

export async function deleteJob(id: string): Promise<any> {
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access-token")}`,
    },
  });

  return await res.json();
}

export async function userJob(): Promise<any> {
  const res = await fetch(`/api/user/jobs`, {
    cache: "force-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access-token")}`,
    },
  });

  return await res.json();
}
