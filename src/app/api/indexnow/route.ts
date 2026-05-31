import { NextResponse } from "next/server";
import { submitUrls } from "@/lib/indexnow";

// Admin-triggered IndexNow submission. Guarded by a shared secret so it can't
// be abused. POST { urls: string[] } with header `x-indexnow-secret`.
// This route lives under /api/ which robots.txt disallows.
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const secret = process.env.INDEXNOW_ADMIN_SECRET;
  if (!secret || req.headers.get("x-indexnow-secret") !== secret) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  let body: { urls?: string[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const urls = Array.isArray(body.urls) ? body.urls : [];
  if (urls.length === 0) {
    return NextResponse.json({ ok: false, error: "No urls provided" }, { status: 400 });
  }

  const statuses = await submitUrls(urls);
  return NextResponse.json({ ok: true, submitted: urls.length, statuses });
}
