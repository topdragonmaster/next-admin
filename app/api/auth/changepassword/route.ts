import { NextResponse } from 'next/server'
import ConnectDB from "../../../../DB/connectDB";
import User from "../../../../models/User";
import Joi from "joi";
import { hash } from "bcryptjs";

const schema = Joi.object({
  id: Joi.string().required(),
  password: Joi.string().min(5).required(),
});

export async function POST(request: Request) {
  await ConnectDB();

  const { id, password } = await request.json();
  const { error } = schema.validate({
    id,
    password,
  });

  if (error)
    return NextResponse.json({
      success: false,
      message: error.details[0].message.replace(/['"]+/g, ""),
    });

  try {
    const hashedPassword = await hash(password, 12);
    const updatedUser = await User.findByIdAndUpdate(id, {
      password: hashedPassword,
    }, { new: true });

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" });
    }
    return NextResponse.json({ success: true, user: updatedUser, message: "User information updated successfully" });
  } catch (error) {
    console.log("Error in register (server) => ", error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong Please Retry Later !",
    });
  }
};
