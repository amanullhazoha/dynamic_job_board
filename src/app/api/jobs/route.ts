import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { readUsers, readJobs, writeJobs } from "@/utilities/db";
import { hashPassword, comparePassword } from "@/utilities/passwordHash";

interface UserType {
  email: string;
  password: string;
}

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
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({
        status: 400,
        message: "All fields are required",
      });
    }

    const users = readUsers();

    const existingUser = users.find((user: UserType) => user.email === email);

    if (!existingUser) {
      return NextResponse.json({
        status: 400,
        message: "You have no account",
      });
    }

    const hashedPassword = await hashPassword(password);

    const checkPassword = await comparePassword(password, hashedPassword);

    if (!checkPassword) {
      return NextResponse.json({
        status: 401,
        message: "Invalid login credentials",
      });
    }

    const token = jwt.sign(
      {
        id: existingUser.id,
        name: existingUser.name,
        role: existingUser.role,
        email: existingUser.email,
      },
      "this-is-your-jwt-token",
      {
        expiresIn: "7d",
      }
    );

    return NextResponse.json({
      status: 200,
      data: { access_token: token },
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
