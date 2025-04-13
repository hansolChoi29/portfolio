"use client";

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import DogoCard from "../components/DogoCard";
import ModalContent from "./components/ModalContent";

export default function DogoPr() {
  const [open, setOpen] = useState(false);
  // 클라이언트 측에서만 Portal을 렌더링하기 위해 상태를 관리합니다.
  const [mounted, setMounted] = useState(false);
  // const modalRef = useRef(null);
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

  const modalContent = (
    // 컴포넌트로 분리하여 ui 만들어줌
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
      {mounted && ReactDOM.createPortal(modalContent, document.body)}
    </>
  );
}
