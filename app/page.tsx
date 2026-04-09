import Link from 'next/link';
import { BookOpen, Terminal, Cpu, Mail, ExternalLink, ChevronRight, Target } from 'lucide-react';


const CodingLabWeb = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-tighter text-blue-400 flex items-center gap-2">
          <Target className="text-red-500" size={24} />
          <span>이창현<span className="text-white">코딩연구소</span></span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-400 transition">연구소 소개</a>
          <a href="#education" className="hover:text-blue-400 transition">교육 서비스</a>
          <a href="#research" className="hover:text-blue-400 transition">연구/개발</a>
          <Link href="/books" className="hover:text-blue-400 transition">저서</Link>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition">
          문의하기
        </button>
      </nav>

      {/* Hero Section (Modified Title & Color) */}
      <section className="px-8 py-24 md:py-32 max-w-6xl mx-auto text-center">
        {/* 새로운 타이틀 및 3색 그라데이션 적용 */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-white to-blue-500 animate-gradient-x">
            코딩의 방향을 바꾸다
          </span>
        </h1>
        
        <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          25년 개발 내공, 삼성·SK 경력의 이창현 교수가 제시하는 <br />
          <span className="text-white font-semibold">근본 원리와 Big Picture 중심</span>의 새로운 SW 교육 패러다임.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition">
            실전 강의 커리큘럼 <ChevronRight size={20} />
          </button>
          <button className="border border-slate-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition">
            연구 및 협업 문의
          </button>
        </div>
      </section>

      {/* Core Services */}
      <section id="education" className="px-8 py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">연구소 핵심 스펙트럼</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Education Card */}
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-red-500/50 transition-all group hover:-translate-y-1">
              <div className="bg-red-500/10 p-3 w-fit rounded-lg mb-6 group-hover:bg-red-500/20 transition">
                <Terminal className="text-red-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">SW 교육 서비스</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                C#, 파이썬, AI 실무 등 주니어 개발자가 시니어급 사고를 할 수 있도록 원리 중심의 교육을 제공합니다.
              </p>
            </div>

            {/* Research Card */}
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all group hover:-translate-y-1">
              <div className="bg-blue-500/10 p-3 w-fit rounded-lg mb-6 group-hover:bg-blue-500/20 transition">
                <Cpu className="text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">개발 및 연구</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                AI 솔루션, 로봇 제어, 데이터 보안 분야의 기술 프로토타입 제작 및 연구를 진행합니다.
              </p>
            </div>

            {/* Content Card */}
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-white/30 transition-all group hover:-translate-y-1">
              <div className="bg-white/10 p-3 w-fit rounded-lg mb-6 group-hover:bg-white/20 transition">
                <BookOpen className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">지식 콘텐츠</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                13권 이상의 기술 서적 집필 노하우를 바탕으로 고품질 기술 문서와 온라인 교육 콘텐츠를 만듭니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="px-8 py-16 border-t border-slate-800 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
          <div className="text-xl font-bold tracking-tighter text-blue-400 flex items-center gap-2">
            <Target className="text-red-500" size={20} />
            <span>이창현<span className="text-white">코딩연구소</span></span>
          </div>
          <p className="text-slate-500 text-sm max-w-md">
            경기도 수원시 영통구 산남로 99 | 대표: 이창현 <br />
            삼성, SK 경력 | 전 성신여대 융합보안공학과 겸임교수
          </p>
          <div className="flex gap-4">
            <Mail className="text-slate-400 cursor-pointer hover:text-white" size={20} />
            <ExternalLink className="text-slate-400 cursor-pointer hover:text-white" size={20} />
          </div>
          <p className="text-slate-600 text-xs mt-4">© 2026 Lee Chang-hyun Coding Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CodingLabWeb;