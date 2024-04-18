import User from "@/model/userModel";
import connect from "@/utils/dbConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// Ensure a database connection is established
connect();

export const POST = async (request: Request): Promise<NextResponse> => {
  try {
    // Parse the request JSON
    const { username, email, password } = await request.json();

    // Ensure all required fields are provided
    if (!username || !email || !password) {
      return new NextResponse(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // checking if user is already exists or not 
    const user = await User.findOne({ email })
    if (user) {
      return NextResponse.json({ message: "User already exist" }, { status: 401 });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    // Save the user to the database
    await newUser.save();

    // Return a success response
    return NextResponse.json({ message: "User created successfully" }, { status: 201 });

  } catch (error) {
    console.error("Error processing POST request:", error);

    // Return a response indicating a server error
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
};
