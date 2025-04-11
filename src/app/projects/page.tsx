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
    title: "두고 프로젝트는 사용자의 편의를 중시합니다.1",
    description: "두고 프로젝트를 진행하며 많은 경험을 쌓았습니다.",
    image: ["/images/dogohome.png", "/images/dogoList.png"],
  },
  {
    type: "project",
    // title: "두고 프로젝트는 사용자의 편의를 중시합니다.2",
    description: "두고 프로젝트를 진행하며 많은 경험을 쌓았습니다.",
    image: ["/images/dogoBoo.png", "/images/dogoModal.png"],
  },
  {
    type: "project",
    // title: "두고 프로젝트는 사용자의 편의를 중시합니다.3",
    description: "두고 프로젝트를 진행하며 많은 경험을 쌓았습니다.",
    image: "/images/dogoDetail.png",
  },
  {
    type: "project",
    title: "듀오딩코는 개발자의 학습을 도와줍니다.",
    description: "듀오딩코 프로젝트를 통해 협업과 혁신을 경험했습니다.",
    image: "/images/project2.png",
  },
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const totalSlides = slides.length;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const vh = window.innerHeight;
    // 한 화면(100vh)마다 한 슬라이드로 계산 (최대 totalSlides-1)
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
        {/* sticky 설정: 스크롤시에도 화면에 고정되며, 배경색을 애니메이션으로 조절 */}
        <motion.div
          className="sticky top-0 h-screen flex items-center justify-center"
          animate={{ backgroundColor: headerVisible ? "#333333" : "#000000" }}
          transition={{ duration: 0.4 }}
        >
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
                <h1 className="text-white text-2xl md:text-5xl font-bold">
                  {slides[index].text}
                </h1>
              ) : (
                <div className="text-white">
                  <h1 className="text-3xl md:text-5xl font-bold">
                    {slides[index].title}
                  </h1>
                  <p className="mt-4 text-lg">{slides[index].description}</p>
                  {/* 이미지 렌더링 부분: image 필드가 배열이면 모두 map으로 표시 */}
                  {Array.isArray(slides[index].image) ? (
                    slides[index].image.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${slides[index].title} ${i + 1}`}
                        className="mx-auto mt-4 w-full max-w-md rounded-lg shadow-lg"
                      />
                    ))
                  ) : (
                    <img
                      src={slides[index].image}
                      alt={slides[index].title}
                      className="mx-auto mt-4 w-full max-w-md rounded-lg shadow-lg"
                    />
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
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
              transition={{ duration: 0.4 }}
            >
              <Header />
            </motion.div>
          )}
        </AnimatePresence>
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
