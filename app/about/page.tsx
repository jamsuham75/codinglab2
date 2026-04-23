import Link from 'next/link';
import { Target, ChevronRight, BookOpen, Award, Briefcase, GraduationCap } from 'lucide-react';
import MobileMenu from '../MobileMenu';
import ContactDropdown from '../ContactDropdown';
import SocialFooter from '../SocialFooter';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="relative flex items-center justify-between px-8 py-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-400 flex items-center gap-2">
          <Target className="text-red-500" size={24} />
          <span>이창현<span className="text-white">코딩연구소</span></span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/about" className="text-blue-400 transition">연구소 소개</Link>
          <Link href="/education" className="hover:text-blue-400 transition">교육 서비스</Link>
          <Link href="/research" className="hover:text-blue-400 transition">연구/개발</Link>
          <Link href="/books" className="hover:text-blue-400 transition">저서</Link>
        </div>
        <div className="flex items-center gap-3">
          <ContactDropdown />
          <MobileMenu />
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 py-20 md:py-28 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-300 transition">홈</Link>
          <ChevronRight size={14} />
          <span className="text-slate-300">연구소 소개</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-blue-400">
            이창현코딩연구소
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          25년 현업 개발 경험과 삼성·SK 경력을 바탕으로, 소프트웨어 교육의 본질을 바꾸고자 설립한 전문 연구소입니다.
        </p>
      </section>

      {/* Mission */}
      <section className="px-8 py-16 bg-slate-800/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">설립 철학</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              현업에서 10년 이상 C/C++, C#, Python 등 다양한 언어로 실제 제품을 만들어온 경험에서 깨달은 것은 하나입니다.
              <span className="text-white font-semibold"> 근본 원리를 모르면 어떤 도구도 제대로 쓸 수 없다</span>는 것입니다.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              AI가 코드를 대신 작성하는 시대일수록, 그 코드의 원리를 이해하는 개발자와 그렇지 않은 개발자의 차이는 더욱 벌어집니다.
            </p>
            <p className="text-slate-400 leading-relaxed">
              이창현코딩연구소는 <span className="text-white font-semibold">Big Picture와 원리 중심</span>의 교육으로, 빠르게 변화하는 기술 환경에서도 흔들리지 않는 개발자를 양성합니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Terminal size={24} />, label: '25년+', sub: '현업 개발 경력', color: 'text-red-400', bg: 'bg-red-500/10' },
              { icon: <BookOpen size={24} />, label: '13권+', sub: '기술 서적 집필', color: 'text-blue-400', bg: 'bg-blue-500/10' },
              { icon: <GraduationCap size={24} />, label: '1,000명+', sub: '교육 수료생', color: 'text-white', bg: 'bg-white/10' },
              { icon: <Cpu size={24} />, label: '다수', sub: 'AI·보안 프로젝트', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
            ].map((item) => (
              <div key={item.label} className="p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center">
                <div className={`${item.bg} p-3 w-fit rounded-lg mx-auto mb-3`}>
                  <span className={item.color}>{item.icon}</span>
                </div>
                <div className="text-2xl font-extrabold text-white mb-1">{item.label}</div>
                <div className="text-xs text-slate-400">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">대표 소개</h2>
        <div className="bg-slate-800 rounded-3xl border border-slate-700 p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center text-4xl font-extrabold text-white">
                이
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">이창현</div>
                <div className="text-sm text-slate-400">대표 / 수석 강사</div>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  <Briefcase size={15} /> 주요 경력
                </h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />삼성전자 — 시스템 소프트웨어 개발</li>
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />SK 계열사 — 보안 솔루션 개발 및 아키텍처</li>
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />성신여자대학교 융합보안공학과 겸임교수</li>
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />이창현코딩연구소 대표 (현)</li>
                </ul>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  <Award size={15} /> 전문 분야
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['C/C++', 'C#', 'Python', 'AI 응용', '시스템 보안', '로봇 제어', '알고리즘', '컴퓨터 구조'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs border border-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  <BookOpen size={15} /> 주요 저서
                </h3>
                <ul className="space-y-1 text-slate-400 text-sm">
                  <li>· C# 완전 정복 시리즈 (다수)</li>
                  <li>· 파이썬으로 배우는 AI 프로그래밍</li>
                  <li>· 알고리즘 원리와 실전 문제풀이</li>
                  <li className="text-slate-500">· 그 외 다수 — <Link href="/books" className="text-blue-400 hover:underline">전체 저서 보기</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-8 py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">연구소가 추구하는 가치</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: '원리 중심',
                desc: '문법이나 API 암기가 아닌, 왜 그렇게 동작하는지 이해하는 것을 최우선으로 합니다.',
                color: 'border-red-500/40',
                numColor: 'text-red-400',
              },
              {
                num: '02',
                title: 'Big Picture',
                desc: '개별 기술이 아닌 전체 시스템 구조와 흐름을 보는 안목을 키웁니다.',
                color: 'border-blue-500/40',
                numColor: 'text-blue-400',
              },
              {
                num: '03',
                title: '실전 적용',
                desc: '25년 현업 경험에서 나온 실제 프로젝트 기반 예제로 현장 감각을 익힙니다.',
                color: 'border-white/20',
                numColor: 'text-white',
              },
            ].map((v) => (
              <div key={v.num} className={`p-8 bg-slate-800 rounded-2xl border ${v.color}`}>
                <div className={`text-5xl font-extrabold mb-4 ${v.numColor} opacity-60`}>{v.num}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">함께 시작하실 준비가 되셨나요?</h2>
        <p className="text-slate-400 mb-8">교육 수강, 기업 강의, 연구 협업 등 어떤 형태로든 문의 주세요.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="/#education" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition">
            교육 서비스 보기 <ChevronRight size={18} />
          </Link>
          <Link href="/books" className="border border-slate-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition">
            저서 목록 보기
          </Link>
        </div>
      </section>

      <SocialFooter />
    </div>
  );
}
