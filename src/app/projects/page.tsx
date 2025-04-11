"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DogoPr from "../dogoPr/page";
import DuodincoPrPage from "../duodingcoPr/page";

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
      const timer = setTimeout(() => setIndex(index + 1), 2500);
      return () => clearTimeout(timer);
    } else {
      const done = setTimeout(() => setIsFinished(true), 300);
      return () => clearTimeout(done);
    }
  }, [index]);

  return (
    <main className={`${!isFinished ? "h-screen overflow-hidden" : ""}`}>
      {!isFinished ? (
        <div className="relative w-full h-screen overflow-hidden ">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/intro.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/40">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-white text-3xl md:text-5xl font-bold text-center px-6"
              >
                {phrases[index]}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>
      ) : (
        // </div>
        <>
          <Header />
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-8 min-h-screen bg-white p-10 justify-center items-center"
          >
            <div>
              <h1 className="text-4xl flex w-full justify-center p-2">
                두고 프로젝트{" "}
              </h1>
              <DogoPr />
            </div>

            <div>
              <h1 className="text-4xl font-pretendard flex w-full p-2 justify-center">
                듀오딩코 프로젝트{" "}
              </h1>
              <DuodincoPrPage />
            </div>
          </motion.section>
        </>
      )}
      <Footer />
    </main>
  );
}
