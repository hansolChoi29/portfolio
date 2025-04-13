"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DuodincoPrPage from "../duodingcoPr/Modal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DogoPr from "../dogoPr/Modal";
import Image from "next/image";
import { slides } from "../SlidesMockData";
import ToolsModal from "../components/ToolsModal";

export default function ProjectsPage() {
  const [isToolsModalOpen, setIsToolsModalOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const closeToolsModal = () => setIsToolsModalOpen(false);
  const openToolsModal = () => setIsToolsModalOpen(true);
  const [index, setIndex] = useState(0);
  const totalSlides = slides.length;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const vh = window.innerHeight;
    // 한 화면(100vh)마다 한 슬라이드로 계산 (최대 totalSlides - 1)
    // 1vh는 현재 브라우저 창 높이의 1%
    const newIndex = Math.min(Math.floor(scrollTop / vh), totalSlides - 1);
    if (newIndex !== index) {
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
                    {/* 이미지 렌더링: image가 배열이면 모두 map, 단일 문자열이면 그대로 렌더링 */}
                    {Array.isArray(slides[index].image) ? (
                      slides[index].image.map((img, i) => (
                        <Image
                          key={i}
                          src={img}
                          alt={`${slides[index].title || "Project"} ${i + 1}`}
                          width={700}
                          height={500}
                          style={{ height: "auto" }}
                          className="mx-auto mt-4 rounded-lg shadow-lg w-full max-w-[700px]"
                        />
                      ))
                    ) : (
                      <Image
                        src={slides[index].image!}
                        alt={slides[index].title || "Project"}
                        width={1000}
                        height={500}
                        style={{ height: "auto" }}
                        className="mx-auto mt-4 rounded-lg shadow-lg w-full max-w-[1000px]"
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
        {/* 헤더: 스크롤 영역을 넘으면 애니메이션으로 나타남 */}
        <AnimatePresence>
          {headerVisible && (
            <motion.div
              className="sticky top-0 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Header onToolsClick={openToolsModal} />
            </motion.div>
          )}
        </AnimatePresence>
        <ToolsModal isOpen={isToolsModalOpen} onClose={closeToolsModal} />
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row gap-8 min-h-screen bg-[#202020] p-10 justify-center items-center"
        >
          <DogoPr />

          <DuodincoPrPage />
        </motion.section>
      </>
      <Footer />
    </main>
  );
}
