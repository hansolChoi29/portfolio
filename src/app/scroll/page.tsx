"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const phrases = [
  "안녕하세요! 반가워요.",
  "강력한 추진력과 문제 해결 능력을 가진 개발자",
  "최한솔입니다.",
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (index < phrases.length) {
      const timer = setTimeout(() => setIndex(index + 1), 2000);
      return () => clearTimeout(timer);
    } else {
      const done = setTimeout(() => setIsFinished(true), 300);
      return () => clearTimeout(done);
    }
  }, [index]);

  return (
    <main className={`${!isFinished ? "h-screen overflow-hidden" : ""}`}>
      {!isFinished ? (
        <div className="bg-black h-screen w-full flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute text-white text-3xl md:text-5xl font-bold text-center px-6"
            >
              {phrases[index]}
            </motion.h1>
          </AnimatePresence>
        </div>
      ) : (
        <>
          <Header />
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-white p-10"
          >
            <h1 className="text-4xl ">프론트엔드 개발자 </h1>
            <h1 className="text-4xl font-pretendard">프론트엔드 개발자 </h1>
          </motion.section>
        </>
      )}
      <Footer />
    </main>
  );
}
