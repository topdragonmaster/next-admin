import { NextResponse } from 'next/server'
import ConnectDB from "../../../DB/connectDB";
import Trade from "../../../models/Trade";
import Account from '@/models/Account';

export async function GET(request: Request) {
  await ConnectDB();
  try {
    const trades = await Trade.find({})
      .populate({
        path: 'account',
        populate: { path: 'station', select: 'name' }
      });
    return NextResponse.json({ success: true, trades });
  } catch (error) {
    console.error('Error fetching stations:', error);
    return NextResponse.json({ success: false, error: 'Server Error' });
  }
};