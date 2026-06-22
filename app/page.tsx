import Link from 'next/link';
import { BookOpen, Terminal, Cpu, ChevronRight, Target } from 'lucide-react';
import MobileMenu from './MobileMenu';
import ContactDropdown from './ContactDropdown';
import SocialFooter from './SocialFooter';

const CodingLabWeb = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="relative flex items-center justify-between px-4 sm:px-8 py-5 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="text-xl sm:text-2xl font-bold tracking-tighter text-blue-400 flex items-center gap-2">
          <Target className="text-red-500" size={22} />
          <span>이창현<span className="text-white">코딩연구소</span></span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/about" className="hover:text-blue-400 transition">연구소 소개</Link>
          <Link href="/education" className="hover:text-blue-400 transition">교육 서비스</Link>
          <Link href="/research" className="hover:text-blue-400 transition">연구/개발</Link>
          <Link href="/books" className="hover:text-blue-400 transition">저서</Link>
        </div>
        <div className="flex items-center gap-3">
          <ContactDropdown />
          <MobileMenu />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-8 py-16 md:py-32 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 md:mb-8 tracking-tight leading-tight flex flex-wrap justify-center gap-x-4 sm:gap-x-5 gap-y-2">
          {(['코딩의', '방향을', '바꾸다'] as const).map((word, i) => (
            <span
              key={word}
              className="hero-title-word"
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              <span className="hero-gradient-text">{word}</span>
            </span>
          ))}
        </h1>
        <p className="text-base sm:text-xl text-slate-400 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          20여년 개발 경험, 저자 직강의 이창현 대표가 제시하는{' '}
          <span className="text-white font-semibold">근본 원리와 Big Picture 중심</span>의 새로운 SW 교육 패러다임.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link href="/curriculum" className="bg-white text-slate-900 px-6 sm:px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition text-sm sm:text-base">
            실전 강의 커리큘럼 <ChevronRight size={18} />
          </Link>
          <Link href="/contact" className="border border-slate-700 text-white px-6 sm:px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2 text-sm sm:text-base">
            연구 및 협업 문의
          </Link>
        </div>
      </section>

      {/* Core Services */}
      <section id="education" className="px-4 sm:px-8 py-12 md:py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12 text-center text-white">연구소 핵심 스펙트럼</h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="p-6 sm:p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-red-500/50 transition-all group hover:-translate-y-1">
              <div className="bg-red-500/10 p-3 w-fit rounded-lg mb-5 group-hover:bg-red-500/20 transition">
                <Terminal className="text-red-400" size={26} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">SW 교육 서비스</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                C#, 파이썬, AI 실무 등 주니어 개발자가 시니어급 사고를 할 수 있도록 원리 중심의 교육을 제공합니다.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all group hover:-translate-y-1">
              <div className="bg-blue-500/10 p-3 w-fit rounded-lg mb-5 group-hover:bg-blue-500/20 transition">
                <Cpu className="text-blue-400" size={26} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">개발 및 연구</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                AI 솔루션, 시스템 소프트웨어, 데이터 보안 분야의 기술 프로토타입 제작 및 연구를 진행합니다.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-white/30 transition-all group hover:-translate-y-1">
              <div className="bg-white/10 p-3 w-fit rounded-lg mb-5 group-hover:bg-white/20 transition">
                <BookOpen className="text-white" size={26} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">지식 콘텐츠</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                13권 이상의 기술 서적 집필 노하우를 바탕으로 고품질 기술 문서와 온라인 교육 콘텐츠를 만듭니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SocialFooter />
    </div>
  );
};

export default CodingLabWeb;
