import { NextResponse } from 'next/server'
import ConnectDB from "../../../DB/connectDB";
import StockCode from "../../../models/StockCode";
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  await ConnectDB();
  try {
    const stockCodes = await StockCode.find({});
    return NextResponse.json({ success: true, stockCodes });
  } catch (error) {
    console.error('Error fetching StockCodes:', error);
    return NextResponse.json({ success: false, error: 'Server Error' });
  }
};