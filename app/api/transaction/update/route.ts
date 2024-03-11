import { NextResponse } from 'next/server'
import ConnectDB from "../../../../DB/connectDB";
import Station from '@/models/Station';
import Transaction from "../../../../models/Transaction";

export async function POST(request: Request) {
  await ConnectDB();

  const { _id, stockCode, station, amount, type, date } = await request.json();

  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(_id, {
      stockCode, station, amount, type, date
    }, { new: true });

    if (!updatedTransaction) {
      return NextResponse.json({ error: "Transaction not found" });
    }
    return NextResponse.json({ success: true, Transaction: updatedTransaction, message: "Transaction information updated successfully" });
  } catch (error) {
    console.log("Error in register (server) => ", error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong Please Retry Later !",
    });
  }
};
