import { NextResponse } from 'next/server'
import ConnectDB from "../../../../../DB/connectDB";
import StockCode from "../../../../../models/StockCode";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await ConnectDB();
  const id = params.id
  console.log(id)
  try {
    const deletedStockCode = await StockCode.findByIdAndDelete(id);

    if (!deletedStockCode) {
      return NextResponse.json({ message: 'StockCode not found' });
    }

    return NextResponse.json({ success: true, message: 'StockCode deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    NextResponse.json({ error: 'Internal Server Error' });
  }
};
