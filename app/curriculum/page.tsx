"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  ChevronRight, Clock, Mail,
  Code2, Brain, Shield, Monitor, CheckCircle, BookOpen,
  Cpu, Globe, Server,
} from 'lucide-react';
import MobileMenu from '../MobileMenu';
import ContactDropdown from '../ContactDropdown';
import SocialFooter from '../SocialFooter';

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const courses = [
  /* ── C언어 ─────────────────────────────────────────────────────── */
  {
    id: 'c',
    label: 'C언어',
    icon: <Code2 size={18} />,
    level: '입문 → 초급',
    total: '40시간 (10주)',
    book: '나혼자 C언어 (디지털북스, 2021)',
    color: 'amber',
    accent: 'text-amber-400',
    activeBg: 'bg-amber-500',
    badgeBg: 'bg-amber-500/20',
    badgeText: 'text-amber-300',
    summary: '저서 『나혼자 C언어』를 기반으로 C언어를 처음 접하는 분도 혼자 따라올 수 있도록 설계된 과정입니다. 변수·포인터·구조체까지 원리 중심으로 단계적으로 쌓아갑니다.',
    tags: ['변수·타입', '포인터', '배열', '함수', '구조체', '파일 I/O'],
    weeks: [
      { week: '1주', title: 'C언어 소개와 개발 환경', topics: ['C언어 역사와 활용 분야', '컴파일러 설치 및 Hello World', '소스 → 컴파일 → 실행 흐름 이해'] },
      { week: '2주', title: '변수와 데이터 타입', topics: ['정수형(int, long), 실수형(float, double)', 'char와 문자 처리, ASCII 코드', '상수(const)와 리터럴'] },
      { week: '3주', title: '입력과 출력', topics: ['printf 서식 지정자 완전 정리', 'scanf와 버퍼 입력 원리', '표준 입출력 스트림 이해'] },
      { week: '4주', title: '연산자와 조건문', topics: ['산술·비교·논리·비트 연산자', 'if-else, 중첩 조건문', 'switch-case 활용 패턴'] },
      { week: '5주', title: '반복문', topics: ['for, while, do-while 구조와 선택 기준', 'break·continue 활용', '중첩 반복문과 패턴 출력'] },
      { week: '6주', title: '배열', topics: ['1차원 배열 선언·초기화·접근', '2차원 배열과 행렬 표현', '배열과 문자열(char 배열)'] },
      { week: '7주', title: '함수', topics: ['함수 정의·선언·호출 원리', '매개변수 전달 방식 (값 복사)', '재귀 함수 원리와 스택 프레임'] },
      { week: '8주', title: '포인터', topics: ['주소(&)와 포인터 변수(*) 이해', '포인터와 배열의 관계', 'void 포인터·const 포인터'] },
      { week: '9주', title: '구조체', topics: ['struct 정의와 멤버 접근', 'typedef로 타입 별칭 만들기', '구조체 배열과 포인터'] },
      { week: '10주', title: '파일 입출력 & 실전 프로젝트', topics: ['fopen·fclose·fprintf·fscanf 활용', '바이너리 파일 vs 텍스트 파일', '간이 성적 관리 프로그램 구현'] },
    ],
  },

  /* ── C++ ────────────────────────────────────────────────────────── */
  {
    id: 'cpp',
    label: 'C++',
    icon: <Cpu size={18} />,
    level: '초급 → 중급',
    total: '40시간 (10주)',
    book: 'C++ 프로그래밍과 STL (혜지원, 2011)',
    color: 'orange',
    accent: 'text-orange-400',
    activeBg: 'bg-orange-500',
    badgeBg: 'bg-orange-500/20',
    badgeText: 'text-orange-300',
    summary: '저서 『C++ 프로그래밍과 STL』을 기반으로 C언어에서 객체지향으로 넘어가는 사고 전환을 돕고, 템플릿과 STL을 실전 수준으로 활용하는 것을 목표로 합니다.',
    tags: ['클래스·객체', '상속·다형성', '연산자 오버로딩', '템플릿', 'STL', '스마트 포인터'],
    weeks: [
      { week: '1주', title: 'C++와 C의 차이', topics: ['네임스페이스, 참조자(reference)', '함수 오버로딩과 디폴트 매개변수', 'new·delete vs malloc·free'] },
      { week: '2주', title: '클래스와 객체', topics: ['클래스 정의와 멤버 변수·함수', '생성자·소멸자 역할과 호출 순서', 'this 포인터 이해'] },
      { week: '3주', title: '캡슐화와 접근 제어', topics: ['private·public·protected', '게터·세터 설계 원칙', '인라인 함수와 성능'] },
      { week: '4주', title: '상속', topics: ['기반 클래스·파생 클래스 구조', '생성자·소멸자 호출 체인', 'protected 상속과 접근 범위'] },
      { week: '5주', title: '다형성과 가상 함수', topics: ['virtual 키워드와 vtable 원리', '순수 가상 함수와 추상 클래스', '업캐스팅·다운캐스팅'] },
      { week: '6주', title: '연산자 오버로딩', topics: ['멤버 함수·전역 함수 오버로딩', '복사 생성자와 대입 연산자', '이동 의미론(Move Semantics) 개요'] },
      { week: '7주', title: '템플릿', topics: ['함수 템플릿·클래스 템플릿 원리', '템플릿 특수화', 'STL이 템플릿으로 동작하는 방식'] },
      { week: '8주', title: 'STL 시퀀스 컨테이너', topics: ['vector·list·deque 내부 구조 비교', '반복자(iterator) 패턴', '시퀀스 컨테이너 선택 기준'] },
      { week: '9주', title: 'STL 연관 컨테이너', topics: ['map·set·multimap·unordered_map', '레드-블랙 트리 vs 해시 테이블', 'STL 알고리즘 (sort·find·for_each)'] },
      { week: '10주', title: '스마트 포인터 & 실전 프로젝트', topics: ['unique_ptr·shared_ptr·weak_ptr', 'RAII 원칙과 메모리 안전성', '객체지향 설계 미니 프로젝트'] },
    ],
  },

  /* ── C# ─────────────────────────────────────────────────────────── */
  {
    id: 'csharp',
    label: 'C#',
    icon: <Code2 size={18} />,
    level: '입문 → 초급',
    total: '48시간 (12주)',
    book: '처음 만나는 C# (혜지원, 2026)',
    color: 'red',
    accent: 'text-red-400',
    activeBg: 'bg-red-500',
    badgeBg: 'bg-red-500/20',
    badgeText: 'text-red-300',
    summary: '저서 『처음 만나는 C#』을 기반으로 비전공자도 부담 없이 시작할 수 있도록 설계된 과정입니다. C# 문법 기초부터 객체지향 설계, WinForms UI 개발까지 단계적으로 완성합니다.',
    tags: ['기본 문법', '클래스·OOP', '컬렉션', '예외 처리', 'LINQ 기초', 'WinForms'],
    weeks: [
      { week: '1주', title: 'C# 첫걸음', topics: ['개발 환경 설치 (Visual Studio)', 'Hello World 분석 — namespace·class·Main', '콘솔 입출력 Console.Write / ReadLine'] },
      { week: '2주', title: '변수와 데이터 타입', topics: ['int·double·bool·string·char', '암시적 타입(var)과 타입 추론', '형변환 — 암시적·명시적·Convert 클래스'] },
      { week: '3주', title: '연산자와 조건문', topics: ['산술·비교·논리·삼항 연산자', 'if-else if-else 구조', 'switch-case 패턴 매칭'] },
      { week: '4주', title: '반복문', topics: ['for·while·do-while 구조와 선택', 'foreach와 컬렉션 순회', 'break·continue·return 흐름 제어'] },
      { week: '5주', title: '배열과 컬렉션', topics: ['1·2차원 배열 선언과 초기화', 'List<T>·Dictionary<K,V> 활용', 'Array vs List 선택 기준'] },
      { week: '6주', title: '메서드', topics: ['메서드 정의·호출·반환값', '오버로딩과 선택적 매개변수', '재귀 메서드 이해'] },
      { week: '7주', title: '클래스와 객체', topics: ['클래스 정의, 필드·프로퍼티·메서드', '생성자 작성과 초기화', 'new 키워드와 객체 참조'] },
      { week: '8주', title: '상속과 다형성', topics: ['기반 클래스·파생 클래스 관계', 'virtual·override로 다형성 구현', 'base 키워드로 부모 멤버 접근'] },
      { week: '9주', title: '인터페이스와 추상 클래스', topics: ['interface 정의와 구현 이유', 'abstract class vs interface 선택', '인터페이스 다중 구현 패턴'] },
      { week: '10주', title: '예외 처리와 파일 I/O', topics: ['try-catch-finally 구조', '사용자 정의 예외 클래스', 'StreamReader·StreamWriter 파일 처리'] },
      { week: '11주', title: 'WinForms UI 개발', topics: ['폼·버튼·텍스트박스·레이블 배치', '이벤트 처리 (Click·KeyPress)', '다이얼로그·메뉴·툴바 활용'] },
      { week: '12주', title: 'LINQ 맛보기 & 실전 프로젝트', topics: ['LINQ 쿼리 식 기초 (from·where·select)', '미니 프로젝트 설계 → 구현 → 발표', '코드 리뷰와 개선 사항 적용'] },
    ],
  },

  /* ── Python ─────────────────────────────────────────────────────── */
  {
    id: 'python',
    label: 'Python',
    icon: <Brain size={18} />,
    level: '입문 → 초급',
    total: '36시간 (12주)',
    book: '나혼자 파이썬 (디지털북스, 2020)',
    color: 'blue',
    accent: 'text-blue-400',
    activeBg: 'bg-blue-500',
    badgeBg: 'bg-blue-500/20',
    badgeText: 'text-blue-300',
    summary: '저서 『나혼자 파이썬』을 기반으로 완전 입문자도 혼자 학습할 수 있도록 설계된 과정입니다. 파이썬 기본 문법부터 파일 처리, 클래스, 웹 크롤링 실습까지 커버합니다.',
    tags: ['기본 문법', '리스트·딕셔너리', '함수', '클래스·OOP', '모듈', '웹 크롤링'],
    weeks: [
      { week: '1주', title: '파이썬 소개와 환경 설정', topics: ['파이썬의 특징과 활용 분야', 'Python 설치, VS Code 환경 구성', '첫 번째 프로그램 — print와 기본 실행'] },
      { week: '2주', title: '변수와 자료형', topics: ['정수·실수·문자열·불리언', '변수 선언과 동적 타이핑', 'type()·isinstance() 활용'] },
      { week: '3주', title: '문자열 다루기', topics: ['인덱싱·슬라이싱·문자열 메서드', 'f-string과 포매팅', '문자열 분리(split)·결합(join)'] },
      { week: '4주', title: '연산자와 조건문', topics: ['산술·비교·논리·멤버십 연산자', 'if-elif-else 구조', '중첩 조건문과 삼항 표현식'] },
      { week: '5주', title: '반복문', topics: ['for·while 문 구조와 선택', 'range()·enumerate()·zip() 활용', 'break·continue·else 절'] },
      { week: '6주', title: '리스트와 튜플', topics: ['리스트 생성·인덱싱·슬라이싱', '리스트 메서드 (append·sort·remove)', '튜플과 불변성, 언패킹'] },
      { week: '7주', title: '딕셔너리와 집합', topics: ['딕셔너리 키·값 구조와 메서드', 'set 집합 연산 (교집합·합집합)', '딕셔너리 컴프리헨션'] },
      { week: '8주', title: '함수', topics: ['def로 함수 정의·호출', '기본값 매개변수·키워드 인수', 'lambda 함수와 map·filter·sorted'] },
      { week: '9주', title: '모듈과 패키지', topics: ['import 방식 비교 (import·from·as)', '표준 라이브러리 (math·random·datetime)', 'pip로 외부 패키지 설치'] },
      { week: '10주', title: '클래스와 객체지향', topics: ['클래스 정의·__init__·self', '인스턴스 변수와 메서드', '상속과 메서드 오버라이딩'] },
      { week: '11주', title: '파일 처리와 예외', topics: ['파일 열기·읽기·쓰기 (with open)', 'try-except-finally 구조', '사용자 정의 예외 클래스'] },
      { week: '12주', title: '웹 크롤링 실전 프로젝트', topics: ['requests·BeautifulSoup 기초', '웹 페이지 데이터 수집·파싱', 'CSV 저장 및 간단한 데이터 시각화'] },
    ],
  },

  /* ── 프론트엔드 ─────────────────────────────────────────────────── */
  {
    id: 'frontend',
    label: '프론트엔드',
    icon: <Globe size={18} />,
    level: '초급 → 중급',
    total: '48시간 (12주)',
    book: '프론트엔드 입문자를 위한 리액트의 정석 with 타입스크립트 (길벗캠퍼스, 2025)',
    color: 'emerald',
    accent: 'text-emerald-400',
    activeBg: 'bg-emerald-500',
    badgeBg: 'bg-emerald-500/20',
    badgeText: 'text-emerald-300',
    summary: '저서 『프론트엔드 입문자를 위한 리액트의 정석 with 타입스크립트』를 기반으로 TypeScript 기초부터 React 핵심 패턴, 상태 관리, API 연동까지 현업 수준의 프론트엔드 개발 역량을 갖춥니다.',
    tags: ['TypeScript', 'React', 'Hooks', 'Context API', 'React Router', 'API 연동'],
    weeks: [
      { week: '1주', title: '개발 환경과 TypeScript 기초', topics: ['Node.js·Vite 설치 및 프로젝트 생성', 'TypeScript란? 타입 시스템의 필요성', '기본 타입 — string·number·boolean·any'] },
      { week: '2주', title: 'TypeScript 심화', topics: ['인터페이스와 타입 별칭 (interface·type)', '제네릭 기초 (Array<T>, 함수 제네릭)', 'union·intersection·타입 가드'] },
      { week: '3주', title: 'React 기초 — JSX와 컴포넌트', topics: ['JSX 문법과 React 렌더링 원리', '함수형 컴포넌트 구조', 'Props 전달과 타입 정의'] },
      { week: '4주', title: 'State와 이벤트 처리', topics: ['useState 훅으로 상태 관리', '이벤트 핸들러 작성 (onClick·onChange)', '제어 컴포넌트 vs 비제어 컴포넌트'] },
      { week: '5주', title: '리스트와 조건부 렌더링', topics: ['배열 map으로 리스트 렌더링', 'key prop의 역할과 올바른 사용', '조건부 렌더링 패턴 (&&·삼항)'] },
      { week: '6주', title: 'useEffect와 사이드 이펙트', topics: ['useEffect 동작 원리와 의존성 배열', 'API 데이터 가져오기 패턴', '클린업 함수와 메모리 누수 방지'] },
      { week: '7주', title: '고급 Hooks', topics: ['useCallback·useMemo 최적화 원리', 'useRef로 DOM 접근과 값 유지', '커스텀 훅 (Custom Hook) 설계'] },
      { week: '8주', title: 'Context API와 상태 공유', topics: ['createContext·Provider·useContext', '전역 상태 관리 필요성과 설계', 'Props Drilling 문제 해결'] },
      { week: '9주', title: 'React Router', topics: ['SPA 라우팅 개념과 BrowserRouter', '동적 라우팅 (:id 파라미터)', 'useNavigate·useParams·Link 컴포넌트'] },
      { week: '10주', title: 'API 연동 & 폼 처리', topics: ['fetch·axios로 REST API 호출', '로딩·에러 상태 처리 패턴', '폼 입력 검증과 제출 처리'] },
      { week: '11주', title: '스타일링', topics: ['CSS Modules로 컴포넌트 스타일 분리', 'Tailwind CSS 유틸리티 클래스 활용', '반응형 레이아웃 설계'] },
      { week: '12주', title: '실전 프로젝트', topics: ['기획·컴포넌트 설계 → 구현', 'React Query 또는 Zustand 연동', '백엔드 API 연동 풀스택 완성'] },
    ],
  },

  /* ── 백엔드 ─────────────────────────────────────────────────────── */
  {
    id: 'backend',
    label: '백엔드',
    icon: <Server size={18} />,
    level: '초급 → 중급',
    total: '44시간 (11주)',
    book: '백엔드 입문자를 위한 모던자바스크립트 & Node.js (길벗캠퍼스, 2023)',
    color: 'indigo',
    accent: 'text-indigo-400',
    activeBg: 'bg-indigo-500',
    badgeBg: 'bg-indigo-500/20',
    badgeText: 'text-indigo-300',
    summary: '저서 『백엔드 입문자를 위한 모던자바스크립트 & Node.js』를 기반으로 JavaScript ES6+ 문법부터 Express.js REST API 설계, MongoDB 연동, JWT 인증, 배포까지 백엔드 개발 전반을 커버합니다.',
    tags: ['ES6+', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT 인증'],
    weeks: [
      { week: '1주', title: 'JavaScript ES6+ 핵심', topics: ['let·const·화살표 함수·템플릿 리터럴', '구조 분해 할당·스프레드·나머지 매개변수', '모듈 시스템 (import·export)'] },
      { week: '2주', title: '비동기 프로그래밍', topics: ['콜백 함수의 한계와 콜백 지옥', 'Promise — then·catch·chaining', 'async·await 문법과 에러 처리'] },
      { week: '3주', title: 'Node.js 기초', topics: ['Node.js 이벤트 루프·비차단 I/O 원리', '기본 내장 모듈 (fs·path·http·os)', 'npm 패키지 관리와 package.json'] },
      { week: '4주', title: 'Express.js 기초', topics: ['서버 생성과 기본 라우팅', '미들웨어 개념과 실행 순서', '정적 파일 서빙과 요청·응답 객체'] },
      { week: '5주', title: 'REST API 설계', topics: ['REST 아키텍처 원칙 6가지', 'HTTP 메서드 (GET·POST·PUT·DELETE)', 'HTTP 상태 코드와 응답 설계 원칙'] },
      { week: '6주', title: 'MongoDB와 Mongoose', topics: ['NoSQL vs RDBMS 선택 기준', 'Mongoose 스키마·모델 설계', 'CRUD 쿼리 (find·create·update·delete)'] },
      { week: '7주', title: '라우터 분리와 MVC 구조', topics: ['express.Router()로 라우터 모듈화', 'Controller·Model·Router 역할 분리', 'RESTful 리소스 중심 설계'] },
      { week: '8주', title: '인증과 보안', topics: ['bcrypt로 패스워드 해싱', 'JWT 발급·검증 미들웨어 구현', '환경 변수(.env)와 보안 정보 관리'] },
      { week: '9주', title: '에러 처리와 데이터 검증', topics: ['전역 에러 처리 미들웨어', 'express-validator로 입력 검증', '커스텀 에러 클래스 설계'] },
      { week: '10주', title: '파일 업로드와 기능 확장', topics: ['multer로 파일 업로드 처리', '페이지네이션·정렬·검색 API', 'CORS 설정과 프론트엔드 연동'] },
      { week: '11주', title: '배포 & 실전 프로젝트', topics: ['PM2로 프로세스 관리', '클라우드 배포 (Railway·Render)', '프론트엔드와 연동하는 풀스택 프로젝트 완성'] },
    ],
  },

  /* ── 알고리즘 ───────────────────────────────────────────────────── */
  {
    id: 'algorithm',
    label: '알고리즘',
    icon: <Monitor size={18} />,
    level: '초급 → 중급',
    total: '28시간 (7주)',
    book: 'SK 하이닉스 재직자 대상 직접 출제 코딩 테스트 문제 기반',
    color: 'violet',
    accent: 'text-violet-400',
    activeBg: 'bg-violet-500',
    badgeBg: 'bg-violet-500/20',
    badgeText: 'text-violet-300',
    summary: '코딩 테스트를 넘어 실제 시스템 성능 최적화에 쓰이는 알고리즘 사고법을 훈련합니다. SK 하이닉스 재직자 대상 코딩 테스트를 직접 출제한 경험을 바탕으로, 왜 이 알고리즘을 선택해야 하는가에 집중합니다.',
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

  /* ── 데이터 보안 ─────────────────────────────────────────────────── */
  {
    id: 'security',
    label: '데이터 보안',
    icon: <Shield size={18} />,
    level: '중급',
    total: '32시간 (8주)',
    book: '데이터 익명화를 위한 파이프라인 (번역, 한빛미디어, 2022)',
    color: 'rose',
    accent: 'text-rose-400',
    activeBg: 'bg-rose-500',
    badgeBg: 'bg-rose-500/20',
    badgeText: 'text-rose-300',
    summary: '유해차단시스템·문서보안시스템 현업 개발 경험과 번역서 『데이터 익명화를 위한 파이프라인』을 바탕으로 암호화 원리부터 실제 보안 솔루션 구현까지 코드 레벨에서 보안을 이해합니다.',
    tags: ['암호화', 'PKI', '네트워크 보안', '취약점 분석', 'TLS', '데이터 익명화'],
    weeks: [
      { week: '1주', title: '보안의 기본 원칙', topics: ['기밀성·무결성·가용성 (CIA Triad)', '인증·인가·접근 제어 개념', '보안 위협 모델링 기초'] },
      { week: '2주', title: '대칭키 암호화', topics: ['XOR·블록 암호·스트림 암호 원리', 'AES 동작 방식 (라운드·SBox)', 'ECB vs CBC vs GCM 모드 선택'] },
      { week: '3주', title: '비대칭키 & RSA', topics: ['공개키 암호화 수학적 원리 (모듈러 연산)', 'RSA 키 생성·암호화·서명 과정', 'ECC와 RSA 성능·보안 비교'] },
      { week: '4주', title: '해시와 무결성', topics: ['SHA-2·SHA-3 내부 구조', 'HMAC·PBKDF2·bcrypt 패스워드 해싱', '해시 충돌 공격과 방어'] },
      { week: '5주', title: 'PKI & 인증서', topics: ['X.509 인증서 구조 파악', 'CA 체인·CRL·OCSP 동작', '자가 서명 인증서 발급 실습'] },
      { week: '6주', title: 'TLS/SSL 프로토콜', topics: ['TLS 핸드셰이크 단계별 분석', 'Wireshark로 TLS 트래픽 관찰', 'mTLS·SNI·ALPN 개념'] },
      { week: '7주', title: '주요 취약점과 방어', topics: ['OWASP Top 10 원리와 재현', 'SQL 인젝션·XSS·CSRF 방어 코드', '보안 코드 리뷰 체크리스트'] },
      { week: '8주', title: '데이터 익명화 & 실전 프로젝트', topics: ['데이터 익명화 기법 (마스킹·가명화·일반화)', '개인정보 보호법과 GDPR 준수 설계', '보안 채널 구현 및 감사 보고서 작성'] },
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
      <nav className="relative flex items-center justify-between px-4 sm:px-8 py-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-400 flex items-center gap-2">
          <Image src="/logo.png" alt="로고" width={32} height={32} className="object-contain" />
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
      <section className="px-4 sm:px-8 py-20 md:py-24 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-300 transition">홈</Link>
          <ChevronRight size={14} />
          <span className="text-slate-300">실전 강의 커리큘럼</span>
        </div>
        <h1 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-blue-400">
            실전 강의 커리큘럼
          </span>
        </h1>
        <p className="text-base sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
          20여년 현업 경험과 저자 직강으로 설계된 주차별 커리큘럼. 무엇을, 왜, 어떤 순서로 배우는지 확인하세요.
        </p>
      </section>

      {/* Course Tabs */}
      <section className="px-4 sm:px-8 max-w-6xl mx-auto mb-10">
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
      <section className="px-4 sm:px-8 pb-20 max-w-6xl mx-auto">
        {/* Summary card */}
        <div className="bg-slate-800 rounded-3xl border border-slate-700 p-4 sm:p-8 mb-8 md:mb-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h2 className={`text-2xl font-extrabold ${course.accent}`}>{course.label}</h2>
              </div>
              <p className={`text-xs font-medium mb-4 ${course.accent} opacity-70`}>
                📚 {course.book}
              </p>
              <p className="text-slate-400 leading-relaxed mb-5">{course.summary}</p>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium border border-slate-600 ${course.badgeBg} ${course.badgeText}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 flex-shrink-0">
              <div className="text-center p-3 sm:p-4 bg-slate-900 rounded-2xl border border-slate-700 min-w-[72px] sm:min-w-[80px]">
                <Clock size={16} className={`mx-auto mb-1 ${course.accent}`} />
                <div className="text-xs text-slate-400">{course.total}</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-slate-900 rounded-2xl border border-slate-700 min-w-[72px] sm:min-w-[80px]">
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
              className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-0 bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden"
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
      <section className="px-4 sm:px-8 py-20 bg-slate-800/40">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">수강 신청 & 일정 문의</h2>
          <p className="text-slate-400 mb-8">
            관심 과정의 다음 기수 일정, 수강료, 온·오프라인 여부를 이메일로 문의해 주세요.
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
              전체 교육 서비스 보기
            </Link>
          </div>
        </div>
      </section>

      <SocialFooter />
    </div>
  );
}
