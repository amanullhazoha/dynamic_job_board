import jwt from "jsonwebtoken";
import { readUsers } from "@/utilities/db";
import { NextRequest, NextResponse } from "next/server";
import { hashPassword, comparePassword } from "@/utilities/passwordHash";

interface UserType {
  email: string;
  password: string;
}

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_TOKEN || "default_secret_key";

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
        role: existingUser.role,
        email: existingUser.email,
        fullName: existingUser.fullName,
      },
      SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );

    return NextResponse.json({
      status: 200,
      data: { token },
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
