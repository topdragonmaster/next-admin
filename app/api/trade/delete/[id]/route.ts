import { NextResponse } from 'next/server'
import ConnectDB from "../../../../../DB/connectDB";
import Trade from "../../../../../models/Trade";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await ConnectDB();
  const id = params.id
  console.log(id)
  try {
    const deletedTrade = await Trade.findByIdAndDelete(id);

    if (!deletedTrade) {
      return NextResponse.json({ message: 'Trade not found' });
    }

    return NextResponse.json({ success: true, message: 'Trade deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    NextResponse.json({ error: 'Internal Server Error' });
  }
};
