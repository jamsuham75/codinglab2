import Link from 'next/link';
import {
  Target, ChevronRight, Mail,
  Shield, Database, FlaskConical,
  Lightbulb, HandshakeIcon, ArrowRight, CheckCircle,
  Cpu, Monitor, Bot, Code2,
} from 'lucide-react';
import MobileMenu from '../MobileMenu';
import ContactDropdown from '../ContactDropdown';
import SocialFooter from '../SocialFooter';

const areas = [
  {
    icon: <Bot size={32} />,
    title: 'AI · 컴퓨터 비전',
    accent: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    border: 'hover:border-blue-500/50',
    desc: '머신러닝·딥러닝 기반 객체 인식, 의료 영상 분석, 반도체 비전 검사 등 산업 현장에서 검증된 AI 솔루션을 연구·개발합니다. 저서 『스파크 기반의 자연어 처리』 집필 경험을 바탕으로 NLP 파이프라인도 수행합니다.',
    items: [
      'OpenCV 기반 객체 인식 및 이미지 분류',
      '딥러닝 모델 설계·학습·경량화 (PyTorch)',
      '의료 AI 영상 분석 및 SW 플랫폼 개발',
      'NLP · 텍스트 분석 파이프라인 구축',
    ],
  },
  {
    icon: <Cpu size={32} />,
    title: '시스템 소프트웨어 · 미들웨어',
    accent: 'text-red-400',
    iconBg: 'bg-red-500/10',
    border: 'hover:border-red-500/50',
    desc: 'Win32 API, MFC, C/C++ 기반 시스템 소프트웨어 개발 경력 20여년. 게임 엔진, 셋탑박스 미들웨어, GIS 모니터링 시스템 등 고성능 네이티브 애플리케이션을 설계·구현합니다.',
    items: [
      'C/C++ 기반 Win32 API · MFC 애플리케이션 개발',
      '임베디드 Linux 환경 미들웨어 개발',
      '고성능 게임 엔진 및 렌더링 파이프라인',
      'GIS · 실시간 모니터링 시스템 설계',
    ],
  },
  {
    icon: <Monitor size={32} />,
    title: '웹 · 모바일 풀스택',
    accent: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/50',
    desc: 'HTML5, JavaScript, React, Node.js, TypeScript, Spring Boot, ASP.NET Core에 이르는 프론트엔드·백엔드 전 영역을 아우릅니다. 관련 저서만 5권 이상으로, 실전 기반 풀스택 개발을 지원합니다.',
    items: [
      'React / TypeScript 기반 프론트엔드 개발',
      'Node.js · MongoDB 백엔드 서비스 구축',
      'Spring Boot · ASP.NET Core REST API 설계',
      '앱인벤터 기반 모바일 앱 개발 및 교육 도구 제작',
    ],
  },
  {
    icon: <Shield size={32} />,
    title: '보안 · 빅데이터',
    accent: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    border: 'hover:border-violet-500/50',
    desc: '유해차단시스템, 문서보안시스템 등 보안 솔루션 현업 개발 경험을 보유합니다. 저서 『데이터 익명화를 위한 파이프라인』 번역 경력을 바탕으로 빅데이터 보안 및 데이터 파이프라인 설계를 수행합니다.',
    items: [
      'DRM 기반 문서보안 및 콘텐츠 암호화',
      '네트워크 레벨 유해 트래픽 차단 시스템',
      '빅데이터 수집 · 분석 · 시각화 파이프라인',
      '데이터 익명화 및 개인정보 보호 설계',
    ],
  },
];

const projects = [
  {
    tag: 'AI · 의료',
    tagColor: 'bg-blue-500/20 text-blue-300',
    title: '의료 AI SW 플랫폼 개발',
    desc: '의료 영상(CT·MRI 등) 데이터를 딥러닝 모델로 분석하는 AI 진단 보조 소프트웨어 플랫폼 개발. 영상 전처리·모델 추론·결과 시각화 파이프라인 구축.',
    stack: ['Python', 'PyTorch', 'OpenCV', 'C#'],
    status: '완료',
    statusColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    tag: '클라우드 · 시스템',
    tagColor: 'bg-violet-500/20 text-violet-300',
    title: '삼성클라우드 개발',
    desc: '삼성 계열 클라우드 스토리지 플랫폼 개발 참여. 대용량 파일 동기화, 버전 관리, 멀티 디바이스 연동 등 핵심 스토리지 엔진 구현.',
    stack: ['C++', 'C#', 'REST API', '클라우드 스토리지'],
    status: '완료',
    statusColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    tag: '게임 엔진',
    tagColor: 'bg-red-500/20 text-red-300',
    title: '웹젠 신규 MMORPG 게임 엔진 개발',
    desc: '웹젠 신규 MMORPG 타이틀의 게임 엔진 개발 참여. 렌더링 파이프라인, 물리 연산, 네트워크 동기화 모듈 설계 및 고성능 C++ 엔진 구현.',
    stack: ['C++', 'DirectX', '게임 엔진', '네트워크'],
    status: '완료',
    statusColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    tag: '보안',
    tagColor: 'bg-emerald-500/20 text-emerald-300',
    title: '유해차단시스템 개발',
    desc: '네트워크 레벨에서 유해 콘텐츠 URL·패킷을 실시간으로 탐지·차단하는 보안 솔루션 개발. 고성능 패킷 필터링 엔진 및 관리 콘솔 구현.',
    stack: ['C/C++', '네트워크 필터링', 'WFP', 'Win32 API'],
    status: '완료',
    statusColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    tag: '보안',
    tagColor: 'bg-emerald-500/20 text-emerald-300',
    title: '문서보안시스템 (DRM) 개발',
    desc: '기업 내부 문서의 무단 유출을 방지하는 DRM(디지털 권한 관리) 기반 문서보안 솔루션 개발. 암호화 모듈, 권한 정책 엔진, 문서 열람 클라이언트 구현.',
    stack: ['C++', 'C#', 'DRM', 'AES 암호화'],
    status: '완료',
    statusColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    tag: 'GIS · 모니터링',
    tagColor: 'bg-amber-500/20 text-amber-300',
    title: '변전소 GIS 모니터링 시스템 개발',
    desc: '전력 변전소 설비 상태를 GIS(지리정보시스템)와 연동하여 실시간으로 시각화·모니터링하는 시스템 개발. 지도 기반 설비 현황 표출 및 이상 알림 구현.',
    stack: ['C++', 'MFC', 'GIS', '실시간 데이터 처리'],
    status: '완료',
    statusColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    tag: '모바일 · 저작도구',
    tagColor: 'bg-rose-500/20 text-rose-300',
    title: '모바일 엔진 저작도구 개발',
    desc: '모바일 콘텐츠를 PC 환경에서 제작·편집·배포할 수 있는 저작도구 개발. 드래그&드롭 UI 편집기, 미리보기 엔진, 모바일 디바이스 연동 모듈 구현.',
    stack: ['C++', 'MFC', 'Win32 API', '모바일 플랫폼'],
    status: '완료',
    statusColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    tag: '임베디드 · 미들웨어',
    tagColor: 'bg-violet-500/20 text-violet-300',
    title: 'SK브로드밴드 셋탑박스 미들웨어 개발',
    desc: 'SK브로드밴드 IPTV 셋탑박스의 미들웨어 레이어 개발. 방송 스트림 수신·디코딩, 앱 실행 런타임, 리모컨 이벤트 처리 등 핵심 미들웨어 컴포넌트 구현.',
    stack: ['C/C++', '임베디드 Linux', 'IPTV 미들웨어', 'MPEG'],
    status: '완료',
    statusColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    tag: '비전 · AI',
    tagColor: 'bg-blue-500/20 text-blue-300',
    title: '삼성반도체 검사 SW 비전 개발',
    desc: '삼성 반도체 공정에서 웨이퍼·칩 표면 결함을 자동으로 탐지하는 머신 비전 검사 소프트웨어 개발. 고속 이미지 처리 알고리즘 및 결함 분류 모델 구현.',
    stack: ['C++', 'OpenCV', '이미지 처리', '비전 알고리즘'],
    status: '완료',
    statusColor: 'bg-emerald-500/20 text-emerald-300',
  },
];

const collabTypes = [
  {
    icon: <FlaskConical size={24} />,
    title: '공동 연구',
    desc: '대학·연구기관과 AI, 보안, 빅데이터 분야 공동 연구 및 강의·집필 협업을 진행합니다.',
  },
  {
    icon: <Lightbulb size={24} />,
    title: '기술 자문',
    desc: '스타트업·중소기업의 기술 스택 선정, 아키텍처 설계, 코드 리뷰를 자문합니다.',
  },
  {
    icon: <HandshakeIcon size={24} />,
    title: '프로젝트 수탁',
    desc: '프로토타입 개발, PoC(개념 증명), 기업 맞춤형 솔루션 개발을 수탁 진행합니다.',
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Nav */}
      <nav className="relative flex items-center justify-between px-4 sm:px-8 py-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-400 flex items-center gap-2">
          <Target className="text-red-500" size={24} />
          <span>이창현<span className="text-white">코딩연구소</span></span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/about"     className="hover:text-blue-400 transition">연구소 소개</Link>
          <Link href="/education" className="hover:text-blue-400 transition">교육 서비스</Link>
          <Link href="/research"  className="text-blue-400 transition">연구/개발</Link>
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
          <span className="text-slate-300">연구/개발</span>
        </div>
        <h1 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-blue-400">
            연구 / 개발
          </span>
        </h1>
        <p className="text-base sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
          20여년간 삼성·SK·웹젠 등 주요 기업 프로젝트에서 검증된 기술력을 바탕으로,
          <span className="text-white font-semibold"> AI, 시스템 소프트웨어, 웹 풀스택, 보안</span> 분야의 연구·개발을 수행합니다.
        </p>
      </section>

      {/* Research Areas */}
      <section className="px-4 sm:px-8 py-16 bg-slate-800/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">연구 분야</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {areas.map((a) => (
              <div key={a.title} className={`p-5 sm:p-8 bg-slate-800 rounded-2xl border border-slate-700 ${a.border} transition-all hover:-translate-y-1`}>
                <div className={`${a.iconBg} p-3 w-fit rounded-xl mb-5 ${a.accent}`}>{a.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{a.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{a.desc}</p>
                <ul className="space-y-2">
                  {a.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle size={14} className={`${a.accent} mt-0.5 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 sm:px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-3 text-center text-white">주요 프로젝트</h2>
        <p className="text-slate-500 text-center mb-12">20여년간 현업에서 직접 설계·개발에 참여한 대표 프로젝트</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all hover:-translate-y-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.tagColor}`}>{p.tag}</span>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${p.statusColor}`}>{p.status}</span>
              </div>
              <h3 className="font-bold text-white mb-2 leading-snug">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-slate-700 text-slate-300 rounded-full text-xs border border-slate-600">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration */}
      <section className="px-4 sm:px-8 py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center text-white">협업 및 의뢰</h2>
          <p className="text-slate-500 text-center mb-12">연구·개발 관련 협업은 아래 형태로 진행합니다</p>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {collabTypes.map((c) => (
              <div key={c.title} className="p-7 bg-slate-800 rounded-2xl border border-slate-700 text-center">
                <div className="bg-blue-500/10 p-4 w-fit rounded-xl mx-auto mb-4 text-blue-400">{c.icon}</div>
                <h3 className="font-bold text-white mb-2">{c.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="bg-slate-800 rounded-3xl border border-slate-700 p-8 md:p-10">
            <h3 className="text-xl font-bold text-white mb-8 text-center">협업 진행 절차</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: '01', title: '문의·상담', desc: '이메일로 과제 개요 및 목표 공유' },
                { step: '02', title: '범위 협의', desc: '기술 검토 후 PoC 범위와 일정 확정' },
                { step: '03', title: '개발·연구', desc: '프로토타입 개발 및 중간 공유' },
                { step: '04', title: '납품·이관', desc: '결과물 전달 및 기술 이전 지원' },
              ].map((s, i, arr) => (
                <div key={s.step} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-sm font-extrabold text-white mb-3">
                    {s.step}
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">{s.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                  {i < arr.length - 1 && (
                    <ArrowRight size={16} className="text-slate-600 mt-4 sm:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-8 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">연구·개발 협업 문의</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          AI, 시스템, 웹 풀스택, 보안 분야의 기술 과제라면 어떤 형태든 검토해드립니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:jamsuham75@naver.com"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 sm:px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition"
          >
            <Mail size={18} /> 이메일로 문의하기
          </a>
          <Link
            href="/education"
            className="border border-slate-700 text-white px-4 sm:px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition"
          >
            교육 서비스 보기
          </Link>
        </div>
      </section>

      <SocialFooter />
    </div>
  );
}
