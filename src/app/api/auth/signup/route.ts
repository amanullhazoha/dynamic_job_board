import { readUsers, writeUsers } from "@/utilities/db";
import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "@/utilities/passwordHash";

interface UserType {
  email: string;
  fullName: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, password } = await req.json();

    if (!fullName || !email || !password) {
      return NextResponse.json({
        status: 400,
        message: "All fields are required",
      });
    }

    const users = readUsers();

    const existingUser = users.find((user: UserType) => user.email === email);

    if (existingUser) {
      return NextResponse.json({
        status: 400,
        message: "Email already exists",
      });
    }

    const hashedPassword = await hashPassword(password);

    users.push({
      email,
      fullName,
      role: "user",
      id: Date.now(),
      password: hashedPassword,
    });

    writeUsers({ data: users });

    return NextResponse.json({
      status: 201,
      message: "User signup successfully",
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}
