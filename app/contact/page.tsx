"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  ChevronRight, Mail, Send,
  BookOpen, Users, FlaskConical, Lightbulb, HandshakeIcon,
  MessageSquare, Clock, CheckCircle,
} from 'lucide-react';
import MobileMenu from '../MobileMenu';
import ContactDropdown from '../ContactDropdown';
import SocialFooter from '../SocialFooter';

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const inquiryTypes = [
  {
    id: '교육 수강 문의',
    icon: <BookOpen size={24} />,
    title: '교육 수강 문의',
    desc: '개인 수강, 과정 선택, 일정·수강료 안내',
    accent: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/40',
    activeBorder: 'border-blue-500',
    activeBg: 'bg-blue-500/20',
  },
  {
    id: '기업 강의 문의',
    icon: <Users size={24} />,
    title: '기업 강의 문의',
    desc: '기업 맞춤형 교육, 재직자 강의, 단체 과정',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/40',
    activeBorder: 'border-emerald-500',
    activeBg: 'bg-emerald-500/20',
  },
  {
    id: '공동 연구',
    icon: <FlaskConical size={24} />,
    title: '공동 연구',
    desc: '대학·연구기관과 AI, 보안, 빅데이터 분야 연구 협업',
    accent: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/40',
    activeBorder: 'border-violet-500',
    activeBg: 'bg-violet-500/20',
  },
  {
    id: '기술 자문',
    icon: <Lightbulb size={24} />,
    title: '기술 자문',
    desc: '스타트업·중소기업 아키텍처 설계, 기술 스택 선정',
    accent: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/40',
    activeBorder: 'border-amber-500',
    activeBg: 'bg-amber-500/20',
  },
  {
    id: '프로젝트 수탁',
    icon: <HandshakeIcon size={24} />,
    title: '프로젝트 수탁',
    desc: '프로토타입 개발, PoC(개념 증명), 맞춤형 솔루션',
    accent: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/40',
    activeBorder: 'border-red-500',
    activeBg: 'bg-red-500/20',
  },
];

const contactMethods = [
  {
    icon: <Mail size={20} />,
    label: '이메일',
    value: 'jamsuham75@naver.com',
    href: 'mailto:jamsuham75@naver.com',
    desc: '문의 후 1–2 영업일 내 회신',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
      </svg>
    ),
    label: '네이버 블로그',
    value: 'blog.naver.com/jamsuham75',
    href: 'https://blog.naver.com/jamsuham75',
    desc: '강의 자료·기술 글 확인',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    label: '유튜브',
    value: 'youtube.com/@jamsuham75',
    href: 'https://www.youtube.com/@jamsuham75',
    desc: '강의 소개 영상 시청',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[이창현코딩연구소 문의] ${selectedType || '일반 문의'} - ${name}`
    );
    const body = encodeURIComponent(
      `문의 유형: ${selectedType || '일반 문의'}\n이름: ${name}\n연락처 이메일: ${email}\n\n문의 내용:\n${message}\n`
    );
    window.location.href = `mailto:jamsuham75@naver.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const isFormValid = name.trim() && email.trim() && message.trim();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Nav */}
      <nav className="relative flex items-center justify-between px-4 sm:px-8 py-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-400 flex items-center gap-2">
          <Image src="/logo.png" alt="로고" width={32} height={32} className="object-contain" />
          <span>이창현<span className="text-white">코딩연구소</span></span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/about"     className="hover:text-blue-400 transition">연구소 소개</Link>
          <Link href="/education" className="hover:text-blue-400 transition">교육 서비스</Link>
          <Link href="/research"  className="hover:text-blue-400 transition">연구/개발</Link>
          <Link href="/books"     className="hover:text-blue-400 transition">저서</Link>
        </div>
        <div className="flex items-center gap-3">
          <ContactDropdown />
          <MobileMenu />
        </div>
      </nav>

      {/* Hero */}
      <section className="px-4 sm:px-8 py-20 md:py-28 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-300 transition">홈</Link>
          <ChevronRight size={14} />
          <span className="text-slate-300">연구 및 협업 문의</span>
        </div>
        <h1 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-blue-400">
            연구 및 협업 문의
          </span>
        </h1>
        <p className="text-base sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
          교육 수강부터 기업 강의, 공동 연구, 기술 자문까지 —
          어떤 형태의 협업이든 편하게 문의해 주세요.
        </p>
      </section>

      {/* 연락 방법 */}
      <section className="px-4 sm:px-8 py-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {contactMethods.map((m) => (
            <a
              key={m.label}
              href={m.href}
              target={m.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 sm:p-5 bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition group"
            >
              <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400 flex-shrink-0 group-hover:bg-blue-500/20 transition">
                {m.icon}
              </div>
              <div className="min-w-0">
                <div className="text-xs text-slate-500 mb-0.5">{m.label}</div>
                <div className="text-sm font-semibold text-white truncate">{m.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{m.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 문의 유형 + 폼 */}
      <section className="px-4 sm:px-8 py-16 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* 왼쪽: 문의 유형 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">문의 유형 선택</h2>
            <p className="text-slate-400 text-sm mb-6">유형을 선택하면 오른쪽 폼에 자동 반영됩니다.</p>
            <div className="space-y-3">
              {inquiryTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedType(t.id)}
                  className={`w-full flex items-center gap-3 p-3 sm:p-5 rounded-2xl border text-left transition-all ${
                    selectedType === t.id
                      ? `${t.activeBg} ${t.activeBorder} border`
                      : 'bg-slate-800 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className={`${t.bg} p-2.5 rounded-xl flex-shrink-0 ${t.accent}`}>
                    {t.icon}
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${selectedType === t.id ? t.accent : 'text-white'}`}>
                      {t.title}
                    </div>
                    <div className="text-slate-400 text-xs mt-0.5">{t.desc}</div>
                  </div>
                  {selectedType === t.id && (
                    <CheckCircle size={18} className={`ml-auto flex-shrink-0 ${t.accent}`} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 오른쪽: 문의 폼 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare size={22} className="text-blue-400" />
              문의 내용 작성
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              작성 후 전송하면 이메일 클라이언트가 열립니다.
            </p>

            {sent ? (
              <div className="bg-emerald-500/10 border border-emerald-500/40 rounded-2xl p-10 text-center">
                <CheckCircle size={40} className="text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">이메일이 준비되었습니다</h3>
                <p className="text-slate-400 text-sm mb-6">
                  이메일 클라이언트에서 발송을 완료해 주세요.<br />
                  1–2 영업일 내에 회신드리겠습니다.
                </p>
                <button
                  onClick={() => { setSent(false); setName(''); setEmail(''); setMessage(''); setSelectedType(''); }}
                  className="text-blue-400 text-sm hover:underline"
                >
                  새 문의 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 선택된 유형 표시 */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    문의 유형
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={selectedType || '왼쪽에서 유형을 선택하세요'}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-sm text-slate-300 cursor-default focus:outline-none"
                  />
                </div>

                {/* 이름 */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    이름 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="홍길동"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>

                {/* 이메일 */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    회신받을 이메일 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>

                {/* 문의 내용 */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    문의 내용 <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="문의하실 내용을 자유롭게 작성해 주세요.&#10;예) 수강 일정, 과정 선택, 기업 강의 규모, 연구 주제 등"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition ${
                    isFormValid
                      ? 'bg-blue-600 hover:bg-blue-500 text-white'
                      : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <Send size={16} />
                  이메일로 문의 전송
                </button>

                <p className="text-xs text-slate-500 text-center">
                  전송 버튼을 누르면 이메일 클라이언트가 열립니다.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 응답 절차 */}
      <section className="px-4 sm:px-8 py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">문의 후 진행 절차</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              { step: '01', icon: <Mail size={20} />, title: '문의 접수', desc: '이메일 수신 후 1–2 영업일 내 확인' },
              { step: '02', icon: <MessageSquare size={20} />, title: '내용 검토', desc: '문의 유형에 따라 적합한 방향 검토' },
              { step: '03', icon: <Clock size={20} />, title: '일정 협의', desc: '화상·전화 또는 이메일로 세부 협의' },
              { step: '04', icon: <CheckCircle size={20} />, title: '협업 시작', desc: '커리큘럼·계약·연구 계획 확정 후 진행' },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-blue-400 mb-1">STEP {s.step}</div>
                <h4 className="font-bold text-white text-sm mb-1">{s.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 바로 이메일 */}
      <section className="px-4 sm:px-8 py-16 max-w-6xl mx-auto text-center">
        <p className="text-slate-400 mb-4">폼 작성보다 바로 이메일을 선호하신다면</p>
        <a
          href="mailto:jamsuham75@naver.com"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 sm:px-8 py-4 rounded-lg font-bold transition"
        >
          <Mail size={18} /> jamsuham75@naver.com 바로 보내기
        </a>
      </section>

      <SocialFooter />
    </div>
  );
}
