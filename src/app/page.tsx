"use client";
import ProjectsPage from "./projects/page";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.header>
      <ProjectsPage />
    </motion.header>
  );
}
