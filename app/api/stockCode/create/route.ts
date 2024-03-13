import { NextResponse } from 'next/server'
import ConnectDB from "../../../../DB/connectDB";
import StockCode from "../../../../models/StockCode";
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
    const ifExist = await StockCode.findOne({ name });

    if (ifExist) {
      return NextResponse
        .json({ success: false, message: "StockCode Already Exist" });
    } else {
      const createStockCode = await StockCode.create({
        name
      });
      return NextResponse
        .json({ success: true, message: "StockCode created successfully" });
    }
  } catch (error) {
    console.log("Error in register (server) => ", error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong Please Retry Later !",
    });
  }
};
