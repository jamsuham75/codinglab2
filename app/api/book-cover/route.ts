import { NextRequest, NextResponse } from "next/server";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

export async function GET(request: NextRequest) {
  const isbn = request.nextUrl.searchParams.get("isbn");
  if (!isbn || !/^\d{13}$/.test(isbn)) {
    return new NextResponse("Invalid ISBN", { status: 400 });
  }

  const last3 = isbn.slice(-3);
  const candidates = [
    // 교보문고 신형 CDN
    `https://contents.kyobobook.co.kr/simg/mad/pdt/${isbn}.jpg`,
    // 교보문고 구형 CDN
    `https://image.kyobobook.co.kr/images/book/xlarge/${last3}/x${isbn}.jpg`,
  ];

  for (const url of candidates) {
    try {
      const res = await fetch(url, {
        headers: {
          Referer: "https://www.kyobobook.co.kr/",
          "User-Agent": UA,
        },
      });
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        return new NextResponse(buffer, {
          headers: {
            "Content-Type": "image/jpeg",
            "Cache-Control": "public, max-age=86400",
          },
        });
      }
    } catch {
      // try next
    }
  }

  return new NextResponse("Not found", { status: 404 });
}
