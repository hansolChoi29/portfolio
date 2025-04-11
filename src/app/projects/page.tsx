"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DogoPr from "../dogoPr/page";
import DuodincoPrPage from "../duodingcoPr/page";

const slides = [
  {
    type: "phrase",
    text: "안녕하세요! 반가워요.",
  },
  {
    type: "phrase",
    text: "강력한 추진력과 문제 해결 능력을 가진 개발자",
  },
  {
    type: "phrase",
    text: "최한솔입니다.",
  },
  {
    type: "project",
    title: "두고 프로젝트",
    description: "두고 프로젝트를 진행하며 많은 경험을 쌓았습니다.",
    image: "/images/project1.png",
  },
  {
    type: "project",
    title: "듀오딩코 프로젝트",
    description: "듀오딩코 프로젝트를 통해 협업과 혁신을 경험했습니다.",
    image: "/images/project2.png",
  },
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const totalSlides = slides.length;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const vh = window.innerHeight;
    // 예를 들어, 한 화면(100vh)마다 한 슬라이드로 계산
    const newIndex = Math.min(Math.floor(scrollTop / vh), totalSlides - 1);
    if (newIndex !== index) {
      console.log("슬라이드 전환: ", newIndex);
      setIndex(newIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // 페이지 로드시 현재 스크롤 위치에 맞춰 한 번 실행
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);

  return (
    <main>
      <section
        className="relative"
        style={{ height: `${totalSlides * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center px-6"
            >
              {slides[index].type === "phrase" ? (
                <h1 className="text-white text-3xl md:text-5xl font-bold">
                  {slides[index].text}
                </h1>
              ) : (
                <div className="text-white">
                  <h1 className="text-3xl md:text-5xl font-bold">
                    {slides[index].title}
                  </h1>
                  <p className="mt-4 text-lg">{slides[index].description}</p>
                  <img
                    src={slides[index].image}
                    alt={slides[index].title}
                    className="mx-auto mt-4 w-full max-w-md rounded-lg shadow-lg"
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
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
              두고 프로젝트
            </h1>
            <DogoPr />
          </div>
          <div>
            <h1 className="text-4xl flex w-full justify-center p-2">
              듀오딩코 프로젝트
            </h1>
            <DuodincoPrPage />
          </div>
        </motion.section>
      </>
      <Footer />
    </main>
  );
}
