import Cookies from "js-cookie";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

console.log(Cookies.get("access-token"));
console.log(process.env.NEXT_PUBLIC_API_URL);

export async function login({
  data,
}: {
  data: { password: string; email: string };
}) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
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
  const res = await fetch(`${API_URL}/api/auth/signup`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return await res.json();
}

export async function getAllJobs() {
  try {
    const res = await fetch("http://localhost:3000/api/jobs", {});

    const posts = await res.json();

    return posts?.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getJob(id: string): Promise<any> {
  try {
    const res = await fetch(`${API_URL}/api/jobs/${id}`, {
      cache: "force-cache",
    });

    const job = await res.json();

    return job.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createJob(id: string): Promise<any> {
  try {
    const res = await fetch(`${API_URL}/api/jobs/${id}`, {
      cache: "force-cache",
    });

    const job = await res.json();

    return job.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateJob(id: string): Promise<any> {
  try {
    const res = await fetch(`${API_URL}/api/jobs/${id}`, {
      cache: "force-cache",
    });

    const job = await res.json();

    return job.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteJob(id: string): Promise<any> {
  try {
    const res = await fetch(`${API_URL}/api/jobs/${id}`, {
      cache: "force-cache",
    });

    const job = await res.json();

    return job.data;
  } catch (error) {
    console.log(error);
  }
}

export async function userJob(): Promise<any> {
  const res = await fetch(`${API_URL}/api/user/jobs`, {
    cache: "force-cache",
  });

  const job = await res.json();

  return job.data;
}
