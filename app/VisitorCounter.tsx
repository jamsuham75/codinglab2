'use client';

import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem('lch_visited');

    if (!alreadyCounted) {
      sessionStorage.setItem('lch_visited', '1');
      fetch('/api/views', { method: 'POST' })
        .then((r) => r.json())
        .then((d) => { if (d.count != null) setCount(d.count); })
        .catch(() => {});
    } else {
      fetch('/api/views')
        .then((r) => r.json())
        .then((d) => { if (d.count != null) setCount(d.count); })
        .catch(() => {});
    }
  }, []);

  if (!count) return null;

  return (
    <div className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mt-6">
      <Eye size={14} />
      <span>
        누적 방문자{' '}
        <span className="text-slate-300 font-semibold">{count.toLocaleString()}</span>명
      </span>
    </div>
  );
}
