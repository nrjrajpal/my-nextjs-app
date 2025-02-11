// app/api/data/route.ts
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  // Build the response data
  const data = { message: "Hello from Next.js API (Pages Function)!", request };
  // Return a valid JSON response
  return NextResponse.json(data);
}