"use client";

import { useState } from "react";
import DogoCard from "../components/DogoCard";
import { motion, AnimatePresence } from "framer-motion";

export default function DogoPr() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" gap-6">
        <DogoCard onClick={() => setOpen(true)} />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-white p-10 overflow-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-lg font-bold"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-4">두고 프로젝트</h2>
            <p className="text-lg text-gray-700">
              호텔 예약 플랫폼으로, 사용자 인증과 예약 관리를 구현했습니다.
              React와 Next.js 기반이며, Supabase Auth와 Zustand를 활용하여
              로그인 및 상태 유지 기능을 구성했습니다.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
