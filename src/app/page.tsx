"use client";
import Scroll from "./scroll/page";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.header>
      <Scroll />
    </motion.header>
  );
}
