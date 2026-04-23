"use client";

import Link from 'next/link';
import { useState } from 'react';
import {
  Target, ChevronRight, Clock, Mail,
  Code2, Brain, Shield, Monitor, CheckCircle, BookOpen,
} from 'lucide-react';
import MobileMenu from '../MobileMenu';
import ContactDropdown from '../ContactDropdown';
import SocialFooter from '../SocialFooter';

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const courses = [
  {
    id: 'csharp',
    label: 'C# 완전 정복',
    icon: <Code2 size={18} />,
    level: '초급 → 고급',
    total: '48시간 (12주)',
    color: 'red',
    accent: 'text-red-400',
    activeBg: 'bg-red-500',
    badgeBg: 'bg-red-500/20',
    badgeText: 'text-red-300',
    summary: '객체지향 설계 원리부터 멀티스레드·네트워크·WinForms까지, C#의 전 영역을 실전 예제로 체득합니다. 단순 문법이 아닌 .NET 런타임이 어떻게 동작하는지를 이해하는 것이 핵심입니다.',
    tags: ['OOP', '멀티스레드', 'LINQ', '.NET', 'WinForms', '네트워크'],
    weeks: [
      { week: '1주', title: 'C# & .NET 런타임 구조 이해', topics: ['.NET CLR / GC 동작 원리', '값 타입 vs 참조 타입 — 메모리 관점', '스택·힙 레이아웃과 박싱/언박싱 비용'] },
      { week: '2주', title: '클래스 설계와 캡슐화', topics: ['접근 제어자와 캡슐화 원칙', '생성자·소멸자·Dispose 패턴', 'readonly / const / static 차이'] },
      { week: '3주', title: '상속과 다형성', topics: ['virtual / override / new 키워드 원리', '추상 클래스 vs 인터페이스 선택 기준', '리스코프 치환 원칙 실전 적용'] },
      { week: '4주', title: '제네릭과 컬렉션', topics: ['제네릭 타입 파라미터와 제약 조건', 'List·Dictionary·HashSet 내부 구조', 'IEnumerable / IQueryable 차이'] },
      { week: '5주', title: 'LINQ와 함수형 패턴', topics: ['람다식·익명 메서드·식 트리', 'LINQ 쿼리 실행 시점(지연 평가)', 'Select·Where·GroupBy 성능 분석'] },
      { week: '6주', title: '이벤트와 델리게이트', topics: ['delegate 원리와 멀티캐스트', 'event 키워드와 옵저버 패턴', 'Action / Func / Predicate 활용'] },
      { week: '7주', title: '비동기 프로그래밍 (async/await)', topics: ['Task / Thread / ThreadPool 차이', 'async·await 컴파일러 변환 과정', 'CancellationToken·Progress 패턴'] },
      { week: '8주', title: '멀티스레드 & 동기화', topics: ['Race condition·Deadlock 재현과 해결', 'lock·Monitor·Mutex·Semaphore', 'Concurrent 컬렉션 활용'] },
      { week: '9주', title: '파일 I/O & 직렬화', topics: ['Stream 계층 구조와 버퍼링 전략', 'JSON·XML·Binary 직렬화 비교', '파일 감시(FileSystemWatcher) 패턴'] },
      { week: '10주', title: '네트워크 프로그래밍', topics: ['TCP/UDP 소켓 원리', 'HttpClient 비동기 패턴', '간단한 채팅 서버 구현 실습'] },
      { week: '11주', title: 'WinForms UI 개발', topics: ['이벤트 루프와 메시지 펌프 원리', 'UI 스레드 안전 접근 (Invoke/BeginInvoke)', '커스텀 컨트롤 & 그래픽 GDI+'] },
      { week: '12주', title: '실전 프로젝트 & 코드리뷰', topics: ['미니 프로젝트 설계 → 구현', 'SOLID 원칙 적용 리뷰', '성능 프로파일링과 최적화'] },
    ],
  },
  {
    id: 'cpp',
    label: 'C/C++ 시스템',
    icon: <Code2 size={18} />,
    level: '중급 → 고급',
    total: '40시간 (10주)',
    color: 'orange',
    accent: 'text-orange-400',
    activeBg: 'bg-orange-500',
    badgeBg: 'bg-orange-500/20',
    badgeText: 'text-orange-300',
    summary: '메모리 구조와 포인터의 원리를 기반으로 운영체제가 실제로 동작하는 방식을 이해하며 코딩합니다. 삼성·SK 현업에서 다룬 시스템 프로그래밍 실전 예제를 활용합니다.',
    tags: ['포인터', '메모리관리', '소켓', '멀티프로세스', 'STL', '템플릿'],
    weeks: [
      { week: '1주', title: '메모리 레이아웃 완전 이해', topics: ['스택·힙·BSS·코드 세그먼트 구조', '포인터 연산과 배열의 관계', 'sizeof / alignof / 패딩 규칙'] },
      { week: '2주', title: '포인터 심화', topics: ['함수 포인터와 콜백 패턴', '이중 포인터·다차원 배열', 'void* / const 포인터 올바른 사용'] },
      { week: '3주', title: '동적 메모리 관리', topics: ['malloc/free vs new/delete 차이', '메모리 누수·댕글링 포인터 탐지', 'RAII 원칙과 스마트 포인터'] },
      { week: '4주', title: 'C++ 클래스와 복사 의미론', topics: ['복사 생성자·복사 대입 연산자', '이동 의미론(Move Semantics)과 rvalue', '규칙 3/5/0 선택 기준'] },
      { week: '5주', title: '템플릿 & STL', topics: ['함수 템플릿·클래스 템플릿 원리', 'vector·map·unordered_map 내부 구조', '반복자 패턴과 알고리즘 헤더'] },
      { week: '6주', title: '멀티프로세스 & IPC', topics: ['fork()·exec() 동작 원리', '파이프·공유메모리·메시지 큐', '좀비 프로세스 방지와 wait()'] },
      { week: '7주', title: '멀티스레드 (POSIX / C++11)', topics: ['pthread vs std::thread', 'mutex·condition_variable 사용법', '데드락 탐지 및 방지 패턴'] },
      { week: '8주', title: '소켓 프로그래밍', topics: ['TCP/IP 4계층 동작 원리', '블로킹·논블로킹·멀티플렉싱 (select)', '에코 서버 → 멀티클라이언트 서버 구현'] },
      { week: '9주', title: '시스템 프로그래밍 실전', topics: ['파일 디스크립터와 low-level I/O', '시그널 처리와 비동기 I/O', 'ioctl·mmap 활용 예제'] },
      { week: '10주', title: '실전 프로젝트 & 최적화', topics: ['간이 쉘 또는 네트워크 서버 구현', 'Valgrind / AddressSanitizer 활용', '캐시 친화적 코드 작성 원칙'] },
    ],
  },
  {
    id: 'python-ai',
    label: 'Python & AI 실무',
    icon: <Brain size={18} />,
    level: '초급 → 중급',
    total: '36시간 (9주)',
    color: 'blue',
    accent: 'text-blue-400',
    activeBg: 'bg-blue-500',
    badgeBg: 'bg-blue-500/20',
    badgeText: 'text-blue-300',
    summary: '파이썬 언어 원리부터 NumPy·Pandas 데이터 처리, 머신러닝 모델 구축까지 실무 데이터 분석 역량을 체계적으로 쌓습니다.',
    tags: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', '시각화', 'ML'],
    weeks: [
      { week: '1주', title: 'Python 인터프리터 원리', topics: ['CPython 바이트코드와 GIL', '변수·네임스페이스·스코프 규칙', '동적 타이핑과 덕 타이핑 이해'] },
      { week: '2주', title: '함수와 고급 문법', topics: ['일급 함수·클로저·데코레이터 원리', '*args / **kwargs 활용', '제너레이터·이터레이터 메모리 절약'] },
      { week: '3주', title: '클래스와 OOP', topics: ['__init__ / __repr__ / __str__ 매직 메서드', '다중 상속과 MRO', '데이터클래스·슬롯 최적화'] },
      { week: '4주', title: 'NumPy 핵심', topics: ['ndarray 메모리 레이아웃과 브로드캐스팅', '벡터화 연산 vs 반복문 성능 비교', '슬라이싱·인덱싱·마스킹 패턴'] },
      { week: '5주', title: 'Pandas 데이터 처리', topics: ['Series·DataFrame 내부 구조', 'groupby·pivot_table·merge 활용', '결측값 처리와 데이터 정제 전략'] },
      { week: '6주', title: '데이터 시각화', topics: ['Matplotlib 렌더링 구조 이해', 'Seaborn 통계 시각화 패턴', '인터랙티브 시각화 (Plotly 개요)'] },
      { week: '7주', title: '머신러닝 원리', topics: ['지도/비지도 학습 개념 구분', '선형 회귀·로지스틱 회귀 수학적 원리', '과적합·정규화·교차 검증'] },
      { week: '8주', title: 'Scikit-learn 실전', topics: ['Pipeline·ColumnTransformer 패턴', '결정 트리·랜덤 포레스트·SVM 비교', '하이퍼파라미터 튜닝 (GridSearchCV)'] },
      { week: '9주', title: '실전 프로젝트', topics: ['실제 데이터셋으로 EDA → 모델 구축 → 평가', '모델 저장·배포 기초 (joblib / pickle)', '결과 리포트 작성과 발표'] },
    ],
  },
  {
    id: 'security',
    label: '데이터 보안',
    icon: <Shield size={18} />,
    level: '중급',
    total: '32시간 (8주)',
    color: 'emerald',
    accent: 'text-emerald-400',
    activeBg: 'bg-emerald-500',
    badgeBg: 'bg-emerald-500/20',
    badgeText: 'text-emerald-300',
    summary: '암호화 알고리즘의 수학적 원리부터 실제 보안 솔루션 구현까지, 코드 레벨에서 보안을 이해합니다. SK 보안 솔루션 개발 경험 기반의 실전 예제를 활용합니다.',
    tags: ['암호화', 'PKI', '네트워크 보안', '취약점 분석', 'TLS', '해시'],
    weeks: [
      { week: '1주', title: '보안의 기본 원칙', topics: ['기밀성·무결성·가용성 (CIA Triad)', '인증·인가·접근 제어 개념', '보안 위협 모델링 기초'] },
      { week: '2주', title: '대칭키 암호화', topics: ['XOR·블록 암호·스트림 암호 원리', 'AES 동작 방식 (라운드·SBox)', 'ECB vs CBC vs GCM 모드 선택'] },
      { week: '3주', title: '비대칭키 & RSA', topics: ['공개키 암호화 수학적 원리 (모듈러 연산)', 'RSA 키 생성·암호화·서명 과정', 'ECC와 RSA 성능·보안 비교'] },
      { week: '4주', title: '해시와 무결성', topics: ['SHA-2·SHA-3 내부 구조', 'HMAC·PBKDF2·bcrypt 패스워드 해싱', '해시 충돌 공격과 방어'] },
      { week: '5주', title: 'PKI & 인증서', topics: ['X.509 인증서 구조 파악', 'CA 체인·CRL·OCSP 동작', '자가 서명 인증서 발급 실습'] },
      { week: '6주', title: 'TLS/SSL 프로토콜', topics: ['TLS 핸드셰이크 단계별 분석', 'Wireshark로 TLS 트래픽 관찰', 'mTLS·SNI·ALPN 개념'] },
      { week: '7주', title: '주요 취약점과 방어', topics: ['OWASP Top 10 원리와 재현', 'SQL 인젝션·XSS·CSRF 방어 코드', '보안 코드 리뷰 체크리스트'] },
      { week: '8주', title: '실전 프로젝트', topics: ['암호화 통신 채널 구현', '취약한 코드 → 보안 강화 리팩터링', '보안 감사 보고서 작성'] },
    ],
  },
  {
    id: 'algorithm',
    label: '알고리즘',
    icon: <Monitor size={18} />,
    level: '초급 → 중급',
    total: '28시간 (7주)',
    color: 'violet',
    accent: 'text-violet-400',
    activeBg: 'bg-violet-500',
    badgeBg: 'bg-violet-500/20',
    badgeText: 'text-violet-300',
    summary: '코딩 테스트를 넘어 실제 시스템 성능 최적화에 쓰이는 알고리즘 사고법을 훈련합니다. 왜 이 알고리즘을 선택해야 하는가에 집중합니다.',
    tags: ['정렬', '탐색', '그래프', 'DP', '시간복잡도', '자료구조'],
    weeks: [
      { week: '1주', title: '복잡도 분석', topics: ['Big-O·Big-Θ·Big-Ω 정의와 계산', '공간 복잡도와 트레이드오프', '최악·평균·최선 케이스 구분'] },
      { week: '2주', title: '배열·스택·큐·덱', topics: ['연속 메모리 vs 연결 리스트 선택 기준', '스택·큐 응용 문제 패턴', '슬라이딩 윈도우·투 포인터'] },
      { week: '3주', title: '해시·트리', topics: ['해시 테이블 충돌 해결 (체이닝·오픈 주소)', '이진 탐색 트리·AVL·Red-Black 개요', '트라이(Trie) 구조와 문자열 검색'] },
      { week: '4주', title: '정렬 알고리즘', topics: ['버블·선택·삽입 → 합병·퀵·힙 정렬 원리', '정렬 알고리즘 선택 기준 실전 가이드', '카운팅·기수·버킷 정렬'] },
      { week: '5주', title: '그래프 탐색', topics: ['BFS·DFS 구현과 응용 문제', '최단 경로 (다익스트라·벨만-포드)', '위상 정렬·사이클 탐지'] },
      { week: '6주', title: '동적 프로그래밍 (DP)', topics: ['메모이제이션 vs 타뷸레이션', 'LCS·LIS·배낭 문제 패턴 분석', 'DP 점화식 도출 훈련'] },
      { week: '7주', title: '실전 문제 풀이', topics: ['코딩 테스트 유형별 전략', '시뮬레이션·백트래킹·분할정복', '화이트보드 코딩과 시간 관리'] },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export default function CurriculumPage() {
  const [activeId, setActiveId] = useState(courses[0].id);
  const course = courses.find((c) => c.id === activeId)!;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Nav */}
      <nav className="relative flex items-center justify-between px-8 py-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-400 flex items-center gap-2">
          <Target className="text-red-500" size={24} />
          <span>이창현<span className="text-white">코딩연구소</span></span>
        </Link>
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

      {/* Hero */}
      <section className="px-8 py-20 md:py-24 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-300 transition">홈</Link>
          <ChevronRight size={14} />
          <span className="text-slate-300">실전 강의 커리큘럼</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-blue-400">
            실전 강의 커리큘럼
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          25년 현업 경험으로 설계된 주차별 커리큘럼. 무엇을, 왜, 어떤 순서로 배우는지 확인하세요.
        </p>
      </section>

      {/* Course Tabs */}
      <section className="px-8 max-w-6xl mx-auto mb-10">
        <div className="flex flex-wrap gap-3">
          {courses.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                activeId === c.id
                  ? `${c.activeBg} text-white border-transparent`
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
              }`}
            >
              {c.icon}
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Course Detail */}
      <section className="px-8 pb-20 max-w-6xl mx-auto">
        {/* Summary card */}
        <div className="bg-slate-800 rounded-3xl border border-slate-700 p-8 mb-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex-1 min-w-0">
              <h2 className={`text-2xl font-extrabold mb-2 ${course.accent}`}>{course.label}</h2>
              <p className="text-slate-400 leading-relaxed mb-5 max-w-2xl">{course.summary}</p>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium border border-slate-600 ${course.badgeBg} ${course.badgeText}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <div className="text-center p-4 bg-slate-900 rounded-2xl border border-slate-700 min-w-[80px]">
                <Clock size={16} className={`mx-auto mb-1 ${course.accent}`} />
                <div className="text-xs text-slate-400">{course.total}</div>
              </div>
              <div className="text-center p-4 bg-slate-900 rounded-2xl border border-slate-700 min-w-[80px]">
                <BookOpen size={16} className={`mx-auto mb-1 ${course.accent}`} />
                <div className="text-xs text-slate-400">{course.level}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly curriculum */}
        <h3 className="text-xl font-bold text-white mb-6">주차별 커리큘럼</h3>
        <div className="space-y-4">
          {course.weeks.map((w, i) => (
            <div
              key={w.week}
              className="grid md:grid-cols-[120px_1fr] gap-0 bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden"
            >
              {/* Week label */}
              <div className={`flex flex-col items-center justify-center p-5 ${course.badgeBg} border-b md:border-b-0 md:border-r border-slate-700`}>
                <span className={`text-xs font-bold uppercase tracking-widest ${course.accent} opacity-60`}>Week</span>
                <span className={`text-3xl font-extrabold ${course.accent}`}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              {/* Content */}
              <div className="p-6">
                <h4 className="font-bold text-white mb-3">{w.title}</h4>
                <ul className="space-y-1.5">
                  {w.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-slate-400 text-sm">
                      <CheckCircle size={14} className={`${course.accent} mt-0.5 flex-shrink-0`} />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 bg-slate-800/40">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">수강 신청 & 일정 문의</h2>
          <p className="text-slate-400 mb-8">
            관심 과정의 다음 기수 일정, 수강료, 온·오프라인 여부를 이메일로 문의해 주세요.
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
              전체 교육 서비스 보기
            </Link>
          </div>
        </div>
      </section>

      <SocialFooter />
    </div>
  );
}
