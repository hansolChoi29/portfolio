"use client";

import { motion } from "framer-motion";

interface HeaderProps {
  onToolsClick: () => void;
}

export default function Header({ onToolsClick }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-[#f6f6f6] shadow-md p-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-black">최한솔의 포트폴리오</div>
        <nav className="flex items-center space-x-4">
          <button
            onClick={onToolsClick}
            className="text-[#636363] text-xl font-semibold hover:text-red-500"
          >
            Tools
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
