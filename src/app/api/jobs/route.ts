import jwt from "jsonwebtoken";
import { readJobs, writeJobs } from "@/utilities/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search");
    const roles = searchParams.get("roles")?.split(",") || [];
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const locations = searchParams.get("locations")?.split(",") || [];
    const categories = searchParams.get("categories")?.split(",") || [];

    let jobs = readJobs();

    if (categories.length > 0) {
      jobs = jobs.filter((job: any) => categories.includes(job.job_category));
    }

    if (locations.length > 0) {
      jobs = jobs.filter((job: any) => locations.includes(job.location));
    }

    if (roles.length > 0) {
      jobs = jobs.filter((job: any) => roles.includes(job.job_role));
    }

    if (search) {
      jobs = jobs.filter((job: any) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    const totalItems = jobs.length;
    const totalPages = Math.ceil(totalItems / limit);
    const currentPage = Math.max(1, Math.min(page, totalPages));

    const start = (currentPage - 1) * limit;

    const paginatedJobs = jobs.slice(start, start + limit);

    return NextResponse.json({
      status: 200,
      data: paginatedJobs,
      metaData: {
        totalItems,
        totalPages,
        currentPage,
      },
      message: "User login successfully",
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const tokenDecoded: any = jwt.verify(token, "this-is-your-jwt-token");

    const newJob = await req.json();

    const jobs = readJobs();

    const newJobData = {
      ...newJob,
      id: Date.now(),
      posted_by: tokenDecoded.id,
      posted_date: new Date().toISOString(),
    };

    jobs.push(newJobData);

    writeJobs(jobs);

    return NextResponse.json({
      status: 201,
      data: newJobData,
      message: "Job create successfully",
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}
