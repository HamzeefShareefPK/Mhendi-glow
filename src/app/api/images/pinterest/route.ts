import { NextRequest, NextResponse } from "next/server";
import { fetchPinterestImages, searchPinterestImages } from "@/lib/api/pinterest";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const category = searchParams.get("category");
  const limit = parseInt(searchParams.get("limit") || "12", 10);

  try {
    let images;

    if (category) {
      images = await searchPinterestImages(category, limit);
    } else if (query) {
      images = await fetchPinterestImages(query, limit);
    } else {
      images = await fetchPinterestImages("mehndi designs", limit);
    }

    return NextResponse.json({
      success: true,
      data: images,
      count: images.length,
    });
  } catch (error) {
    console.error("Pinterest API route error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch images",
      },
      { status: 500 }
    );
  }
}
