"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DuodincoCard from "../components/DudincoCard";
import ReactDOM from "react-dom";

export default function DuodincoPrPage() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const modalContent = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-white p-10 overflow-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative flex items-center justify-center py-8">
            <h2 className="text-3xl font-bold">duodingco</h2>
            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 text-lg font-bold"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col  items-center ">
            <div className="flex flex-col  text-lg text-gray-700 w-[800px]">
              <section className="border px-4 py-4 font-bold">
                <p>
                  Frontend : React, Next.js, TypeScript, Tailwind CSS, Zustand
                </p>
                <p>Data Fetching : React Query Database : Supabase</p>
                <p>패키지매니저 : npm</p>
              </section>

              <section>
                <h1 className="my-24 font-bold text-3xl w-full flex justify-center">
                  주요 역할
                </h1>
                <div className="border-b pb-4">
                  <p className="font-bold text-xl">단어 학습 기능 제공</p>
                  <p>
                    사용자가 단어를 학습할 수 있는 기능을 카드 형식으로 제공
                  </p>
                </div>
                <div className="border-b py-4">
                  <p className="font-bold text-xl">북마크 관리</p>
                  <p className="text-base">
                    사용자가 게시글을 북마크하여 나중에 다시 학습할 수 있도록
                    하고, 북마크 상태를 실시간으로 업데이트
                  </p>
                </div>
                <div className="border-b py-4">
                  <p className="font-bold text-xl">
                    세션 관리 및 인증 시스템 구현
                  </p>
                  <p className="text-base">
                    Supabase를 활용하여 로그인 상태를 유지하고, 인증되지 않은
                    사용자는 로그인 페이지로 리디렉션
                  </p>
                </div>
              </section>

              <section className="py-24 ">
                <h1 className="font-bold text-3xl w-full flex justify-center">
                  진행 과정 : 학습 리스트 페이지 (LearnListPage)
                </h1>
                <div className=" border-b py-4 text-base">
                  사용자가 학습 카드 리스트에서 단어 목록, 작성자 정보, 단어
                  개수를 확인하고, Supabase Auth와 Zustand를 활용하여 로그인 후
                  세션을 관리하며, 동적 라우팅을 통해 상세 페이지로 이동할 수
                  있도록 구현 북마크 기능을 통해 사용자가 즐겨찾기를 추가하거나
                  삭제하여 개인 학습 관리 API를 통한 데이터 패칭 및 JSON 파싱과
                  함께, 로딩 및 에러 상태를 관리하여 사용자 경험을 극대화
                </div>
              </section>

              <section className="py-24 ">
                <h1 className="font-bold text-3xl w-full flex justify-center">
                  진행 과정 : 상세 페이지(LearnDetailPage)
                </h1>
                <div className=" border-b py-4 text-base">
                  북마크 기능과 작성자 정보를 통해 상세 정보와 사용자 프로필을
                  연동 동적 세그먼트를 사용하여 URL 기반의 상세 정보를 제공하고,
                  비동기 데이터 패칭 및 에러 핸들링을 통해 안정성을 확보하며,
                  리액트 훅과 상태 업데이트를 통해 UI 반응성을 강화 단어와 뜻을
                  3D 효과로 전환하여 학습 카드에 플립 카드 애니메이션을 적용해
                  집중도를 향상시키고, 키보드 이벤트를 활용하여 좌우 화살표와
                  스페이스바로 카드 탐색 및 뒤집기를 지원
                </div>
              </section>

              <section className="py-24 ">
                <h1 className="font-bold text-3xl w-full flex justify-center">
                  진행 과정 : 핫러닝 페이지 (HotLearningPage)
                </h1>
                <div className=" py-4 text-base">
                  최신 단어 집합을 실시간으로 업데이트하여 사용자가 최신 등록된
                  단어를 한눈에 확인할 수 있도록 하며, 카드형 UI를 통해 작성자
                  정보, 단어 개수, 북마크 상태 등 다양한 정보를 직관적으로 표시
                  Supabase를 활용하여 실시간으로 북마크 및 사용자 정보를
                  동기화하고, 사용자 맞춤형 컨텐츠 제공을 통해 동기부여 반응형
                  디자인을 적용하여 다양한 디바이스에서 지원하며, API 호출 후
                  상태 업데이트를 통해 데이터 동기화 처리를 안정적으로 수행
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
  return (
    <>
      <div className=" gap-6">
        <DuodincoCard onClick={() => setOpen(true)} />
      </div>
      {mounted && ReactDOM.createPortal(modalContent, document.body)}
    </>
  );
}
