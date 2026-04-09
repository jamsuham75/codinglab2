"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-2 text-slate-400 hover:text-white transition"
        aria-label="메뉴 열기"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 flex flex-col px-8 py-4 space-y-4 text-sm font-medium z-50">
          <a href="#about" className="hover:text-blue-400 transition" onClick={() => setOpen(false)}>연구소 소개</a>
          <a href="#education" className="hover:text-blue-400 transition" onClick={() => setOpen(false)}>교육 서비스</a>
          <a href="#research" className="hover:text-blue-400 transition" onClick={() => setOpen(false)}>연구/개발</a>
          <Link href="/books" className="hover:text-blue-400 transition" onClick={() => setOpen(false)}>저서</Link>
        </div>
      )}
    </div>
  );
}
