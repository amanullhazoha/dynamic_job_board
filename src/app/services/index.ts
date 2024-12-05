export async function login({
  data,
}: {
  data: { password: string; email: string };
}) {
  const res = await fetch("http://localhost:3000/api/auth/login", {
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
  const res = await fetch("http://localhost:3000/api/auth/signup", {
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
    const res = await fetch(`http://localhost:3000/api/jobs/${id}`, {
      cache: "force-cache",
    });

    const job = await res.json();

    return job.data;
  } catch (error) {
    console.log(error);
  }
}
