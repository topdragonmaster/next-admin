import { NextResponse } from 'next/server'
import ConnectDB from "../../../../DB/connectDB";
import User from "../../../../models/User";
import Joi from "joi";
import { hash, compare } from "bcryptjs";

export const dynamic = 'force-dynamic';

const schema = Joi.object({
  _id: Joi.string().required(),
});

export async function POST(request: Request) {
  await ConnectDB();

  const { _id, email, username, oldPassword, newPassword } = await request.json();
  const { error } = schema.validate({
    _id,
  });

  if (error)
    return NextResponse.json({
      success: false,
      message: error.details[0].message.replace(/['"]+/g, ""),
    });

  try {
    const checkUser = await User.findOne({ _id });

    if (!checkUser)
      return NextResponse
        .json({ success: false, message: "Account not Found" });

    if (newPassword || oldPassword) {
      const isMatch = await compare(oldPassword, checkUser.password);
      if (!isMatch)
        return NextResponse
          .json({ success: false, message: "Incorrect old Password" });
    }

    const hashedPassword = await hash(newPassword, 12)
    const body = newPassword ?
      {
        email, username,
        password: hashedPassword,
      } : { email, username }

    const updatedUser = await User.findByIdAndUpdate(_id, {
      ...body
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
