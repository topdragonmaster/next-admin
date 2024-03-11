import { NextResponse } from 'next/server'
import ConnectDB from "../../../../DB/connectDB";
import Account from "../../../../models/Account";
import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required(),
  station: Joi.string().required(),
});

export async function POST(request: Request) {
  await ConnectDB();

  const { name, station, brokerage } = await request.json();
  const { error } = schema.validate({
    name,
    station
  });

  if (error)
    return NextResponse.json({
      success: false,
      message: error.details[0].message.replace(/['"]+/g, ""),
    });

  try {
    const ifExist = await Account.findOne({ name, station });

    if (ifExist) {
      return NextResponse
        .json({ success: false, message: "Account Already Exist" });
    } else {
      const createAccount = await Account.create({
        name, station, brokerage
      });
      return NextResponse
        .json({ success: true, message: "Account created successfully" });
    }
  } catch (error) {
    console.log("Error in register (server) => ", error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong Please Retry Later !",
    });
  }
};
