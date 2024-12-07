import jwt from "jsonwebtoken";
import { readJobs } from "@/utilities/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token)
      return NextResponse.json({ message: "Unauthorized", status: 401 });

    const tokenDecoded: any = jwt.verify(token, "this-is-your-jwt-token");

    const jobs = readJobs();

    const filteredJobs = jobs.filter(
      (job: any) => job.posted_by === tokenDecoded.id
    );

    return NextResponse.json({
      status: 200,
      data: filteredJobs,
      message: "Get user all job successfully",
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}
