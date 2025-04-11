"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }} //처음 상태 (등장 전)
      animate={{ opacity: 1, y: 0 }} //	최종 상태 (등장 후)
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-[#333333] shadow-md p-6"
    >
      <div className="text-xl font-bold text-white">최한솔의 포트폴리오</div>
    </motion.header>
  );
}
//npm install framer-motion
