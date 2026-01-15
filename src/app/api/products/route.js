import { dbConnect } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const collection = await dbConnect("products");
    const products = await collection.find({}).toArray(); // সব product
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const collection = await dbConnect("products");
    const result = await collection.insertOne({
      ...body,
      createdAt: new Date(),
    });
    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
