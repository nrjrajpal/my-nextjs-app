// app/api/data/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Build the response data
  console.log(request);
  const data = { message: "Hello from Next.js API (Pages Function)!" };
  // Return a valid JSON response
  return NextResponse.json(data);
}

// Optionally, handle other methods if needed
export async function POST(request: Request) {
  console.log(request);
  return new Response("Method Not Allowed", { status: 405 });
}
