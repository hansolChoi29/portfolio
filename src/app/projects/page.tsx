"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "../components/SlidesMockData";
import DuodincoPrPage from "../duodingcoPr/page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DogoPr from "../dogoPr/page";
import Image from "next/image";

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const totalSlides = slides.length;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const vh = window.innerHeight;
    // 한 화면(100vh)마다 한 슬라이드로 계산 (최대 totalSlides - 1)
    // 1vh는 현재 브라우저 창 높이의 1%
    const newIndex = Math.min(Math.floor(scrollTop / vh), totalSlides - 1);
    if (newIndex !== index) {
      console.log("슬라이드 전환: ", newIndex);
      setIndex(newIndex);
    }
    // 스크롤 영역 전체(예: totalSlides * vh)를 넘으면 헤더가 나타나도록 설정
    if (scrollTop >= totalSlides * vh) {
      if (!headerVisible) setHeaderVisible(true);
    } else {
      if (headerVisible) setHeaderVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // 페이지 로드시 한 번 실행
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index, headerVisible]);

  return (
    <main>
      <section
        className="relative"
        style={{ height: `${(totalSlides + 1) * 100}vh` }}
      >
        <motion.div
          className="sticky top-0 h-screen flex items-center justify-center"
          animate={{ backgroundColor: headerVisible ? "#f6f6f6" : "#000000" }}
          transition={{ duration: 0.4 }}
        >
          {!headerVisible && (
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="text-center px-6"
              >
                {slides[index].type === "phrase" ? (
                  <h1 className="text-white text-2xl md:text-5xl font-bold">
                    {slides[index].text}
                  </h1>
                ) : (
                  <div className="text-white">
                    {slides[index].title && (
                      <h1 className="text-3xl md:text-5xl font-bold">
                        {slides[index].title}
                      </h1>
                    )}
                    <p className="mt-4 text-lg">{slides[index].description}</p>

                    {Array.isArray(slides[index].image) ? (
                      slides[index].image.map((img, i) => (
                        <Image
                          key={i}
                          src={img}
                          alt={`${slides[index].title || "Project"} ${i + 1}`}
                          width={700}
                          height={500}
                          className="mx-auto mt-4 rounded-lg shadow-lg"
                        />
                      ))
                    ) : (
                      <Image
                        src={slides[index].image!}
                        alt={slides[index].title || "Project"}
                        width={1000}
                        height={500}
                        className="mx-auto mt-4 rounded-lg shadow-lg"
                      />
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
          {index === 0 && !headerVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute bottom-10 left-0 right-0 text-center text-white text-lg animate-bounce"
            >
              스크롤을 내려주세요
            </motion.div>
          )}
        </motion.div>
      </section>
      <>
        {/* 헤더: 스크롤 영역 전체를 넘으면 애니메이션으로 나타남 */}
        <AnimatePresence>
          {headerVisible && (
            <motion.div
              className="sticky top-0 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Header />
            </motion.div>
          )}
        </AnimatePresence>
        {/* 프로젝트 섹션: 뷰포트의 약 50%가 보이면 나타남 */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="flex flex-col  md:flex-row gap-8 min-h-screen bg-[#202020] p-10 justify-center items-center"
        >
          <div>
            <DogoPr />
          </div>
          <div>
            <DuodincoPrPage />
          </div>
        </motion.section>
      </>
      <Footer />
    </main>
  );
}
