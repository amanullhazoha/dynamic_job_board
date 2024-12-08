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

export async function getJob(detail: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${detail}`,
    {
      cache: "force-cache",
    }
  );

  return await res.json();
}

export async function createJob({
  data,
  accessToken,
}: {
  data: jobPost;
  accessToken: string | undefined;
}): Promise<any> {
  const payload = {
    ...data,
    skills: data.skills.split(","),
  };

  const res = await fetch(`/api/jobs`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return await res.json();
}

export async function updateJob({
  id,
  data,
  accessToken,
}: {
  id: string;
  data: any;
  accessToken: string | undefined;
}): Promise<any> {
  const payload = {
    ...data,
    id: Number(data?.id),
    skills: data.skills.split(","),
  };

  const res = await fetch(`/api/jobs/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return await res.json();
}

export async function deleteJob(
  id: string,
  accessToken: string | undefined
): Promise<any> {
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return await res.json();
}

export async function userJob(accessToken: string | undefined): Promise<any> {
  const res = await fetch(`/api/users/jobs`, {
    cache: "force-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return await res.json();
}
