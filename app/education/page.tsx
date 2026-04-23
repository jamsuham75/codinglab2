import Link from 'next/link';
import {
  Target, ChevronRight,
  Mail, Users, Clock, Star, CheckCircle,
  Monitor, Shield, Brain, Code2,
} from 'lucide-react';
import MobileMenu from '../MobileMenu';
import ContactDropdown from '../ContactDropdown';
import SocialFooter from '../SocialFooter';

const courses = [
  {
    category: '프로그래밍 언어',
    color: 'red',
    borderHover: 'hover:border-red-500/50',
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-400',
    badgeBg: 'bg-red-500/20',
    badgeText: 'text-red-300',
    icon: <Code2 size={28} />,
    items: [
      {
        title: 'C# 완전 정복',
        level: '초급 → 고급',
        duration: '48시간',
        desc: '객체지향 원리부터 멀티스레드, 네트워크, WinForms까지 C#의 전 영역을 실전 예제로 체득합니다.',
        tags: ['OOP', '멀티스레드', 'LINQ', '.NET'],
      },
      {
        title: 'C/C++ 시스템 프로그래밍',
        level: '중급 → 고급',
        duration: '40시간',
        desc: '메모리 구조와 포인터 원리를 기반으로 운영체제가 실제로 동작하는 방식을 이해하며 코딩합니다.',
        tags: ['포인터', '메모리관리', '소켓', '멀티프로세스'],
      },
    ],
  },
  {
    category: 'AI · 데이터',
    color: 'blue',
    borderHover: 'hover:border-blue-500/50',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    badgeBg: 'bg-blue-500/20',
    badgeText: 'text-blue-300',
    icon: <Brain size={28} />,
    items: [
      {
        title: '파이썬으로 배우는 AI 실무',
        level: '초급 → 중급',
        duration: '36시간',
        desc: '파이썬 문법부터 NumPy, Pandas, 머신러닝 모델 구축까지 데이터 분석 실무 역량을 쌓습니다.',
        tags: ['Python', 'NumPy', 'Scikit-learn', 'Pandas'],
      },
      {
        title: 'AI 에이전트 개발 실전',
        level: '중급',
        duration: '24시간',
        desc: 'LLM API를 활용한 AI 에이전트 설계와 구현, 프롬프트 엔지니어링 실전 적용법을 다룹니다.',
        tags: ['LLM', 'RAG', '프롬프트 엔지니어링', 'API'],
      },
    ],
  },
  {
    category: '보안 · 시스템',
    color: 'emerald',
    borderHover: 'hover:border-emerald-500/50',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/20',
    badgeText: 'text-emerald-300',
    icon: <Shield size={28} />,
    items: [
      {
        title: '데이터 보안 원리와 실습',
        level: '중급',
        duration: '32시간',
        desc: '암호화 알고리즘의 수학적 원리부터 실제 보안 솔루션 구현까지, 보안을 코드로 이해합니다.',
        tags: ['암호화', 'PKI', '네트워크 보안', '취약점 분석'],
      },
      {
        title: '알고리즘 & 자료구조 특강',
        level: '초급 → 중급',
        duration: '28시간',
        desc: '코딩 테스트를 넘어 실제 시스템 성능 최적화에 쓰이는 알고리즘 사고법을 훈련합니다.',
        tags: ['정렬', '그래프', 'DP', '시간복잡도'],
      },
    ],
  },
  {
    category: '기업 · 특강',
    color: 'violet',
    borderHover: 'hover:border-violet-500/50',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    badgeBg: 'bg-violet-500/20',
    badgeText: 'text-violet-300',
    icon: <Monitor size={28} />,
    items: [
      {
        title: '기업 맞춤형 SW 교육',
        level: '수준 협의',
        duration: '협의',
        desc: '기업의 기술 스택과 역량 수준에 맞게 커리큘럼을 설계합니다. 삼성, SK 등 대기업 강의 경력 보유.',
        tags: ['기업강의', '팀빌딩', '온·오프라인', '맞춤설계'],
      },
      {
        title: '개발자 멘토링 & 코드리뷰',
        level: '전 수준',
        duration: '회당 2시간',
        desc: '현업 25년 경험을 바탕으로 개인 코드를 직접 리뷰하고 성장 방향을 제시하는 1:1 멘토링.',
        tags: ['1:1', '코드리뷰', '커리어', '포트폴리오'],
      },
    ],
  },
];

const features = [
  { icon: <Star size={20} />, title: '원리 중심 커리큘럼', desc: 'API 암기가 아닌 동작 원리부터 이해하는 방식으로 오래 남는 지식을 만듭니다.' },
  { icon: <Users size={20} />, title: '소수 정예 / 맞춤 진행', desc: '수강생 수준에 맞게 속도와 깊이를 조절하여 낙오 없이 함께 성장합니다.' },
  { icon: <Clock size={20} />, title: '25년 현업 예제', desc: '삼성·SK 실무에서 직접 다룬 문제를 예제로 활용해 현장 감각을 함께 키웁니다.' },
  { icon: <CheckCircle size={20} />, title: '수강 후 Q&A 지원', desc: '강의 종료 후에도 커뮤니티를 통해 질문하고 답변을 받을 수 있습니다.' },
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
              25년 현업 경험에서 증명된 원리 중심 커리큘럼.
              단순 문법 암기를 넘어 <span className="text-white font-semibold">시니어급 사고 체계</span>를 갖추는 과정입니다.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex gap-4 flex-shrink-0">
            <div className="text-center p-5 bg-slate-800 rounded-2xl border border-slate-700 min-w-[90px]">
              <div className="text-3xl font-extrabold text-red-400">6+</div>
              <div className="text-xs text-slate-400 mt-1">강의 과정</div>
            </div>
            <div className="text-center p-5 bg-slate-800 rounded-2xl border border-slate-700 min-w-[90px]">
              <div className="text-3xl font-extrabold text-blue-400">1,000+</div>
              <div className="text-xs text-slate-400 mt-1">수료생</div>
            </div>
            <div className="text-center p-5 bg-slate-800 rounded-2xl border border-slate-700 min-w-[90px]">
              <div className="text-3xl font-extrabold text-white">4.9</div>
              <div className="text-xs text-slate-400 mt-1">평균 만족도</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why 이창현 */}
      <section className="px-8 py-16 bg-slate-800/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">이창현 강사 교육의 특징</h2>
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

      {/* Course List */}
      <section className="px-8 py-20 max-w-6xl mx-auto space-y-16">
        <h2 className="text-3xl font-bold text-center text-white">강의 과정</h2>

        {courses.map((cat) => (
          <div key={cat.category}>
            {/* Category header */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`${cat.iconBg} p-2 rounded-lg ${cat.iconColor}`}>{cat.icon}</div>
              <h3 className="text-xl font-bold text-white">{cat.category}</h3>
              <div className="flex-1 h-px bg-slate-800" />
            </div>

            {/* Course cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {cat.items.map((course) => (
                <div
                  key={course.title}
                  className={`p-7 bg-slate-800 rounded-2xl border border-slate-700 ${cat.borderHover} transition-all group hover:-translate-y-1`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="text-lg font-bold text-white">{course.title}</h4>
                    <span className={`flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${cat.badgeBg} ${cat.badgeText}`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-4">
                    <Clock size={12} />
                    <span>총 {course.duration}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{course.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-slate-700 text-slate-300 rounded-full text-xs border border-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="px-8 py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">수강 신청 절차</h2>
          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-slate-700 hidden md:block" />
            <div className="space-y-6">
              {[
                { step: '01', title: '문의 및 상담', desc: '이메일 또는 연락처로 문의 주시면 수준 파악과 적합 과정을 안내해드립니다.' },
                { step: '02', title: '커리큘럼 확정', desc: '수강생 목표와 현재 수준에 맞게 커리큘럼과 일정을 협의합니다.' },
                { step: '03', title: '강의 진행', desc: '온라인 또는 오프라인(수원 직접 방문) 중 선택하여 진행합니다.' },
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
        <h2 className="text-3xl font-bold mb-4 text-white">수강 문의 & 일정 상담</h2>
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
