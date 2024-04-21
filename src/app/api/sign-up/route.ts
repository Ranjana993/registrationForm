import User from "@/model/userModel";
import connectDb from "@/utils/dbConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// Ensure a database connection is established


export const POST = async (request: Request): Promise<NextResponse> => {
  await connectDb()
  try {
    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
      return new NextResponse(JSON.stringify({ error: "Missing required fields" }));
    }
    const user = await User.findOne({ email })
    if (user) {
      return NextResponse.json({ message: "User already exist" }, { status: 401 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });
    await newUser.save();
    return NextResponse.json({ message: "User created successfully" }, { status: 201 });

  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
};
