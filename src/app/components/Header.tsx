"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header className="sticky top-0 z-50 bg-black shadow-md p-6">
      <div className="text-xl font-bold text-white">최한솔의 포트폴리오</div>
    </motion.header>
  );
}
//npm install framer-motion
