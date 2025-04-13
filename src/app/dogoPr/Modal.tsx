"use client";

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import DogoCard from "../components/DogoCard";
import { motion } from "framer-motion";
import ModalContent from "./components/ModalContent";

export default function DogoPr() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollAnimationProps = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { root: modalRef, once: true, amount: 0.5 },
    transition: { duration: 1 },
  };

  const modalContentJSX = (
    <ModalContent
      onClose={() => setOpen(false)}
      modalRef={modalRef}
      scrollAnimationProps={scrollAnimationProps}
    />
  );

  return (
    <>
      <div className="gap-6">
        <DogoCard onClick={() => setOpen(true)} />
      </div>
      {mounted && open && ReactDOM.createPortal(modalContentJSX, document.body)}
    </>
  );
}
