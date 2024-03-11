import { NextResponse } from 'next/server'
import connectDB from '../../../../DB/connectDB'
import User from "../../../../models/User";
import Joi from "joi";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export async function POST(request: Request) {
  await connectDB();

  const { email, password } = await request.json();
  const { error } = schema.validate({ email, password });

        
  if (error)
    return NextResponse.json({
      success: false,
      message: error.details[0].message.replace(/['"]+/g, ""),
    });

  try {
    const checkUser = await User.findOne({ email });

    if (!checkUser)
      return NextResponse
        .json({ success: false, message: "Account not Found" });

    const isMatch = await compare(password, checkUser.password);

    if (!isMatch)
      return NextResponse
        .json({ success: false, message: "Incorrect Password" });
        
    const token = jwt.sign(
      { id: checkUser._id, email: checkUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );


    const finalData = { token, user: checkUser };
    return NextResponse
      .json({ success: true, message: "Login Successfull", finalData });
  } catch (error) {
    console.log("Error in register (server) => ", error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong Please Retry Later !",
    });
  }
  return NextResponse.json({ error: 'aaaa' }, { status: 200 })
}