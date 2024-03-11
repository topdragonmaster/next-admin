import { NextResponse } from 'next/server'
import ConnectDB from "../../../../DB/connectDB";
import Station from "../../../../models/Station";
import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required(),
});

export async function POST(request: Request) {
  await ConnectDB();

  const { name } = await request.json();
  const { error } = schema.validate({
    name
  });

  if (error)
    return NextResponse.json({
      success: false,
      message: error.details[0].message.replace(/['"]+/g, ""),
    });

  try {
    const ifExist = await Station.findOne({ name });

    if (ifExist) {
      return NextResponse
        .json({ success: false, message: "Station Already Exist" });
    } else {
      const createStation = await Station.create({
        name
      });
      return NextResponse
        .json({ success: true, message: "Station created successfully" });
    }
  } catch (error) {
    console.log("Error in register (server) => ", error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong Please Retry Later !",
    });
  }
};
