import { NextResponse } from 'next/server'
import ConnectDB from "../../../../DB/connectDB";
import Trade from "../../../../models/Trade";
import Joi from "joi";

const schema = Joi.object({
  stockCode: Joi.string().required(),
  account: Joi.string().required(),
  price: Joi.number().required(),
  amount: Joi.number().required(),
  type: Joi.string().required(),
  expiration: Joi.number().required(),
  date: Joi.string().required(),
});

export async function POST(request: Request) {
  await ConnectDB();

  const { stockCode, account, price, amount, type, expiration, date } = await request.json();
  const { error } = schema.validate({
    stockCode, account, price, amount, type, expiration, date
  });

  if (error)
    return NextResponse.json({
      success: false,
      message: error.details[0].message.replace(/['"]+/g, ""),
    });

  try {
    const createTrade = await Trade.create({
      stockCode, account, price, amount, type, expiration, date: new Date(date)
    });
    return NextResponse
      .json({ success: true, message: "Trade created successfully" });
  } catch (error) {
    console.log("Error in register (server) => ", error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong Please Retry Later !",
    });
  }
};
