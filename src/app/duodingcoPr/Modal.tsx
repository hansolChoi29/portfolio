"use client";
import { useEffect, useRef, useState } from "react";
import DuodincoCard from "../../components/DudincoCard";
import ReactDOM from "react-dom";
import ModalContent from "./components/ModalContent";

export default function DuodincoPrPage() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef(null);

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
    viewport: { root: modalRef.current || undefined, once: true, amount: 0.5 },
    transition: { duration: 1 },
  };

  const modalContent = (
    <ModalContent
      onClose={() => setOpen(false)}
      modalRef={modalRef}
      scrollAnimationProps={scrollAnimationProps}
    />
  );
  return (
    <>
      <div className=" gap-6">
        <DuodincoCard onClick={() => setOpen(true)} />
      </div>
      {mounted && open && ReactDOM.createPortal(modalContent, document.body)}
    </>
  );
}
