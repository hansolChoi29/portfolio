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
    text: "강력한 추진력과 문제 해결",
  },
  {
    type: "phrase",
    text: "그리고 원활한 의사소통을 중요시합니다.",
  },

  {
    type: "phrase",
    text: "프로젝트를 소개하겠습니다.",
  },
  {
    type: "project",
    title: "Dogo-project",
    description: "숙박기간을 지정하여 호텔을 검색할 수 있습니다.",
    image: "/images/dogohome.png",
  },
  {
    type: "project",
    description: "필터를 이용하여 둘러볼 수 있습니다.",
    image: "/images/dogoList.png",
  },
  {
    type: "project",
    description: "객실을 자세히 확인하고 예약할 수 있습니다.",
    image: ["/images/dogoModal.png", "/images/dogoBoo.png"],
  },

  // {
  //   type: "project",
  //   title: "듀오딩코는 개발자의 학습을 도와줍니다.",
  //   description: "듀오딩코 프로젝트를 통해 협업과 혁신을 경험했습니다.",
  //   image: "/images/project2.png",
  // },
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
          animate={{ backgroundColor: headerVisible ? "#282828" : "#000000" }}
          transition={{ duration: 0.4 }}
        >
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
                        className="mx-auto mt-4 w-[700px]  rounded-lg shadow-lg"
                      />
                    ))
                  ) : (
                    <img
                      src={slides[index].image}
                      alt={slides[index].title}
                      className="mx-auto mt-4 w-[1000px] h-[500px] rounded-lg shadow-lg"
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
              transition={{ duration: 0.6 }}
            >
              <Header />
            </motion.div>
          )}
        </AnimatePresence>
        {/* 프로젝트 섹션: 섹션의 약 50%가 뷰포트에 들어오면 나타남 */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="flex gap-8 min-h-screen bg-[#202020] p-10 justify-center items-center"
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
