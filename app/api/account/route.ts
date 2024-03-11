import { NextResponse } from 'next/server'
import ConnectDB from "../../../DB/connectDB";
import Account from "../../../models/Account";

export async function GET(request: Request) {
  await ConnectDB();
  try {
    const accounts = await Account.find({}).populate('station');
    return NextResponse.json({ success: true, accounts });
  } catch (error) {
    console.error('Error fetching stations:', error);
    return NextResponse.json({ success: false, error: 'Server Error' });
  }
};