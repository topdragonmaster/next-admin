import { NextResponse } from 'next/server'
import ConnectDB from "../../../../../DB/connectDB";
import Station from "../../../../../models/Station";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await ConnectDB();
  const id = params.id
  console.log(id)
  try {
    const deletedStation = await Station.findByIdAndDelete(id);

    if (!deletedStation) {
      return NextResponse.json({ message: 'Station not found' });
    }

    return NextResponse.json({ success: true, message: 'Station deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    NextResponse.json({ error: 'Internal Server Error' });
  }
};
