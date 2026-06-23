import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const count = (await kv.get<number>('site_views')) ?? 0;
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null });
  }
}

export async function POST() {
  try {
    const count = await kv.incr('site_views');
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null });
  }
}
