import { NextRequest, NextResponse } from "next/server";
import * as Database from "@/infrastructure/database";

export const GET = async (
  _request: NextRequest,
  { params }: { params: { id: string } },
) => {
  const id = params.id;

  const result = Database.getProduct(parseInt(id));

  if (!result) {
    return NextResponse.json(
      {
        error: "Item not found",
      },
      { status: 404 },
    );
  }

  return NextResponse.json(result, { status: 200 });
};
