import { NextResponse } from 'next/server'
import ConnectDB from "../../../../../DB/connectDB";
import Transaction from "../../../../../models/Transaction";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await ConnectDB();
  const id = params.id
  console.log(id)
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(id);

    if (!deletedTransaction) {
      return NextResponse.json({ message: 'Transaction not found' });
    }

    return NextResponse.json({ success: true, message: 'Transaction deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    NextResponse.json({ error: 'Internal Server Error' });
  }
};
