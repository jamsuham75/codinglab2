"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, Globe, X } from "lucide-react";

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function NaverBlogIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
    </svg>
  );
}

const contacts = [
  {
    icon: <Mail size={18} />,
    label: "이메일",
    value: "jamsuham75@naver.com",
    href: "mailto:jamsuham75@naver.com",
    color: "text-blue-400",
    bg: "hover:bg-blue-500/10",
  },
  {
    icon: <NaverBlogIcon />,
    label: "블로그",
    value: "blog.naver.com/jamsuham75",
    href: "https://blog.naver.com/jamsuham75",
    color: "text-green-400",
    bg: "hover:bg-green-500/10",
  },
  {
    icon: <YoutubeIcon />,
    label: "유튜브",
    value: "@jamsuham75",
    href: "https://www.youtube.com/@jamsuham75",
    color: "text-red-400",
    bg: "hover:bg-red-500/10",
  },
  {
    icon: <InstagramIcon />,
    label: "인스타그램",
    value: "@jamsuham75",
    href: "https://www.instagram.com/jamsuham75",
    color: "text-pink-400",
    bg: "hover:bg-pink-500/10",
  },
];

export default function ContactDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative hidden md:block">
      <button
        onClick={() => setOpen((v) => !v)}
        className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition flex items-center gap-1.5"
      >
        문의하기
        <span className={`transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          {open ? <X size={14} /> : "+"}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-3 w-72 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden z-50">
          <div className="px-4 py-3 border-b border-slate-700">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">연락처 & 채널</p>
          </div>
          <div className="p-2">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${c.bg} group`}
              >
                <span className={`flex-shrink-0 ${c.color}`}>{c.icon}</span>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 leading-none mb-0.5">{c.label}</p>
                  <p className="text-sm font-medium text-slate-200 truncate group-hover:text-white transition">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
