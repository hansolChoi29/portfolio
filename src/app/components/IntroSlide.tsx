"use client";

import React from "react";
import { motion } from "framer-motion";
export default function IntroSlide({ text }: { text: string }) {
  return (
    <motion.h1 className="text-white text-4xl md:text-6xl font-bold px-4 text-center">
      {text}
    </motion.h1>
  );
}
