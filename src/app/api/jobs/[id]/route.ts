import jwt from "jsonwebtoken";
import { readJobs, writeJobs } from "@/utilities/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: any }) {
  try {
    const { id } = await params;

    const jobs = readJobs();

    const job = jobs.find((job: any) => job.id === Number(id));

    if (!job) {
      return NextResponse.json({
        status: 404,
        message: "Job not found by this ID",
      });
    }

    return NextResponse.json({
      status: 200,
      data: job,
      message: "Get job by ID successfully",
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}

export async function PUT(req: NextRequest, { params }: { params: any }) {
  try {
    const { id } = await params;
    const updatedJob = await req.json();

    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token)
      return NextResponse.json({ message: "Unauthorized", status: 401 });

    const tokenDecoded: any = jwt.verify(token, "this-is-your-jwt-token");

    const jobs = readJobs();

    const jobIndex = jobs.findIndex(
      (job: any) => job.id === Number(id) && job.posted_by === tokenDecoded.id
    );

    if (jobIndex === -1)
      return NextResponse.json({
        message: "Job not found or unauthorized",
        status: 404,
      });

    jobs[jobIndex] = { ...jobs[jobIndex], ...updatedJob };

    writeJobs(jobs);

    return NextResponse.json({
      status: 200,
      data: jobs[jobIndex],
      message: "Job update successfully",
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: any }) {
  try {
    const { id } = await params;

    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token)
      return NextResponse.json({ message: "Unauthorized", status: 401 });

    const tokenDecoded: any = jwt.verify(token, "this-is-your-jwt-token");

    const jobs = readJobs();

    const filteredJobs = jobs.filter(
      (job: any) =>
        !(job.id === Number(id) && job.posted_by === tokenDecoded.id)
    );

    if (jobs.length === filteredJobs.length) {
      return NextResponse.json({
        message: "Job not found or unauthorized",
        status: 404,
      });
    }

    writeJobs(filteredJobs);

    return NextResponse.json({
      data: id,
      status: 200,
      message: "Job delete successfully",
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}
