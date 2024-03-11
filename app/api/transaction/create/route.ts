import { NextResponse } from 'next/server'
import ConnectDB from "../../../../DB/connectDB";
import Transaction from "../../../../models/Transaction";
import Joi from "joi";

const schema = Joi.object({
  stockCode: Joi.string().required(),
  station: Joi.string().required(),
  amount: Joi.number().required(),
  type: Joi.string().required(),
  date: Joi.string().required(),
});

export async function POST(request: Request) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  await ConnectDB();

  const { stockCode, station, amount, type, date } = await request.json();
  const { error } = schema.validate({
    stockCode, station, amount, type, date
  });

  if (error)
    return NextResponse.json({
      success: false,
      message: error.details[0].message.replace(/['"]+/g, ""),
    });

  try {
    const createTransaction = await Transaction.create({
      stockCode, station, amount, type, date: new Date(date)
    });
    return NextResponse
      .json({ success: true, createTransaction, message: "Transaction created successfully" }, { headers });
  } catch (error) {
    console.log("Error in register (server) => ", error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong Please Retry Later !",
    });
  }
};
