import Link from 'next/link';
import {
  Target, ChevronRight, Mail,
  Shield, Database, FlaskConical,
  Lightbulb, HandshakeIcon, ArrowRight, CheckCircle, Bot,
} from 'lucide-react';
import MobileMenu from '../MobileMenu';
import ContactDropdown from '../ContactDropdown';
import SocialFooter from '../SocialFooter';

const areas = [
  {
    icon: <Bot size={32} />,
    title: 'AI 솔루션 개발',
    accent: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    border: 'hover:border-blue-500/50',
    desc: 'LLM 기반 AI 에이전트, RAG 시스템, 이미지 분류·객체 탐지 모델을 실제 서비스에 통합하는 프로토타입을 개발합니다.',
    items: [
      'LLM API 기반 AI 에이전트 설계 및 구현',
      'RAG(Retrieval-Augmented Generation) 파이프라인 구축',
      '이미지 분류 · 객체 탐지 모델 적용',
      '온디바이스 AI 경량화 및 최적화',
    ],
  },
  {
    icon: <Bot size={32} />,
    title: '로봇 제어 시스템',
    accent: 'text-red-400',
    iconBg: 'bg-red-500/10',
    border: 'hover:border-red-500/50',
    desc: '임베디드 환경에서의 실시간 제어 소프트웨어 설계부터 로봇 OS(ROS) 연동까지, 하드웨어와 소프트웨어를 잇는 시스템을 연구합니다.',
    items: [
      'C/C++ 기반 실시간 제어 소프트웨어 설계',
      'ROS / ROS2 기반 로봇 시스템 연동',
      '임베디드 Linux 환경 드라이버 개발',
      '센서 융합 및 상태 추정 알고리즘',
    ],
  },
  {
    icon: <Shield size={32} />,
    title: '데이터 보안 연구',
    accent: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/50',
    desc: 'SK 보안 솔루션 개발 경험을 바탕으로 암호화 모듈 설계, 보안 취약점 분석, 안전한 통신 채널 구현 연구를 수행합니다.',
    items: [
      'AES · RSA · ECC 기반 암호화 모듈 구현',
      'TLS/mTLS 보안 통신 채널 설계',
      'OWASP 취약점 진단 및 코드 보안 강화',
      'PKI 인증서 관리 시스템 구축',
    ],
  },
  {
    icon: <Database size={32} />,
    title: '시스템 소프트웨어',
    accent: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    border: 'hover:border-violet-500/50',
    desc: '삼성전자 현업에서 쌓은 시스템 프로그래밍 역량으로 고성능 서버, 네트워크 미들웨어, 플랫폼 소프트웨어를 연구·개발합니다.',
    items: [
      '고성능 네트워크 서버 아키텍처 설계',
      '멀티스레드 · 비동기 I/O 최적화',
      '메모리 관리 및 성능 프로파일링',
      '크로스플랫폼 미들웨어 개발',
    ],
  },
];

const projects = [
  {
    tag: 'AI',
    tagColor: 'bg-blue-500/20 text-blue-300',
    title: 'LLM 기반 코드 리뷰 자동화 시스템',
    desc: 'GitHub PR에 연동하여 코드 품질, 보안 취약점, 스타일 가이드 위반을 자동으로 검출하는 AI 에이전트 프로토타입.',
    stack: ['Python', 'LangChain', 'GPT-4o', 'GitHub API'],
    status: '완료',
    statusColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    tag: '보안',
    tagColor: 'bg-emerald-500/20 text-emerald-300',
    title: '엔드투엔드 암호화 파일 전송 시스템',
    desc: 'AES-256-GCM + RSA 하이브리드 암호화를 적용한 안전한 파일 전송 데스크탑 애플리케이션.',
    stack: ['C#', '.NET', 'WinForms', 'OpenSSL'],
    status: '완료',
    statusColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    tag: '로봇',
    tagColor: 'bg-red-500/20 text-red-300',
    title: '자율 이동 로봇 경로 계획 모듈',
    desc: 'ROS2 환경에서 A* 및 D* Lite 알고리즘을 활용한 동적 장애물 회피 경로 계획 시스템.',
    stack: ['C++', 'ROS2', 'Python', 'OpenCV'],
    status: '진행 중',
    statusColor: 'bg-blue-500/20 text-blue-300',
  },
  {
    tag: 'AI',
    tagColor: 'bg-blue-500/20 text-blue-300',
    title: '제조 공정 이상 탐지 AI 모델',
    desc: '센서 시계열 데이터를 기반으로 제조 라인의 이상 패턴을 실시간으로 탐지하는 경량 ML 모델.',
    stack: ['Python', 'PyTorch', 'ONNX', 'Edge AI'],
    status: '완료',
    statusColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    tag: '시스템',
    tagColor: 'bg-violet-500/20 text-violet-300',
    title: '고성능 TCP 이벤트 서버 프레임워크',
    desc: 'C# / .NET 기반의 비동기 소켓 이벤트 서버로 10,000+ 동시 접속을 처리하는 네트워크 미들웨어.',
    stack: ['C#', '.NET', 'IOCP', 'Async/Await'],
    status: '완료',
    statusColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    tag: '보안',
    tagColor: 'bg-emerald-500/20 text-emerald-300',
    title: 'mTLS 기반 IoT 디바이스 인증 시스템',
    desc: '경량 인증서를 활용한 IoT 디바이스 상호 인증 및 안전한 데이터 수집 파이프라인 설계.',
    stack: ['C', 'mbedTLS', 'MQTT', 'Python'],
    status: '진행 중',
    statusColor: 'bg-blue-500/20 text-blue-300',
  },
];

const collabTypes = [
  {
    icon: <FlaskConical size={24} />,
    title: '공동 연구',
    desc: '대학·연구기관과 AI, 보안, 로봇 분야 공동 연구 및 논문 작업을 진행합니다.',
  },
  {
    icon: <Lightbulb size={24} />,
    title: '기술 자문',
    desc: '스타트업·중소기업의 기술 스택 선정, 아키텍처 설계, 보안 검토를 자문합니다.',
  },
  {
    icon: <HandshakeIcon size={24} />,
    title: '프로젝트 수탁',
    desc: '프로토타입 개발, PoC(개념 증명), 기술 데모 제작을 수탁 개발합니다.',
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Nav */}
      <nav className="relative flex items-center justify-between px-8 py-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-400 flex items-center gap-2">
          <Target className="text-red-500" size={24} />
          <span>이창현<span className="text-white">코딩연구소</span></span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/about"      className="hover:text-blue-400 transition">연구소 소개</Link>
          <Link href="/education"  className="hover:text-blue-400 transition">교육 서비스</Link>
          <Link href="/research"   className="text-blue-400 transition">연구/개발</Link>
          <Link href="/books"      className="hover:text-blue-400 transition">저서</Link>
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
          <span className="text-slate-300">연구/개발</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-blue-400">
            연구 / 개발
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          삼성·SK 25년 현업 경력에서 축적한 기술력으로 AI, 로봇 제어, 데이터 보안, 시스템 소프트웨어 분야의
          <span className="text-white font-semibold"> 프로토타입 개발과 기술 연구</span>를 수행합니다.
        </p>
      </section>

      {/* Research Areas */}
      <section className="px-8 py-16 bg-slate-800/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">연구 분야</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {areas.map((a) => (
              <div key={a.title} className={`p-8 bg-slate-800 rounded-2xl border border-slate-700 ${a.border} transition-all hover:-translate-y-1 group`}>
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
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-3 text-center text-white">주요 프로젝트</h2>
        <p className="text-slate-500 text-center mb-12">직접 설계·개발한 연구 프로젝트 및 프로토타입</p>
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
      <section className="px-8 py-20 bg-slate-800/30">
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
            <div className="grid sm:grid-cols-4 gap-4">
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
                    <ArrowRight size={16} className="text-slate-600 mt-4 rotate-90 sm:rotate-0 sm:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">연구·개발 협업 문의</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          AI, 보안, 로봇, 시스템 분야의 기술 과제라면 어떤 형태든 검토해드립니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:jamsuham75@naver.com"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition"
          >
            <Mail size={18} /> 이메일로 문의하기
          </a>
          <Link
            href="/education"
            className="border border-slate-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition"
          >
            교육 서비스 보기
          </Link>
        </div>
      </section>

      <SocialFooter />
    </div>
  );
}
