import { NextResponse } from 'next/server'
import ConnectDB from "../../../DB/connectDB";
import Transaction from "../../../models/Transaction";

export async function GET(request: Request) {
  await ConnectDB();
  try {
    const transactions = await Transaction.find({}).populate('station');
    return NextResponse.json({ success: true, transactions });
  } catch (error) {
    console.error('Error fetching stations:', error);
    return NextResponse.json({ success: false, error: 'Server Error' });
  }
};