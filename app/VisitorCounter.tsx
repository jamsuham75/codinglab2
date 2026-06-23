'use client';

import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

// 실제 카운터 API → 실패 시 localStorage 폴백
export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const isNewSession = !sessionStorage.getItem('lch_visited');
    if (isNewSession) sessionStorage.setItem('lch_visited', '1');

    // 1) Vercel KV API 시도
    fetch('/api/views', { method: isNewSession ? 'POST' : 'GET' })
      .then((r) => r.json())
      .then((d) => {
        if (d.count != null) {
          setCount(d.count);
        } else {
          fallback(isNewSession);
        }
      })
      .catch(() => fallback(isNewSession));
  }, []);

  function fallback(isNewSession: boolean) {
    const BASE = 1000; // 사이트 시작 기준 방문자 수
    const stored = parseInt(localStorage.getItem('lch_views') ?? '0', 10);
    if (isNewSession) {
      const next = stored + 1;
      localStorage.setItem('lch_views', String(next));
      setCount(BASE + next);
    } else {
      setCount(BASE + (stored || 1));
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
