import { NextResponse } from 'next/server'
import ConnectDB from "../../../../../DB/connectDB";
import Account from "../../../../../models/Account";
export const dynamic = 'force-dynamic';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await ConnectDB();
  const id = params.id
  console.log(id)
  try {
    const deletedAccount = await Account.findByIdAndDelete(id);

    if (!deletedAccount) {
      return NextResponse.json({ message: 'Account not found' });
    }

    return NextResponse.json({ success: true, message: 'Account deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    NextResponse.json({ error: 'Internal Server Error' });
  }
};
