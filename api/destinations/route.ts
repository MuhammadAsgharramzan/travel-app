import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { name: "Paris", country: "France" },
    { name: "Tokyo", country: "Japan" },
    { name: "Maldives", country: "Indian Ocean" },
  ]);
}
