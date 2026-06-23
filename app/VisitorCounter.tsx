'use client';

import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

const BASE = 1000;
const HOUR_MS = 60 * 60 * 1000; // 1시간에 1회 카운트

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const now = Date.now();
    const lastTime = parseInt(localStorage.getItem('lch_last') ?? '0', 10);
    const isNewVisit = now - lastTime > HOUR_MS;

    // Vercel KV API 시도
    fetch('/api/views', { method: isNewVisit ? 'POST' : 'GET' })
      .then((r) => r.json())
      .then((d) => {
        if (d.count != null) {
          if (isNewVisit) localStorage.setItem('lch_last', String(now));
          setCount(d.count);
        } else {
          localFallback(isNewVisit, now);
        }
      })
      .catch(() => localFallback(isNewVisit, now));
  }, []);

  function localFallback(isNewVisit: boolean, now: number) {
    const stored = parseInt(localStorage.getItem('lch_views') ?? '0', 10);
    if (isNewVisit) {
      localStorage.setItem('lch_last', String(now));
      const next = stored + 1;
      localStorage.setItem('lch_views', String(next));
      setCount(BASE + next);
    } else {
      setCount(BASE + stored);
    }
  }

  if (!count) return null;

  return (
    <div className="flex items-center justify-center gap-2 text-slate-500 text-sm mt-6">
      <Eye size={14} />
      <span>
        누적 방문자{' '}
        <span className="text-slate-300 font-semibold">{count.toLocaleString()}</span>명
      </span>
    </div>
  );
}
