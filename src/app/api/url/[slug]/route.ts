import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/server/db";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug;

  const url = await db.link.findUnique({
    where: { slug },
  });

  if (!url) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(url);
}
