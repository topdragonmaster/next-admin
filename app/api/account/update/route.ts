import { NextResponse } from 'next/server'
import ConnectDB from "../../../../DB/connectDB";
import Account from "../../../../models/Account";
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  await ConnectDB();

  const { _id, name, station, brokerage } = await request.json();

  try {
    const updatedAccount = await Account.findByIdAndUpdate(_id, {
      name, station, brokerage
    }, { new: true });

    if (!updatedAccount) {
      return NextResponse.json({ error: "Account not found" });
    }
    return NextResponse.json({ success: true, Account: updatedAccount, message: "Account information updated successfully" });
  } catch (error) {
    console.log("Error in register (server) => ", error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong Please Retry Later !",
    });
  }
};
