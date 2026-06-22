import Link from 'next/link';
import {
  Target, ChevronRight,
  Mail, Clock, Star, CheckCircle,
  Layers, Trophy, Rocket, Sparkles,
} from 'lucide-react';
import MobileMenu from '../MobileMenu';
import ContactDropdown from '../ContactDropdown';
import SocialFooter from '../SocialFooter';

const features = [
  {
    icon: <Star size={20} />,
    title: '저자 직강',
    desc: '전 과정 교재 저자가 직접 강의합니다. 집필 의도와 원리를 가장 깊이 있게 전달합니다.',
  },
  {
    icon: <Trophy size={20} />,
    title: '총 10개 프로젝트',
    desc: '개인 프로젝트 9개 + 팀 프로젝트 1개. 기술 스택별 포트폴리오를 스스로 채우며 실무 역량을 증명합니다.',
  },
  {
    icon: <Layers size={20} />,
    title: '단계별 빌드업',
    desc: 'C언어 기초부터 CS 이론, AI 융합 기술까지 — 비전공자도 몰입하는 체계적인 로드맵으로 기본기가 탄탄한 개발자를 육성합니다.',
  },
  {
    icon: <CheckCircle size={20} />,
    title: '수강 후 Q&A 지원',
    desc: '강의 종료 후에도 커뮤니티를 통해 질문하고 지속적인 피드백을 받을 수 있습니다.',
  },
];

type PhaseItem = {
  topic: string;
  note?: string;
  projectBadge?: string;
  specialBadge?: boolean;
};

type Phase = {
  phase: string;
  title: string;
  accentColor: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  projectBadgeBg: string;
  projectBadgeText: string;
  items: PhaseItem[];
};

const phases: Phase[] = [
  {
    phase: '1단계',
    title: '기초 & 개발 환경 구축',
    accentColor: 'text-red-400',
    borderColor: 'border-red-500/40',
    badgeBg: 'bg-red-500/10',
    badgeText: 'text-red-300',
    projectBadgeBg: 'bg-red-500/20',
    projectBadgeText: 'text-red-300',
    items: [
      { topic: '앱인벤터', note: '프로젝트 1', projectBadge: 'PROJECT 1' },
      { topic: '프로그래밍 기초 (C언어 기초)' },
      { topic: 'Git / GitHub / 이슈트래커 / Docker' },
      { topic: '배포 (클라우드타입)' },
    ],
  },
  {
    phase: '2단계',
    title: 'CS 심화 & 알고리즘',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    badgeBg: 'bg-amber-500/10',
    badgeText: 'text-amber-300',
    projectBadgeBg: 'bg-amber-500/20',
    projectBadgeText: 'text-amber-300',
    items: [
      { topic: 'SK 하이닉스 임직원 대상 코딩 테스트 문제 풀이', note: '저자 직접 출제 (2018, 총 5회)', specialBadge: true },
      { topic: 'C언어 중급 (동적 메모리, 함수 포인터 등)' },
      { topic: '자료구조와 알고리즘 (정렬, 검색, 스택, 큐)' },
      { topic: '객체지향 프로그래밍 (C++ 기반 철학, 제네릭)' },
    ],
  },
  {
    phase: '3단계',
    title: '애플리케이션 개발 & AI',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/40',
    badgeBg: 'bg-blue-500/10',
    badgeText: 'text-blue-300',
    projectBadgeBg: 'bg-blue-500/20',
    projectBadgeText: 'text-blue-300',
    items: [
      { topic: 'C# .NET 프로그래밍 (폼 기반)', projectBadge: 'PROJECT 5' },
      { topic: '파이썬 + 웹크롤링 + 데이터 분석 및 시각화', projectBadge: 'PROJECT 6' },
      { topic: 'OpenCV + 객체 인식 + 머신러닝 + 딥러닝 + 로봇 제어', projectBadge: 'PROJECT 7' },
    ],
  },
  {
    phase: '4단계',
    title: '웹 프론트엔드',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    badgeBg: 'bg-emerald-500/10',
    badgeText: 'text-emerald-300',
    projectBadgeBg: 'bg-emerald-500/20',
    projectBadgeText: 'text-emerald-300',
    items: [
      { topic: 'HTML + CSS', note: '웹페이지', projectBadge: 'PROJECT 2' },
      { topic: '자바스크립트 + HTML5', note: '웹앱', projectBadge: 'PROJECT 3' },
      { topic: '제이쿼리 + AJAX + OpenAPI', projectBadge: 'PROJECT 4' },
      { topic: '타입스크립트 기초' },
      { topic: '리액트 기반 웹앱 제작', projectBadge: 'PROJECT 8' },
    ],
  },
  {
    phase: '5단계',
    title: '백엔드 & 풀스택',
    accentColor: 'text-violet-400',
    borderColor: 'border-violet-500/40',
    badgeBg: 'bg-violet-500/10',
    badgeText: 'text-violet-300',
    projectBadgeBg: 'bg-violet-500/20',
    projectBadgeText: 'text-violet-300',
    items: [
      { topic: '데이터베이스 (MySQL, ERD)' },
      { topic: '모던 자바스크립트 + Node.js + MongoDB' },
      { topic: 'Spring Boot + ASP.NET Core' },
      { topic: '백엔드 서버 구축', projectBadge: 'PROJECT 9' },
    ],
  },
  {
    phase: '팀 프로젝트',
    title: '기획 → 구현 → 검증 (6주)',
    accentColor: 'text-rose-400',
    borderColor: 'border-rose-500/40',
    badgeBg: 'bg-rose-500/10',
    badgeText: 'text-rose-300',
    projectBadgeBg: 'bg-rose-500/20',
    projectBadgeText: 'text-rose-300',
    items: [
      { topic: '팀 프로젝트 기획, 구현, 검증', note: '총 6주 진행', projectBadge: 'TEAM PROJECT' },
    ],
  },
];

const specialLectures = [
  'C# 소켓 통신',
  '객체지향 설계 개념',
  '리팩토링',
  'Spring Boot 심화',
  'ASP.NET Core 심화',
  '이력서 잘 쓰는 법 & 면접 잘 보는 법',
];

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="relative flex items-center justify-between px-8 py-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-400 flex items-center gap-2">
          <Target className="text-red-500" size={24} />
          <span>이창현<span className="text-white">코딩연구소</span></span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/about" className="hover:text-blue-400 transition">연구소 소개</Link>
          <Link href="/education" className="text-blue-400 transition">교육 서비스</Link>
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
          <span className="text-slate-300">교육 서비스</span>
        </div>
        <div className="md:flex md:items-end md:justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-blue-400">
                교육 서비스
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              단순 이론 암기가 아닌,{' '}
              <span className="text-white font-semibold">총 10개의 프로젝트</span>를 통해 실무 역량을 극대화합니다.
              모든 수업은 <span className="text-white font-semibold">저자 직강</span>으로 진행됩니다.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex gap-4 flex-shrink-0">
            <div className="text-center p-5 bg-slate-800 rounded-2xl border border-slate-700 min-w-[90px]">
              <div className="text-3xl font-extrabold text-red-400">10개</div>
              <div className="text-xs text-slate-400 mt-1">프로젝트 수행</div>
            </div>
            <div className="text-center p-5 bg-slate-800 rounded-2xl border border-slate-700 min-w-[90px]">
              <div className="text-3xl font-extrabold text-blue-400">1,000+</div>
              <div className="text-xs text-slate-400 mt-1">수료생</div>
            </div>
            <div className="text-center p-5 bg-slate-800 rounded-2xl border border-slate-700 min-w-[90px]">
              <div className="text-3xl font-extrabold text-emerald-400">저자</div>
              <div className="text-xs text-slate-400 mt-1">직강 진행</div>
            </div>
          </div>
        </div>
      </section>

      {/* 교육 철학 */}
      <section className="px-8 py-16 bg-slate-800/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">교육 철학</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
                <div className="bg-blue-500/10 p-3 w-fit rounded-lg mb-4 text-blue-400">{f.icon}</div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 커리큘럼 로드맵 */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-4">개발자 양성 과정 커리큘럼</h2>
        <p className="text-center text-slate-400 mb-14 text-sm">
          프로그래밍 기초(C언어)부터 AI 융합, 풀스택 개발, 팀 프로젝트까지 — 현시점 취업을 가능하게 하는 최적의 로드맵
        </p>

        <div className="space-y-8">
          {phases.map((p) => (
            <div key={p.phase} className={`bg-slate-800 rounded-2xl border ${p.borderColor} overflow-hidden`}>
              {/* Phase header */}
              <div className={`px-7 py-4 border-b ${p.borderColor} flex items-center gap-3`}>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.badgeBg} ${p.badgeText}`}>
                  {p.phase}
                </span>
                <h3 className={`text-lg font-bold ${p.accentColor}`}>{p.title}</h3>
              </div>

              {/* Phase items */}
              <ul className="divide-y divide-slate-700/50">
                {p.items.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between gap-4 px-7 py-4">
                    <div className="flex items-center gap-3">
                      <ChevronRight size={14} className={`flex-shrink-0 ${p.accentColor}`} />
                      <span className="text-slate-200 text-sm">{item.topic}</span>
                      {item.note && (
                        <span className="text-slate-500 text-xs">— {item.note}</span>
                      )}
                      {item.specialBadge && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                          SPECIAL
                        </span>
                      )}
                    </div>
                    {item.projectBadge && (
                      <span className={`flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full ${p.projectBadgeBg} ${p.projectBadgeText}`}>
                        {item.projectBadge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 특강 */}
      <section className="px-8 py-16 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-yellow-500/10 p-2 rounded-lg">
              <Sparkles size={22} className="text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">아주 특별한 특강</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {specialLectures.map((lecture) => (
              <div
                key={lecture}
                className="flex items-center gap-3 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-yellow-500/40 transition"
              >
                <Star size={14} className="text-yellow-400 flex-shrink-0" />
                <span className="text-slate-200 text-sm">{lecture}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 수강 신청 절차 */}
      <section className="px-8 py-20 bg-slate-800/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">수강 신청 절차</h2>
          <div className="relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-slate-700 hidden md:block" />
            <div className="space-y-6">
              {[
                { step: '01', title: '문의 및 상담', desc: '이메일 또는 연락처로 문의 주시면 수준 파악과 적합 과정을 안내해드립니다.' },
                { step: '02', title: '커리큘럼 확정', desc: '수강생 목표와 현재 수준에 맞게 커리큘럼과 일정을 협의합니다.' },
                { step: '03', title: '강의 진행', desc: '온라인 또는 오프라인 중 선택하여 진행합니다. 모든 강의는 저자 직강으로 운영됩니다.' },
                { step: '04', title: '수료 및 사후 지원', desc: '수료 후 커뮤니티를 통해 지속적으로 Q&A 및 피드백을 지원합니다.' },
              ].map((s) => (
                <div key={s.step} className="md:pl-16 flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-sm font-extrabold text-white z-10">
                    {s.step}
                  </div>
                  <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 flex-1">
                    <h4 className="font-bold text-white mb-1">{s.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Rocket size={32} className="text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-white">수강 문의 &amp; 일정 상담</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          개인 수강부터 기업 단체 강의까지 — 목적과 규모에 맞게 설계해 드립니다.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="mailto:jamsuham75@naver.com"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition"
          >
            <Mail size={18} /> 이메일로 문의하기
          </a>
          <Link
            href="/about"
            className="border border-slate-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition"
          >
            연구소 소개 보기
          </Link>
        </div>
      </section>

      <SocialFooter />
    </div>
  );
}
