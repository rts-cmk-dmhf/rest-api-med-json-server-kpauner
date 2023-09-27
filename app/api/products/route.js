import { NextResponse } from "next/server";

// dynamic will rerun the request everytime a new one is made - alt set the revaluate to 0
export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch("http://localhost:4000/products");

  const products = await res.json();

  return NextResponse.json(products, {
    status: 200,
  });
}
