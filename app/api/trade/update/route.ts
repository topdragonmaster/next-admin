import { NextResponse } from 'next/server'
import ConnectDB from "../../../../DB/connectDB";
import Trade from "../../../../models/Trade";

export async function POST(request: Request) {
  await ConnectDB();

  const { _id, stockCode, account, price, amount, type, expiration, date } = await request.json();

  try {
    const updatedTrade = await Trade.findByIdAndUpdate(_id, {
      stockCode, account, price, amount, type, expiration, date
    }, { new: true });

    if (!updatedTrade) {
      return NextResponse.json({ error: "Trade not found" });
    }
    return NextResponse.json({ success: true, Trade: updatedTrade, message: "Trade information updated successfully" });
  } catch (error) {
    console.log("Error in register (server) => ", error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong Please Retry Later !",
    });
  }
};
