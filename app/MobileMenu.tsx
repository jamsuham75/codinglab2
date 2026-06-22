"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Mail } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-2 text-slate-400 hover:text-white transition min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label="메뉴 열기"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 flex flex-col px-5 py-2 z-50">
          {[
            { href: '/about', label: '연구소 소개' },
            { href: '/education', label: '교육 서비스' },
            { href: '/research', label: '연구/개발' },
            { href: '/books', label: '저서' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="py-3 text-base font-medium hover:text-blue-400 transition border-b border-slate-800/60 last:border-b-0"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="pt-3 pb-2">
            <a
              href="mailto:jamsuham75@naver.com"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-semibold py-2"
              onClick={() => setOpen(false)}
            >
              <Mail size={16} /> 이메일 문의하기
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
