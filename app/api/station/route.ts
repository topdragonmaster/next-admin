import { NextResponse } from 'next/server'
import ConnectDB from "../../../DB/connectDB";
import Station from "../../../models/Station";
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  await ConnectDB();
  try {
    const stations = await Station.find({});
    return NextResponse.json({ success: true, stations });
  } catch (error) {
    console.error('Error fetching stations:', error);
    return NextResponse.json({ success: false, error: 'Server Error' });
  }
};