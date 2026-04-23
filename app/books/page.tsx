"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowLeft, ExternalLink } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  subtitle?: string;
  publisher: string;
  year?: number;
  isbn?: string;
  pages?: number;
  price?: string;
  description: string;
  category: string;
  coverGradient: string;
  spineColor: string;
  isTranslation?: boolean;
  coverImage?: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "처음 만나는 C#",
    subtitle: "기초 문법부터 실전 개발까지",
    publisher: "혜지원",
    year: 2026,
    isbn: "9791167640963",
    price: "30,000원",
    description:
      "C#의 기초 문법부터 실전 개발까지 단계적으로 학습할 수 있는 입문서입니다. 처음 C#을 접하는 독자도 쉽게 따라올 수 있도록 구성되었으며, 핵심 문법 개념과 실용적인 예제를 통해 빠르게 실력을 쌓을 수 있습니다.",
    category: "C#",
    coverGradient: "from-violet-600 via-purple-700 to-indigo-800",
    spineColor: "bg-violet-900",
    coverImage: "/books/12.jpg",
  },
  {
    id: 2,
    title: "리액트의 정석 with 타입스크립트",
    publisher: "길벗캠퍼스",
    year: 2025,
    isbn: "9791140712939",
    pages: 488,
    price: "34,000원",
    description:
      "React와 TypeScript를 함께 배우는 체계적인 웹 개발 가이드. 프로그래밍 기초부터 OOP 원리, TypeScript 타입 시스템, React 훅·라우팅·Redux Toolkit 상태 관리까지 4단계로 구성되어 있습니다. 정적 타이핑이 코드 안정성에 미치는 영향과 함수형 컴포넌트 패턴에 OOP를 적용하는 방법을 중점적으로 다룹니다.",
    category: "React / TypeScript",
    coverGradient: "from-cyan-500 via-sky-600 to-blue-800",
    spineColor: "bg-cyan-900",
    coverImage: "/books/13.jpg",
  },
  {
    id: 3,
    title: "백엔드 입문자를 위한 모던 자바스크립트 & Node.js",
    publisher: "길벗캠퍼스",
    year: 2023,
    isbn: "9791140705009",
    pages: 600,
    price: "34,000원",
    description:
      "HTML/CSS 웹 UI부터 ES2015+ 최신 자바스크립트, Node.js 서버 구현, MySQL/MongoDB 연동, 인증 시스템, 클라우드 배포까지 백엔드 입문에 필요한 모든 것을 600페이지에 담았습니다. 프론트엔드와 백엔드를 하나의 흐름으로 학습할 수 있습니다.",
    category: "JavaScript / Node.js",
    coverGradient: "from-amber-400 via-orange-500 to-red-600",
    spineColor: "bg-amber-800",
    coverImage: "/books/5.jpg",
  },
  {
    id: 4,
    title: "나혼자 C언어",
    publisher: "디지털북스",
    year: 2021,
    isbn: "9788960883840",
    description:
      "포인터까지 쉽게 이해하는 C언어 독학 가이드. 다양한 예제와 삽화, 만화를 통해 C 프로그래밍을 쉽게 접근할 수 있도록 구성한 나혼자 시리즈 두 번째 책입니다. Hello World부터 동적 메모리 할당, 파일 I/O, 전처리기까지 16파트로 구성되어 있습니다.",
    category: "C언어",
    coverGradient: "from-emerald-500 via-teal-600 to-green-800",
    spineColor: "bg-emerald-900",
    coverImage: "/books/10.jpg",
  },
  {
    id: 5,
    title: "나혼자 파이썬",
    publisher: "디지털북스",
    year: 2020,
    isbn: "9788960883680",
    pages: 280,
    price: "15,000원",
    description:
      "파이썬 설치부터 객체지향 프로그래밍까지 단계별 독학 가이드. 초보자도 이해하기 쉬운 언어와 삽화로 파이썬을 배울 수 있는 나혼자 시리즈 첫 번째 책입니다. 저자의 인프런 무료 강의와 함께 학습하면 더욱 효과적입니다.",
    category: "Python",
    coverGradient: "from-blue-500 via-indigo-600 to-violet-700",
    spineColor: "bg-blue-900",
    coverImage: "/books/8.jpg",
  },
  {
    id: 6,
    title: "C# 프로그래밍 정석",
    publisher: "혜지원",
    year: 2020,
    isbn: "9788983793454",
    price: "23,000원",
    description:
      "Visual Studio 2019 기반의 C# 입문서. 기초 이론부터 실전 기능, 클래스·상속·오버로딩 등 객체지향 개념을 일상적인 예시로 쉽게 설명합니다. 20년 이상의 IT 개발 경험을 바탕으로 현장에서 실제로 쓰이는 핵심 개념을 중심으로 집필했습니다.",
    category: "C#",
    coverGradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    spineColor: "bg-rose-900",
    coverImage: "/books/7.jpg",
  },
  {
    id: 7,
    title: "내 생애 첫 번째 코딩 앱인벤터",
    publisher: "디지털북스",
    year: 2018,
    isbn: "9788960882195",
    pages: 374,
    price: "19,800원",
    description:
      "앱인벤터 2로 배우는 코딩 입문서. 블록 코딩으로 프로그래밍 개념, 알고리즘 기초, 로직을 배울 수 있습니다. 음성 인식 앱, 번역 앱, 게임, 센서 앱, AI 앱 등 다양한 프로젝트를 직접 만들어보며 코딩의 재미를 경험할 수 있습니다.",
    category: "앱인벤터",
    coverGradient: "from-orange-400 via-red-500 to-rose-600",
    spineColor: "bg-orange-900",
    coverImage: "/books/6.jpg",
  },
  {
    id: 8,
    title: "HTML5와 Java Script 기반의 웹 프로그래밍 정석",
    publisher: "혜지원",
    year: 2016,
    isbn: "9788983799067",
    description:
      "HTML/CSS, 자바스크립트 기초·이벤트, HTML5 기능을 3부로 나눠 학습하는 웹 프로그래밍 입문서입니다. 웹 표준 기술의 핵심을 체계적으로 학습할 수 있도록 구성되었습니다.",
    category: "HTML / JavaScript",
    coverGradient: "from-teal-400 via-cyan-500 to-sky-600",
    spineColor: "bg-teal-900",
    coverImage: "/books/4.jpg",
  },
  {
    id: 9,
    title: "API 프로그래밍",
    subtitle: "Win32 기반",
    publisher: "혜지원",
    year: 2011,
    isbn: "9788983796806",
    description:
      "Win32 기반의 Windows API 프로그래밍 가이드. Windows API의 핵심 개념과 실무 활용법을 체계적으로 다루며, Windows 시스템 프로그래밍의 기초를 탄탄히 다질 수 있습니다.",
    category: "Win32 / API",
    coverGradient: "from-slate-500 via-slate-600 to-slate-700",
    spineColor: "bg-slate-800",
    coverImage: "/books/2.jpg",
  },
  {
    id: 10,
    title: "Visual C++ 2008 기반의 MFC 시스템 프로그래밍",
    publisher: "혜지원",
    year: 2009,
    isbn: "9788983796042",
    price: "25,000원",
    description:
      "Visual C++ 2008을 이용한 MFC 시스템 프로그래밍 교재. Windows API나 C++ 사전 지식이 없는 초보자도 따라할 수 있도록 구성된 입문서로, MFC의 핵심 구조와 윈도우 프로그래밍의 기초를 다집니다.",
    category: "C++ / MFC",
    coverGradient: "from-zinc-500 via-stone-600 to-neutral-700",
    coverImage: "/books/1.jpg",
    spineColor: "bg-zinc-800",
  },
  {
    id: 13,
    title: "C++ 프로그래밍과 STL",
    publisher: "혜지원",
    description:
      "C++ 언어의 핵심 문법과 STL(Standard Template Library)을 체계적으로 학습하는 교재. 객체지향 프로그래밍 개념부터 템플릿, 컨테이너, 알고리즘, 반복자까지 STL의 핵심을 실전 예제와 함께 다룹니다.",
    category: "C++ / STL",
    coverGradient: "from-sky-500 via-blue-600 to-indigo-700",
    spineColor: "bg-sky-900",
    coverImage: "/books/3.jpg",
  },
  // 번역서
  {
    id: 11,
    title: "스파크 기반의 자연어 처리",
    publisher: "한빛미디어",
    description:
      "Apache Spark를 활용한 대규모 자연어 처리(NLP) 파이프라인 구축을 다루는 번역서. 텍스트 데이터 전처리, 피처 엔지니어링, 분류·클러스터링·토픽 모델링 등 실용적인 NLP 기법을 Spark 생태계와 함께 학습할 수 있습니다.",
    category: "NLP / Spark",
    coverGradient: "from-green-500 via-emerald-600 to-teal-700",
    spineColor: "bg-green-900",
    isTranslation: true,
    coverImage: "/books/9.jpg",
  },
  {
    id: 12,
    title: "데이터 익명화를 위한 파이프라인",
    publisher: "한빛미디어",
    description:
      "개인정보 보호 규정(GDPR 등)을 충족하는 데이터 익명화 파이프라인 설계·구현을 다루는 번역서. k-익명성, l-다양성, 차분 프라이버시 등 핵심 기법과 실무 파이프라인 구축 방법을 체계적으로 소개합니다.",
    category: "Data Privacy",
    coverGradient: "from-indigo-500 via-blue-600 to-sky-700",
    spineColor: "bg-indigo-900",
    isTranslation: true,
    coverImage: "/books/11.jpg",
  },
];


function getStoreUrls(book: Book) {
  const query = book.isbn ?? encodeURIComponent(`${book.title} 이창현`);
  return {
    kyobo: `https://search.kyobobook.co.kr/search?keyword=${query}`,
    yes24: `https://www.yes24.com/Product/Search?query=${query}`,
    aladin: `https://www.aladin.co.kr/search/wsearchresult.aspx?SearchWord=${query}`,
  };
}

function BookCover({ book }: { book: Book }) {
  const [imgFailed, setImgFailed] = useState(false);
  const imgUrl = book.coverImage ?? null;

  useEffect(() => { setImgFailed(false); }, [imgUrl]);

  if (imgUrl && !imgFailed) {
    return (
      <img
        src={imgUrl}
        alt={book.title}
        className="w-full h-full object-cover"
        onError={() => setImgFailed(true)}
      />
    );
  }

  return (
    <div className={`w-full h-full bg-gradient-to-br ${book.coverGradient} flex flex-col p-3 pl-4`}>
      <span className="text-[9px] font-bold uppercase tracking-widest text-white/60 mb-2 leading-none">
        {book.category}
      </span>
      <p className="text-white font-bold text-xs leading-snug flex-grow line-clamp-4">
        {book.title}
      </p>
      {book.subtitle && (
        <p className="text-white/60 text-[9px] mt-1 line-clamp-2">{book.subtitle}</p>
      )}
      <div className="mt-auto pt-2 border-t border-white/10">
        <p className="text-white/50 text-[9px]">{book.publisher}</p>
        <p className="text-white/80 text-[10px] font-semibold">{book.year}</p>
      </div>
    </div>
  );
}

function BookCard({ book, onClick }: { book: Book; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center text-left focus:outline-none"
    >
      {/* Book cover */}
      <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
        {/* Page edges (right side) */}
        <div className="absolute top-1 bottom-1 -right-1 w-3 bg-amber-50/10 rounded-r-sm" />
        <div className="absolute top-1 bottom-1 -right-0.5 w-1.5 bg-amber-50/5 rounded-r-sm" />

        {/* Main cover */}
        <div
          className="relative w-full h-full rounded-r-sm shadow-lg group-hover:shadow-2xl
            group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-300 overflow-hidden"
        >
          {/* Spine strip */}
          <div className={`absolute left-0 top-0 bottom-0 w-2.5 ${book.spineColor} opacity-60 z-10`} />

          <BookCover book={book} />

          {/* Gloss overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none z-20" />
        </div>
      </div>

      {/* Book title below (truncated) */}
      <p className="mt-2 text-xs text-slate-400 group-hover:text-white transition-colors text-center line-clamp-2 w-full leading-snug">
        {book.title}
      </p>
    </button>
  );
}

function BookModal({ book, onClose }: { book: Book; onClose: () => void }) {
  const urls = getStoreUrls(book);
  const [modalImgFailed, setModalImgFailed] = useState(false);
  const modalImgUrl = book.coverImage ?? null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 border border-slate-700 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover header */}
        <div className={`relative p-6 bg-gradient-to-br ${book.coverGradient} rounded-t-2xl overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30 pointer-events-none" />
          <div className="relative flex justify-between items-start gap-4">
            {/* Thumbnail */}
            {modalImgUrl && !modalImgFailed && (
              <div className="flex-shrink-0 w-20 rounded-sm shadow-xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  src={modalImgUrl}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  onError={() => setModalImgFailed(true)}
                />
              </div>
            )}
            <div className="flex-grow min-w-0">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/70 bg-black/20 px-2 py-0.5 rounded mb-3">
                {book.category}
              </span>
              <h2 className="text-xl font-extrabold text-white leading-tight">{book.title}</h2>
              {book.subtitle && (
                <p className="text-sm text-white/70 mt-1">{book.subtitle}</p>
              )}
              <p className="text-white/60 text-sm mt-2">{book.isTranslation ? "이창현 역" : "이창현 저"}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-full bg-black/25 hover:bg-black/50 text-white transition"
              aria-label="닫기"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Meta info */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <div>
              <span className="text-slate-500 text-xs uppercase tracking-wide">출판사</span>
              <p className="text-slate-200 font-medium mt-0.5">{book.publisher}</p>
            </div>
            {book.year && (
              <div>
                <span className="text-slate-500 text-xs uppercase tracking-wide">출판연도</span>
                <p className="text-slate-200 font-medium mt-0.5">{book.year}년</p>
              </div>
            )}
            {book.pages && (
              <div>
                <span className="text-slate-500 text-xs uppercase tracking-wide">페이지</span>
                <p className="text-slate-200 font-medium mt-0.5">{book.pages}쪽</p>
              </div>
            )}
            {book.price && (
              <div>
                <span className="text-slate-500 text-xs uppercase tracking-wide">정가</span>
                <p className="text-slate-200 font-medium mt-0.5">{book.price}</p>
              </div>
            )}
            {book.isbn && (
              <div className="col-span-2">
                <span className="text-slate-500 text-xs uppercase tracking-wide">ISBN</span>
                <p className="text-slate-400 font-mono text-xs mt-0.5">{book.isbn}</p>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs uppercase tracking-wide text-slate-500 mb-2">책 소개</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{book.description}</p>
          </div>

          {/* Store links */}
          <div>
            <h3 className="text-xs uppercase tracking-wide text-slate-500 mb-3">구매하기</h3>
            <div className="flex flex-col gap-2">
              <a
                href={urls.kyobo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 bg-red-700/80 hover:bg-red-600 text-white rounded-lg text-sm font-semibold transition"
              >
                <span>교보문고</span>
                <ExternalLink size={14} className="opacity-70" />
              </a>
              <a
                href={urls.yes24}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 bg-blue-700/80 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition"
              >
                <span>YES24</span>
                <ExternalLink size={14} className="opacity-70" />
              </a>
              <a
                href={urls.aladin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 bg-orange-700/80 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition"
              >
                <span>알라딘</span>
                <ExternalLink size={14} className="opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bookshelf({ books: shelfBooks, onSelect }: { books: Book[]; onSelect: (b: Book) => void }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-slate-800/40 to-slate-800/10 pointer-events-none" />
      <div className="relative p-8 md:p-12">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8">
          {shelfBooks.map((book) => (
            <BookCard key={book.id} book={book} onClick={() => onSelect(book)} />
          ))}
        </div>
        <div className="mt-8 h-3 rounded-full bg-gradient-to-r from-amber-900/60 via-amber-800/80 to-amber-900/60 shadow-md" />
        <div className="h-1 rounded-full bg-gradient-to-r from-amber-950/40 via-amber-900/60 to-amber-950/40 mt-0.5" />
      </div>
    </div>
  );
}

export default function BooksPage() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const authored = books.filter((b) => !b.isTranslation);
  const translated = books.filter((b) => b.isTranslation);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition text-sm font-medium"
        >
          <ArrowLeft size={16} />
          홈으로
        </Link>
        <span className="text-lg font-bold text-white">
          이창현 <span className="text-blue-400">도서 목록</span>
        </span>
        <div className="w-20" />
      </nav>

      <main className="max-w-6xl mx-auto px-8 py-16 space-y-20">
        {/* Page header */}
        <div className="text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Library</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">서재</h1>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            25년 개발 경력과 강의 현장의 경험을 담은{' '}
            <span className="text-white font-semibold">저서 {authored.length}권</span>과{' '}
            <span className="text-white font-semibold">번역서 {translated.length}권</span>.
            <br />
            원리 중심의 학습을 위한 지식을 담았습니다.
          </p>
        </div>

        {/* 저서 섹션 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
              저서
            </span>
            <span className="text-slate-500 text-sm">{authored.length}권</span>
          </div>
          <Bookshelf books={authored} onSelect={setSelectedBook} />
        </section>

        {/* 번역서 섹션 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
              번역서
            </span>
            <span className="text-slate-500 text-sm">{translated.length}권</span>
          </div>
          <Bookshelf books={translated} onSelect={setSelectedBook} />
        </section>

        {/* Hint */}
        <p className="text-center text-slate-600 text-xs">
          책 표지를 클릭하면 상세 정보와 구매 링크를 확인할 수 있습니다.
        </p>
      </main>

      {/* Book detail modal */}
      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}
