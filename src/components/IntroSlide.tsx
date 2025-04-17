"use client";

import React from "react";
import { motion } from "framer-motion";
export default function IntroSlide({ text }: { text: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="text-white text-4xl md:text-6xl font-bold px-4 text-center"
    >
      {text}
    </motion.h1>
  );
}
