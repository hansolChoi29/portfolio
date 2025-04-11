"use client";
import Scroll from "./projects/page";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.header>
      <Scroll />
    </motion.header>
  );
}
