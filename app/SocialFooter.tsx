import Link from "next/link";
import { Target, Mail } from "lucide-react";

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function NaverBlogIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
    </svg>
  );
}

const socials = [
  { href: "mailto:jamsuham75@naver.com", icon: <Mail size={20} />, label: "이메일" },
  { href: "https://blog.naver.com/jamsuham75", icon: <NaverBlogIcon />, label: "블로그" },
  { href: "https://www.youtube.com/@jamsuham75", icon: <YoutubeIcon />, label: "유튜브" },
  { href: "https://www.instagram.com/jamsuham75", icon: <InstagramIcon />, label: "인스타그램" },
];

export default function SocialFooter() {
  return (
    <footer className="px-8 py-16 border-t border-slate-800 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <Link href="/" className="text-xl font-bold tracking-tighter text-blue-400 flex items-center gap-2">
          <Target className="text-red-500" size={20} />
          <span>이창현<span className="text-white">코딩연구소</span></span>
        </Link>
        <p className="text-slate-500 text-sm max-w-md">
          경기도 수원시 영통구 산남로 99 | 대표: 이창현<br />
          삼성, SK 경력 | 전 성신여대 융합보안공학과 겸임교수
        </p>
        <div className="flex gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-slate-400 hover:text-white transition"
            >
              {s.icon}
            </a>
          ))}
        </div>
        <p className="text-slate-600 text-xs">© 2026 Lee Chang-hyun Coding Lab. All rights reserved.</p>
      </div>
    </footer>
  );
}
