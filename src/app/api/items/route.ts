import { NextRequest, NextResponse } from "next/server";
import * as Database from "@/infrastructure/database";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const searchQuery = searchParams.get("q") || "";

  const results = Database.getProducts(searchQuery);

  return NextResponse.json(results, { status: 200 });
};
